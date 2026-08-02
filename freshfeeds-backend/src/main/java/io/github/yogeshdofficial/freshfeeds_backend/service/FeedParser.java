package io.github.yogeshdofficial.freshfeeds_backend.service;

import io.github.yogeshdofficial.freshfeeds_backend.model.FeedItem;

import org.springframework.stereotype.Component;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import java.io.ByteArrayInputStream;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * Parses RSS (2.0 / 1.0) and Atom feeds into a flat list of items.
 *
 * <p>Uses the JDK's built-in DOM parser instead of a third-party library.
 */
@Component
public class FeedParser {

    private static final DateTimeFormatter RFC_1123 = DateTimeFormatter.RFC_1123_DATE_TIME;
    private static final DateTimeFormatter JAVA_UTIL_DATE =
            DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz uuuu", Locale.ENGLISH);
    private static final DateTimeFormatter SQL_DATE_TIME =
            DateTimeFormatter.ofPattern("uuuu-MM-dd HH:mm:ss");
    private static final DateTimeFormatter DATE_ONLY = DateTimeFormatter.ofPattern("uuuu-MM-dd");

    private final DocumentBuilderFactory factory;

    public FeedParser() {
        this.factory = DocumentBuilderFactory.newInstance();
        this.factory.setNamespaceAware(true);
        this.factory.setXIncludeAware(false);
        this.factory.setExpandEntityReferences(false);
        try {
            this.factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
            this.factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
            this.factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
        } catch (javax.xml.parsers.ParserConfigurationException ignored) {
            // Best-effort hardening; not all parsers support these features.
        }
    }

    public List<FeedItem> parse(byte[] body) {
        try {
            DocumentBuilder builder = this.factory.newDocumentBuilder();
            Document document = builder.parse(new ByteArrayInputStream(body));
            Element root = document.getDocumentElement();
            if (root != null && "feed".equalsIgnoreCase(root.getLocalName())) {
                return parseAtom(document);
            }
            return parseRss(document);
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }

    private List<FeedItem> parseRss(Document document) {
        NodeList items = document.getElementsByTagName("item");
        List<FeedItem> result = new ArrayList<>(items.getLength());
        for (int i = 0; i < items.getLength(); i++) {
            Element item = (Element) items.item(i);
            String title = firstText(item, "title");
            String link = firstText(item, "link");
            if (link == null || link.isBlank()) {
                link = permalinkGuid(item);
            }
            String pubDate = firstText(item, "pubDate");
            if (pubDate == null) {
                pubDate = firstTextNS(item, "date");
            }
            result.add(new FeedItem(title, link, parseDate(pubDate)));
        }
        return result;
    }

    private List<FeedItem> parseAtom(Document document) {
        NodeList entries = document.getElementsByTagName("entry");
        List<FeedItem> result = new ArrayList<>(entries.getLength());
        for (int i = 0; i < entries.getLength(); i++) {
            Element entry = (Element) entries.item(i);
            String title = firstText(entry, "title");
            String link = alternateLink(entry);
            String pubDate = firstTextNS(entry, "published");
            if (pubDate == null) {
                pubDate = firstTextNS(entry, "updated");
            }
            result.add(new FeedItem(title, link, parseDate(pubDate)));
        }
        return result;
    }

    private static String firstText(Element parent, String tagName) {
        NodeList nodes = parent.getElementsByTagName(tagName);
        for (int i = 0; i < nodes.getLength(); i++) {
            String text = nodes.item(i).getTextContent();
            if (text != null && !text.isBlank()) {
                return text.trim();
            }
        }
        return null;
    }

    private static String firstTextNS(Element parent, String localName) {
        NodeList nodes = parent.getElementsByTagNameNS("*", localName);
        for (int i = 0; i < nodes.getLength(); i++) {
            String text = nodes.item(i).getTextContent();
            if (text != null && !text.isBlank()) {
                return text.trim();
            }
        }
        return null;
    }

    private static String permalinkGuid(Element item) {
        NodeList guids = item.getElementsByTagName("guid");
        for (int i = 0; i < guids.getLength(); i++) {
            Element guid = (Element) guids.item(i);
            String isPermaLink = guid.getAttribute("isPermaLink");
            if (isPermaLink.isEmpty() || Boolean.parseBoolean(isPermaLink)) {
                String text = guid.getTextContent();
                if (text != null && !text.isBlank()) {
                    return text.trim();
                }
            }
        }
        return null;
    }

    private static String alternateLink(Element entry) {
        NodeList links = entry.getElementsByTagName("link");
        String fallback = null;
        for (int i = 0; i < links.getLength(); i++) {
            Element link = (Element) links.item(i);
            String rel = link.getAttribute("rel");
            String href = link.getAttribute("href");
            if (href.isBlank()) {
                continue;
            }
            if (rel.isEmpty() || "alternate".equals(rel)) {
                return href;
            }
            if (fallback == null) {
                fallback = href;
            }
        }
        return fallback;
    }

    static Instant parseDate(String raw) {
        if (raw == null) {
            return null;
        }
        String value = raw.trim();
        if (value.isEmpty()) {
            return null;
        }
        try {
            return ZonedDateTime.parse(value, RFC_1123).toInstant();
        } catch (DateTimeParseException ignored) {
        }
        try {
            return Instant.parse(value);
        } catch (DateTimeParseException ignored) {
        }
        try {
            return OffsetDateTime.parse(value).toInstant();
        } catch (DateTimeParseException ignored) {
        }
        try {
            return ZonedDateTime.parse(value, JAVA_UTIL_DATE).toInstant();
        } catch (DateTimeParseException ignored) {
        }
        try {
            return LocalDateTime.parse(value, SQL_DATE_TIME).toInstant(ZoneOffset.UTC);
        } catch (DateTimeParseException ignored) {
        }
        try {
            return LocalDateTime.parse(value, DATE_ONLY).toInstant(ZoneOffset.UTC);
        } catch (DateTimeParseException ignored) {
        }
        return null;
    }
}
