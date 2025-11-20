// categorizedFeeds.ts
// Central registry of RSS/Atom feed URLs grouped by category.
// Keep this file as a plain data file; the rest of the app imports categories
// and iterates the feed URLs at runtime.
export const categorizedFeeds = {
  programming: [
    {
      url: "https://www.reddit.com/r/programming/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://github.blog/feed/",
      domain: "github.blog",
    },
    {
      url: "http://feeds.feedburner.com/GDBcode",
      domain: "developers.googleblog.com",
    },
    {
      url: "https://stackoverflow.blog/feed/",
      domain: "stackoverflow.blog",
    },
    {
      url: "https://feeds.simplecast.com/XA_851k3",
      domain: "stackoverflow.blog",
    },
    {
      url: "https://engineering.fb.com/feed/",
      domain: "engineering.fb.com",
    },
    {
      url: "https://netflixtechblog.com/feed",
      domain: "netflixtechblog.com",
    },
    {
      url: "https://engineering.linkedin.com/blog.rss.html",
      domain: "engineering.linkedin.com",
    },
    {
      url: "https://medium.com/feed/airbnb-engineering",
      domain: "medium.com",
    },
    {
      url: "https://labs.spotify.com/feed/",
      domain: "engineering.atspotify.com",
    },
    {
      url: "https://slack.engineering/feed",
      domain: "slack.engineering",
    },
    {
      url: "https://instagram-engineering.com/feed/",
      domain: "instagram-engineering.com",
    },
    {
      url: "https://blog.twitter.com/engineering/en_us/blog.rss",
      domain: "blog.twitter.com",
    },
    {
      url: "https://developers.soundcloud.com/blog/blog.rss",
      domain: "developers.soundcloud.com",
    },
    {
      url: "https://about.gitlab.com/atom.xml",
      domain: "about.gitlab.com",
    },
    {
      url: "https://blog.jetbrains.com/feed",
      domain: "blog.jetbrains.com",
    },
    {
      url: "https://feed.infoq.com",
      domain: "infoq.com",
    },
    {
      url: "https://martinfowler.com/feed/atom",
      domain: "martinfowler.com",
    },
    {
      url: "https://feeds.feedburner.com/codinghorror",
      domain: "blog.codinghorror.com",
    },
    {
      url: "https://www.joelonsoftware.com/feed/",
      domain: "joelonsoftware.com",
    },
    {
      url: "http://feeds.hanselman.com/ScottHanselman",
      domain: "hanselman.com",
    },
    {
      url: "https://overreacted.io/rss.xml",
      domain: "overreacted.io",
    },
    {
      url: "https://medium.com/feed/better-programming",
      domain: "betterprogramming.pub",
    },
    {
      url: "https://medium.com/feed/hackernoon",
      domain: "medium.com",
    },
    {
      url: "https://codeascraft.com/feed/atom/",
      domain: "codeascraft.com",
    },
    {
      url: "https://m.signalvnoise.com/feed/",
      domain: "m.signalvnoise.com",
    },
    {
      url: "http://feeds.feedburner.com/se-radio",
      domain: "se-radio.net",
    },
    {
      url: "https://softwareengineeringdaily.com/category/podcast/feed",
      domain: "softwareengineeringdaily.com",
    },
    {
      url: "https://feeds.simplecast.com/gvtxulf",
      domain: "hanselminutes.com",
    },
    {
      url: "https://feeds.simplecast.com/dLRotFGk",
      domain: "developertea.com",
    },
    {
      url: "https://feeds.twit.tv/floss.xml",
      domain: "twit.tv",
    },
    {
      url: "https://stackabuse.com/rss/",
      domain: "stackabuse.com",
    },
    {
      url: "https://buffer.com/resources/overflow/rss/",
      domain: "buffer.com",
    },
    {
      url: "https://engineering.prezi.com/feed",
      domain: "engineering.prezi.com",
    },
    {
      url: "https://blog.jooq.org/feed",
      domain: "blog.jooq.org",
    },
    {
      url: "http://feeds.codenewbie.org/cnpodcast.xml",
      domain: "codernewbie.org",
    },
    {
      url: "https://completedeveloperpodcast.com/feed/podcast/",
      domain: "completedeveloperpodcast.com",
    },
    {
      url: "http://feeds.feedburner.com/ProgrammingThrowdown",
      domain: "programmingthrowdown.com",
    },
    {
      url: "https://feeds.fireside.fm/sdt/rss",
      domain: "softwaredefinedtalk.com",
    },
    {
      url: "https://thewomenintechshow.com/category/podcast/feed/",
      domain: "thewomenintechshow.com",
    },
    {
      url: "https://cynicaldeveloper.com/feed/podcast",
      domain: "cynical.dev",
    },
    {
      url: "https://feeds.transistor.fm/productivity-in-tech-podcast",
      domain: "productivityintech.com",
    },
    {
      url: "https://feeds.fireside.fm/standup/rss",
      domain: "standup.fm",
    },
    {
      url: "http://therabbithole.libsyn.com/rss",
      domain: "therabbithole.libsyn.com",
    },
    {
      url: "https://robertheaton.com/feed.xml",
      domain: "robertheaton.com",
    },
    {
      url: "http://scripting.com/ss.xml",
      domain: "scripting.com",
    },
    {
      url: "https://www.thecrazyprogrammer.com/category/programming/feed",
      domain: "thecrazyprogrammer.com",
    },
    {
      url: "https://www.thirtythreeforty.net/posts/index.xml",
      domain: "thirtythreeforty.net",
    },
    {
      url: "http://6figuredev.com/feed/rss/",
      domain: "6figuredev.com",
    },
  ],
  android: [
    {
      domain: "blog.google",
      url: "https://blog.google/products/android/rss",
    },
    {
      domain: "reddit.com",
      url: "https://www.reddit.com/r/android/.rss",
    },
    {
      domain: "youtube.com",
      url: "https://www.youtube.com/feeds/videos.xml?user=AndroidAuthority",
    },
    {
      domain: "androidpolice.com",
      url: "http://feeds.feedburner.com/AndroidPolice",
    },
    {
      domain: "androidcentral.com",
      url: "http://feeds.androidcentral.com/androidcentral",
    },
    {
      domain: "androidcentral.com",
      url: "http://feeds.feedburner.com/AndroidCentralPodcast",
    },
    {
      domain: "androidauthority.com",
      url: "https://www.androidauthority.com/feed",
    },
    {
      domain: "androidauthority.com",
      url: "https://androidauthority.libsyn.com/rss",
    },
    {
      domain: "droid-life.com",
      url: "https://www.droid-life.com/feed",
    },
    {
      domain: "xda-developers.com",
      url: "https://data.xda-developers.com/portal-feed",
    },
    {
      domain: "gsmarena.com",
      url: "https://www.gsmarena.com/rss-news-reviews.php3",
    },
    {
      domain: "androidcommunity.com",
      url: "https://androidcommunity.com/feed/",
    },
    {
      domain: "phandroid.com",
      url: "http://feeds2.feedburner.com/AndroidPhoneFans",
    },
    {
      domain: "twit.tv",
      url: "https://feeds.twit.tv/aaa.xml",
    },
    {
      domain: "androidguys.com",
      url: "https://www.androidguys.com/feed",
    },
    {
      domain: "talkandroid.com",
      url: "http://feeds.feedburner.com/AndroidNewsGoogleAndroidForums",
    },
    {
      domain: "cultofandroid.com",
      url: "https://www.cultofandroid.com/feed",
    },
    {
      domain: "cyanogenmods.org",
      url: "https://www.cyanogenmods.org/feed",
    },
  ],
  android_development: [
    {
      domain: "youtube.com",
      url: "https://www.youtube.com/feeds/videos.xml?user=androiddevelopers",
    },
    {
      domain: "medium.com",
      url: "https://medium.com/feed/androiddevelopers",
    },
    {
      domain: "android-developers.googleblog.com",
      url: "http://feeds.feedburner.com/blogspot/hsDu",
    },
    {
      domain: "reddit.com",
      url: "https://reddit.com/r/androiddev.rss",
    },
    {
      domain: "medium.com",
      url: "https://medium.com/feed/airbnb-engineering/tagged/android",
    },
    {
      domain: "proandroiddev.com",
      url: "https://proandroiddev.com/feed",
    },
    {
      domain: "instagram-engineering.com",
      url: "https://instagram-engineering.com/feed/tagged/android",
    },
    {
      domain: "medium.com",
      url: "https://medium.com/feed/mindorks/tagged/android",
    },
    {
      domain: "blog.jetbrains.com",
      url: "https://blog.jetbrains.com/blog/feed",
    },
    {
      domain: "android-arsenal.com",
      url: "https://feeds.feedburner.com/Android_Arsenal",
    },
    {
      domain: "jakewharton.com",
      url: "https://jakewharton.com/atom.xml",
    },
    {
      domain: "blog.stylingandroid.com",
      url: "http://feeds.feedburner.com/StylingAndroid",
    },
    {
      domain: "fragmentedpodcast.com",
      url: "https://feeds.simplecast.com/LpAGSLnY",
    },
    {
      domain: "talkingkotlin.com",
      url: "https://feeds.soundcloud.com/users/soundcloud:users:280353173/sounds.rss",
    },
    {
      domain: "blog.kotlin-academy.com",
      url: "https://blog.kotlin-academy.com/feed",
    },
    {
      domain: "youtube.com",
      url: "https://www.youtube.com/feeds/videos.xml?playlist_id=PLQ176FUIylUa6SChjajjVc-LMzxWiz6dy",
    },
    {
      domain: "youtube.com",
      url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCSLXy31j2Z0sdDeeAX5JpPw",
    },
    {
      domain: "youtube.com",
      url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCKubKoe1CBw_-n_GXetEQbg",
    },
    {
      domain: "blog.danlew.net",
      url: "https://blog.danlew.net/rss/",
    },
    {
      domain: "zacsweers.dev",
      url: "https://www.zacsweers.dev/rss/",
    },
    {
      domain: "zarah.dev",
      url: "https://zarah.dev/feed.xml",
    },
    {
      domain: "joebirch.co",
      url: "https://joebirch.co/feed",
    },
    {
      domain: "publicobject.com",
      url: "https://publicobject.com/rss/",
    },
    {
      domain: "saket.me",
      url: "https://saket.me/feed/",
    },
    {
      domain: "zsmb.co",
      url: "https://zsmb.co/index.xml",
    },
    {
      domain: "okkotlin.com",
      url: "https://okkotlin.com/rss.xml",
    },
    {
      domain: "handstandsam.com",
      url: "https://handstandsam.com/feed/",
    },
    {
      domain: "goobar.io",
      url: "https://goobar.io/feed",
    },
    {
      domain: "chrynan.codes",
      url: "https://chrynan.codes/rss/",
    },
    {
      domain: "buffer.com",
      url: "https://buffer.com/resources/android/rss/",
    },
    {
      domain: "androidbackstage.blogspot.com",
      url: "http://feeds.feedburner.com/blogspot/androiddevelopersbackstage",
    },
    {
      domain: "us2.campaign-archive.com",
      url: "https://us2.campaign-archive.com/feed?u=887caf4f48db76fd91e20a06d&id=4eb677ad19",
    },
  ],
  apple: [
    {
      domain: "apple.com",
      url: "https://www.apple.com/newsroom/rss-feed.rss",
    },
    {
      domain: "youtube.com",
      url: "https://www.youtube.com/feeds/videos.xml?user=Apple",
    },
    {
      domain: "reddit.com",
      url: "https://www.reddit.com/r/apple/.rss",
    },
    {
      domain: "reddit.com",
      url: "https://www.reddit.com/r/iphone/.rss",
    },
    {
      domain: "9to5mac.com",
      url: "https://9to5mac.com/feed",
    },
    {
      domain: "macrumors.com",
      url: "http://feeds.macrumors.com/MacRumors-Mac",
    },
    {
      domain: "youtube.com",
      url: "https://www.youtube.com/feeds/videos.xml?user=macrumors",
    },
    {
      domain: "appleinsider.com",
      url: "https://appleinsider.com/rss/news/",
    },
    {
      domain: "macworld.com",
      url: "https://www.macworld.com/index.rss",
    },
    {
      domain: "imore.com",
      url: "http://feeds.feedburner.com/TheiPhoneBlog",
    },
    {
      domain: "macstories.net",
      url: "https://www.macstories.net/feed",
    },
    {
      domain: "daringfireball.net",
      url: "https://daringfireball.net/feeds/main",
    },
    {
      domain: "marco.org",
      url: "https://marco.org/rss",
    },
    {
      domain: "cultofmac.com",
      url: "https://www.cultofmac.com/feed",
    },
    {
      domain: "loopinsight.com",
      url: "https://www.loopinsight.com/feed",
    },
    {
      domain: "osxdaily.com",
      url: "http://feeds.feedburner.com/osxdaily",
    },
  ],
  architecture: [
    {
      domain: "reddit.com",
      url: "https://www.reddit.com/r/architecture/.rss",
    },
    {
      domain: "archdaily.com",
      url: "http://feeds.feedburner.com/Archdaily",
    },
    {
      domain: "dezeen.com",
      url: "https://www.dezeen.com/architecture/feed/",
    },
    {
      domain: "architecturaldigest.com",
      url: "https://www.architecturaldigest.com/feed/rss",
    },
    {
      domain: "archinect.com",
      url: "https://archinect.com/feed/1/news",
    },
    {
      domain: "architizer.com",
      url: "https://architizer.wpengine.com/feed/",
    },
    {
      domain: "designboom.com",
      url: "https://www.designboom.com/architecture/feed/",
    },
    {
      domain: "archpaper.com",
      url: "https://archpaper.com/feed",
    },
    {
      domain: "inhabitat.com",
      url: "https://inhabitat.com/architecture/feed/",
    },
    {
      domain: "contemporist.com",
      url: "https://www.contemporist.com/feed/",
    },
    {
      domain: "design-milk.com",
      url: "https://design-milk.com/category/architecture/feed/",
    },
    {
      domain: "youtube.com",
      url: "https://www.youtube.com/feeds/videos.xml4",
    },
    {
      domain: "youtube.com",
      url: "https://www.youtube.com/feeds/videos.xml5",
    },
    {
      domain: "archidose.blogspot.com",
      url: "http://feeds.feedburner.com/archidose",
    },
  ],
  beauty: [
    {
      url: "https://www.elle.com/rss/beauty.xml/",
      domain: "elle.com",
    },
    {
      url: "https://www.popsugar.com/beauty/feed",
      domain: "popsugar.com",
    },
    {
      url: "https://www.refinery29.com/beauty/rss.xml",
      domain: "refinery29.com",
    },
    {
      url: "https://fashionista.com/rss/excerpt/beauty",
      domain: "fashionista.com",
    },
    {
      url: "https://feeds.feedburner.com/intothegloss/oqoU",
      domain: "intothegloss.com",
    },
    {
      url: "https://www.fashionlady.in/category/beauty-tips/feed",
      domain: "fashionlady.in",
    },
    {
      url: "https://www.yesstyle.com/blog/category/the-beauty-blog/feed/",
      domain: "yesstyle.com",
    },
    {
      url: "https://thebeautylookbook.com/feed",
      domain: "thebeautylookbook.com",
    },
    {
      url: "https://thebeautybrains.com/blog/feed/",
      domain: "thebeautybrains.com",
    },
    {
      url: "https://www.wearedore.com/feed",
      domain: "wearedore.com",
    },
    {
      url: "http://feeds.feedburner.com/frmheadtotoe",
      domain: "frmheadtotoe.com",
    },
  ],
  books: [
    {
      url: "https://reddit.com/r/books/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://bookriot.com/feed/",
      domain: "bookriot.com",
    },
    {
      url: "https://www.kirkusreviews.com/feeds/rss/",
      domain: "kirkusreviews.com",
    },
    {
      url: "https://www.newinbooks.com/feed/",
      domain: "newinbooks.com",
    },
    {
      url: "https://ayearofreadingtheworld.com/feed/",
      domain: "ayearofreadingtheworld.com",
    },
    {
      url: "https://aestasbookblog.com/feed/",
      domain: "aestasbookblog.com",
    },
    {
      url: "https://wokeread.home.blog/feed/",
      domain: "wokeread.home.blog",
    },
  ],
  business_economy: [
    {
      url: "https://www.youtube.com/feeds/videos.xml?user=Bloomberg",
      domain: "youtube.com",
    },
    {
      url: "https://www.cnbc.com/id/100003114/device/rss/rss.html",
      domain: "cnbc.com",
    },
    {
      url: "https://www.forbes.com/business/feed/",
      domain: "forbes.com",
    },
    {
      url: "https://fortune.com/feed",
      domain: "fortune.com",
    },
    {
      url: "https://finance.yahoo.com/news/rss/index",
      domain: "finance.yahoo.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?user=businessinsider",
      domain: "youtube.com",
    },
    {
      url: "https://feeds.npr.org/510313/podcast.xml",
      domain: "npr.org",
    },
    {
      url: "http://feeds.harvardbusiness.org/harvardbusiness/ideacast",
      domain: "hbr.org",
    },
    {
      url: "https://economictimes.indiatimes.com/rssfeedsdefault.cms",
      domain: "economictimes.indiatimes.com",
    },
    {
      url: "https://www.business-standard.com/rss/home_page_top_stories.rss",
      domain: "business-standard.com",
    },
    {
      url: "https://seekingalpha.com/market_currents.xml",
      domain: "seekingalpha.com",
    },
    {
      url: "https://www.investing.com/rss/news.rss",
      domain: "investing.com",
    },
    {
      url: "https://tim.blog/feed/",
      domain: "tim.blog",
    },
    {
      url: "https://feeds.feedburner.com/Mixergy-main-podcast",
      domain: "mixergy.com",
    },
    {
      url: "http://thegrowthshow.hubspot.libsynpro.com/",
      domain: "hubspot.com",
    },
    {
      url: "https://ducttape.libsyn.com/rss",
      domain: "ducttapemarketing.com",
    },
  ],
  cars: [
    {
      url: "https://www.reddit.com/r/formula1/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://www.caranddriver.com/rss/all.xml",
      domain: "caranddriver.com",
    },
    {
      url: "http://jalopnik.com/rss",
      domain: "jalopnik.com",
    },
    {
      url: "https://www.autoblog.com/rss.xml",
      domain: "autoblog.com",
    },
    {
      url: "https://www.autocar.co.uk/rss",
      domain: "autocar.co.uk",
    },
    {
      url: "https://www.autocarindia.com/RSS.ashx?type=News",
      domain: "autocarindia.com",
    },
    {
      url: "https://www.autocarindia.com/RSS.ashx?type=all_cars",
      domain: "autocarindia.com",
    },
    {
      url: "https://www.autocarindia.com/RSS.ashx?type=all_bikes",
      domain: "autocarindia.com",
    },
    {
      url: "https://www.carscoops.com/feed/",
      domain: "carscoops.com",
    },
    {
      url: "http://feeds.feedburner.com/speedhunters",
      domain: "speedhunters.com",
    },
    {
      url: "https://www.thetruthaboutcars.com/feed/",
      domain: "thetruthaboutcars.com",
    },
    {
      url: "http://feeds.feedburner.com/autonews/AutomakerNews",
      domain: "autonews.com",
    },
    {
      url: "http://feeds.feedburner.com/autonews/EditorsPicks",
      domain: "autonews.com",
    },
    {
      url: "https://bringatrailer.com/feed/",
      domain: "bringatrailer.com",
    },
    {
      url: "https://petrolicious.com/feed",
      domain: "petrolicious.com",
    },
    {
      url: "https://www.carbodydesign.com/feed/",
      domain: "carbodydesign.com",
    },
    {
      url: "https://feeds.feedburner.com/BmwBlog",
      domain: "bmwblog.com",
    },
    {
      url: "https://www.bikeexif.com/feed",
      domain: "bikeexif.com",
    },
  ],
  cricket: [
    {
      url: "http://feeds.bbci.co.uk/sport/cricket/rss.xml",
      domain: "bbc.co.uk",
    },
    {
      url: "https://www.reddit.com/r/Cricket/.rss",
      domain: "reddit.com",
    },
    {
      url: "http://www.espncricinfo.com/rss/content/story/feeds.xml",
      domain: "espncricinfo.com",
    },
    {
      url: "https://www.theguardian.com/sport/cricket/rss",
      domain: "theguardian.com",
    },
    {
      url: "https://feeds.megaphone.fm/ESP9247240951",
      domain: "espn.com",
    },
    {
      url: "http://feeds.feedburner.com/ndtv-cricket",
      domain: "ndtv.com",
    },
    {
      url: "http://www.wisden.com/feed",
      domain: "wisden.com",
    },
    {
      url: "http://feeds.soundcloud.com/users/soundcloud:users:341034518/sounds.rss",
      domain: "wisden.com",
    },
    {
      url: "https://www.theroar.com.au/cricket/feed/",
      domain: "theroar.com.au",
    },
    {
      url: "http://rss.acast.com/theanalystinsidecricket",
      domain: "theanalyst.net",
    },
    {
      url: "https://rss.whooshkaa.com/rss/podcast/1308",
      domain: "gradecricketer.club",
    },
    {
      url: "http://podcasts.files.bbci.co.uk/p02gsmh9.rss",
      domain: "bbc.co.uk",
    },
    {
      url: "http://podcasts.files.bbci.co.uk/p02pcb4w.rss",
      domain: "bbc.co.uk",
    },
    {
      url: "http://podcasts.files.bbci.co.uk/p0ms21r7.rss",
      domain: "bbc.co.uk",
    },
    {
      url: "https://rss.acast.com/cricket-unfiltered",
      domain: "piccolopodcasts.com.au",
    },
    {
      url: "http://feeds.feedburner.com/cantbowlcantthrow",
      domain: "player.whooshkaa.com",
    },
    {
      url: "https://www.spreaker.com/show/338734/episodes/feed",
      domain: "spreaker.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?playlist_id=PLQ176FUIyIUa6SChjajjVc-LMzxWiz6dy0",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?playlist_id=PLQ176FUIyIUa6SChjajjVc-LMzxWiz6dy1",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?playlist_id=PLQ176FUIyIUa6SChjajjVc-LMzxWiz6dy2",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?playlist_id=PLQ176FUIyIUa6SChjajjVc-LMzxWiz6dy3",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?playlist_id=PLQ176FUIyIUa6SChjajjVc-LMzxWiz6dy4",
      domain: "youtube.com",
    },
  ],
  interior_design: [
    {
      url: "https://www.reddit.com/r/InteriorDesign/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://www.apartmenttherapy.com/design.rss",
      domain: "apartmenttherapy.com",
    },
    {
      url: "https://www.dezeen.com/interiors/feed/",
      domain: "dezeen.com",
    },
    {
      url: "https://www.designboom.com/design/feed",
      domain: "designboom.com",
    },
    {
      url: "https://design-milk.com/category/interior-design/feed/",
      domain: "design-milk.com",
    },
    {
      url: "https://www.interiordesign.net/rss/",
      domain: "interiordesign.net",
    },
    {
      url: "http://feeds.feedburner.com/core77/blog",
      domain: "core77.com",
    },
    {
      url: "https://inhabitat.com/design/feed/",
      domain: "inhabitat.com",
    },
    {
      url: "https://www.idealhome.co.uk/feed",
      domain: "idealhome.co.uk",
    },
    {
      url: "http://feeds.feedburner.com/yankodesign",
      domain: "yankodesign.com",
    },
    {
      url: "https://www.yatzer.com/rss.xml",
      domain: "yatzer.com",
    },
    {
      url: "http://feeds.feedburner.com/fubiz",
      domain: "fubiz.net",
    },
    {
      url: "https://thedesignfiles.net/feed/",
      domain: "thedesignfiles.net",
    },
    {
      url: "http://www.home-designing.com/feed",
      domain: "home-designing.com",
    },
    {
      url: "https://www.trendir.com/feed/",
      domain: "trendir.com",
    },
    {
      url: "https://www.younghouselove.com/feed/",
      domain: "younghouselove.com",
    },
    {
      url: "https://theinspiredroom.net/feed/",
      domain: "theinspiredroom.net",
    },
    {
      url: "https://www.decoist.com/feed/",
      domain: "decoist.com",
    },
    {
      url: "https://www.stgirlbylbay.com/feed/",
      domain: "stgirlbylbay.com",
    },
    {
      url: "https://www.lizmarieblog.com/feed/",
      domain: "lizmarieblog.com",
    },
    {
      url: "https://inmyownstyle.com/feed/",
      domain: "inmyownstyle.com",
    },
    {
      url: "http://feeds.feedburner.com/blogspot/zBZ",
      domain: "thriftydecorchick.com",
    },
    {
      url: "https://www.decor8blog.com/blog/formal-rss",
      domain: "decor8blog.com",
    },
    {
      url: "http://www.betterlivingthroughdesign.com/feed/",
      domain: "betterlivingthroughdesign.com",
    },
  ],
  diy: [
    {
      url: "https://hackaday.com/blog/feed/",
      domain: "hackaday.com",
    },
    {
      url: "https://www.howtogeek.com/feed/",
      domain: "howtogeek.com",
    },
    {
      url: "https://www.makeuseof.com/feed/",
      domain: "makeuseof.com",
    },
    {
      url: "https://www.wonderhowto.com/rss.xml",
      domain: "wonderhowto.com",
    },
    {
      url: "https://www.apartmenttherapy.com/projects.rss",
      domain: "apartmenttherapy.com",
    },
    {
      url: "https://blog.etsy.com/en/feed/",
      domain: "blog.etsy.com",
    },
    {
      url: "https://www.ikeahackers.net/feed",
      domain: "ikeahackers.net",
    },
    {
      url: "https://abeautifulmess.com/feed",
      domain: "abeautifulmess.com",
    },
    {
      url: "https://centsationalstyle.com/feed/",
      domain: "centsationalstyle.com",
    },
    {
      url: "https://www.diyncrafts.com/feed",
      domain: "diyncrafts.com",
    },
    {
      url: "http://ohhappyday.com/feed/",
      domain: "ohhappyday.com",
    },
  ],
  fashion: [
    {
      url: "https://www.elle.com/rss/fashion.xml",
      domain: "elle.com",
    },
    {
      url: "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml",
      domain: "nytimes.com",
    },
    {
      url: "https://www.theguardian.com/fashion/rss",
      domain: "theguardian.com",
    },
    {
      url: "https://www.popsugar.com/fashion/feed",
      domain: "popsugar.com",
    },
    {
      url: "https://www.refinery29.com/fashion/rss",
      domain: "refinery29.com",
    },
    {
      url: "https://fashionista.com/rss/excerpt/",
      domain: "fashionista.com",
    },
    {
      url: "https://www.whowhatwear.com/rss",
      domain: "whowhatwear.com",
    },
    {
      url: "https://www.fashionlady.in/category/fashion/feed",
      domain: "fashionlady.in",
    },
    {
      url: "https://www.fashionbeans.com/rss-feed/?category=fashion",
      domain: "fashionbeans.com",
    },
    {
      url: "https://www.yesstyle.com/blog/category/trend-and-style/feed/",
      domain: "yesstyle.com",
    },
  ],
  food: [
    {
      url: "https://rss.nytimes.com/services/xml/rss/nyt/DiningandWine.xml",
      domain: "nytimes.com",
    },
    {
      url: "http://feeds.feedburner.com/seriouseats/recipes",
      domain: "seriouseats.com",
    },
    {
      url: "https://www.thekitchn.com/main.rss",
      domain: "thekitchn.com",
    },
    {
      url: "http://feeds.feedburner.com/food52/TheAandMBlog",
      domain: "food52.com",
    },
    {
      url: "http://feeds.feedburner.com/smittenkitchen",
      domain: "smittenkitchen.com",
    },
    {
      url: "https://www.101cookbooks.com/feed",
      domain: "101cookbooks.com",
    },
    {
      url: "https://blog.williams-sonoma.com/feed/",
      domain: "blog.williams-sonoma.com",
    },
    {
      url: "https://www.skinnytaste.com/feed/",
      domain: "skinnytaste.com",
    },
    {
      url: "https://ohsheglows.com/feed/",
      domain: "ohsheglows.com",
    },
    {
      url: "https://www.howsweeteats.com/feed/",
      domain: "howsweeteats.com",
    },
    {
      url: "http://joythebaker.com/feed/",
      domain: "joythebaker.com",
    },
    {
      url: "https://www.davidlebovitz.com/feed/",
      domain: "davidlebovitz.com",
    },
    {
      url: "https://greenkitchenstories.com/feed/",
      domain: "greenkitchenstories.com",
    },
    {
      url: "https://www.loveandoliveoil.com/feed",
      domain: "loveandoliveoil.com",
    },
    {
      url: "https://www.sproutedkitchen.com/home?format=rss",
      domain: "sproutedkitchen.com",
    },
    {
      url: "http://www.shutterbean.com/feed/",
      domain: "shutterbean.com",
    },
    {
      url: "https://cnz.to/feed/",
      domain: "cnz.to",
    },
    {
      url: "www.youtube.com/feeds/videos",
      domain: "youtube.com",
    },
    {
      url: "www.youtube.com/feeds/Videos",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?playlist_id=PLQ176FUIyIUa6SChjajjVc-LMzxWiz6dy7",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?playlist_id=PLQ176FUIyIUa6SChjajjVc-LMzxWiz6dy8",
      domain: "youtube.com",
    },
  ],
  football: [
    {
      url: "https://www.reddit.com/r/football/.rss?format=xml",
      domain: "reddit.com",
    },
    {
      url: "https://www.reddit.com/r/Championship/.rss?format=xml",
      domain: "reddit.com",
    },
    {
      url: "https://www.goal.com/feeds/en/news",
      domain: "goal.com",
    },
    {
      url: "https://www.skysports.com/football/rss/home",
      domain: "skysports.com",
    },
    {
      url: "https://www.football365.com/feed",
      domain: "football365.com",
    },
  ],
  funny: [
    {
      url: "https://www.theonion.com/rss",
      domain: "theonion.com",
    },
    {
      url: "http://feeds.feedburner.com/oatmealfeed",
      domain: "theoatmeal.com",
    },
    {
      url: "http://feeds.feedburner.com/CrackedRSS",
      domain: "cracked.com",
    },
    {
      url: "https://www.smbc-comics.com/comic/rss",
      domain: "smbc-comics.com",
    },
    {
      url: "https://www.penny-arcade.com/feed",
      domain: "penny-arcade.com",
    },
    {
      url: "http://feeds.feedburner.com/Explosm",
      domain: "explosm.net",
    },
    {
      url: "http://syndication.thedailywtf.com/TheDailyWtf",
      domain: "thedailywtf.com",
    },
    {
      url: "http://phdcomics.com/gradfeed.php",
      domain: "phdcomics.com",
    },
    {
      url: "http://feeds.feedburner.com/icanhascheezburger",
      domain: "icanhascheezburger.com",
    },
    {
      url: "http://feeds.feedburner.com/failblog",
      domain: "failblog.cheezburger.com",
    },
    {
      url: "https://thebloggess.com/feed/",
      domain: "thebloggess.com",
    },
    {
      url: "https://postsecret.com/feed/?alt=rss",
      domain: "postsecret.com",
    },
    {
      url: "https://www.awesomelyluvvie.com/feed",
      domain: "awesomelyluvvie.com",
    },
  ],
  gaming: [
    {
      url: "https://www.reddit.com/r/gaming/.rss",
      domain: "reddit.com",
    },
    {
      url: "http://feeds.ign.com/ign/all",
      domain: "ign.com",
    },
    {
      url: "https://www.gamespot.com/feeds/mashup/",
      domain: "gamespot.com",
    },
    {
      url: "https://kotaku.com/rss",
      domain: "kotaku.com",
    },
    {
      url: "https://www.polygon.com/rss/index.xml",
      domain: "polygon.com",
    },
    {
      url: "http://feeds.feedburner.com/RockPaperShotgun",
      domain: "rockpapershotgun.com",
    },
    {
      url: "https://www.eurogamer.net/?format=rss",
      domain: "eurogamer.net",
    },
    {
      url: "https://store.steampowered.com/feeds/news.xml",
      domain: "steampowered.com",
    },
    {
      url: "http://feeds.feedburner.com/psblog",
      domain: "blog.playstation.com",
    },
    {
      url: "https://majornelson.com/feed/",
      domain: "majornelson.com",
    },
    {
      url: "http://feeds.feedburner.com/GamasutraNews",
      domain: "gamasutra.com",
    },
    {
      url: "https://www.escapistmagazine.com/v2/feed/",
      domain: "escapistmagazine.com",
    },
    {
      url: "https://indiegamesplus.com/feed",
      domain: "indiegamesplus.com",
    },
    {
      url: "https://toucharcade.com/community/forums/index.rss",
      domain: "toucharcade.com",
    },
    {
      url: "http://feeds.feedburner.com/TheAncientGamingNoob",
      domain: "tagn.wordpress.com",
    },
    {
      url: "https://www.makeupandbeautyblog.com/feed/",
      domain: "makeupandbeautyblog.com",
    },
  ],
  history: [
    {
      url: "https://feeds.npr.org/510333/podcast.xml",
      domain: "npr.org",
    },
    {
      url: "http://feeds.feedburner.com/dancarlin/historypodcast",
      domain: "dancarlin.com",
    },
    {
      url: "https://feeds.megaphone.fm/revisionisthistory",
      domain: "revisionisthistory.com",
    },
    {
      url: "https://feeds.megaphone.fm/lore",
      domain: "lorepodcast.com",
    },
    {
      url: "https://feeds.megaphone.fm/VMPR7068253588",
      domain: "youmustrememberthispodcast.com",
    },
    {
      url: "https://americanhistory.si.edu/blog/feed",
      domain: "americanhistory.si.edu",
    },
    {
      url: "http://www.historynet.com/feed",
      domain: "historynet.com",
    },
    {
      url: "https://www.historyinnowmagazine.com/blog/?format=RSS",
      domain: "historyinnowmagazine.com",
    },
    {
      url: "https://www.thehistoryreader.com/feed/",
      domain: "thehistoryreader.com",
    },
    {
      url: "http://feeds.thememorypalace.us/thememorypalace",
      domain: "thememorypalace.us",
    },
    {
      url: "https://feeds.megaphone.fm/ESP5780452710",
      domain: "megaphone.fm",
    },
  ],
  ios_development: [
    {
      url: "https://developer.apple.com/news/rss/news.rss",
      domain: "developer.apple.com",
    },
    {
      url: "https://www.swiftbysundell.com/feed.rss",
      domain: "swiftbysundell.com",
    },
    {
      url: "https://swiftbysundell.com/feed.rss",
      domain: "swiftbysundell.com",
    },
    {
      url: "https://swiftrocks.com/rss.xml",
      domain: "swiftrocks.com",
    },
    {
      url: "https://useyourloaf.com/blog/rss.xml",
      domain: "useyourloaf.com",
    },
    {
      url: "https://olebegemann.com/blog/atom.xml",
      domain: "olebegemann.com",
    },
    {
      url: "https://inessential.com/xml/rss.xml",
      domain: "inessential.com",
    },
    {
      url: "https://jakewharton.com/atom.xml",
      domain: "jakewharton.com",
    },
    {
      url: "https://www.relay.fm/radar/feed",
      domain: "relay.fm",
    },
    {
      url: "https://feeds.fireside.fm/mrc/rss",
      domain: "mrc.fireside.fm",
    },
    {
      url: "https://feeds.devchat.tv/all-shows-devchat.rss",
      domain: "devchat.tv",
    },
    {
      url: "https://atomicbirdhouse.com/index.xml",
      domain: "atomicbirdhouse.com",
    },
    {
      url: "https://albertodebortoli.com/rss",
      domain: "albertodebortoli.com",
    },
    {
      url: "http://augmentedcode.io/feed",
      domain: "augmentedcode.io",
    },
    {
      url: "https://benoitpasquier.com/index.xml",
      domain: "benoitpasquier.com",
    },
    {
      url: "https://www.fabisevi.ch/feed/",
      domain: "fabisevi.ch",
    },
    {
      url: "https://mobileally.co/index.xml",
      domain: "mobileally.co",
    },
    {
      url: "https://irakpavel.tech/feed.xml",
      domain: "irakpavel.tech",
    },
    {
      url: "https://tyler.io/feed/",
      domain: "tyler.io",
    },
  ],
  movies: [
    {
      url: "https://www.reddit.com/r/movies/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://deadline.com/feed/",
      domain: "deadline.com",
    },
    {
      url: "https://variety.com/feed/",
      domain: "variety.com",
    },
    {
      url: "https://www.indiewire.com/feed/",
      domain: "indiewire.com",
    },
    {
      url: "http://feeds.feedburner.com/slashfilm",
      domain: "slashfilm.com",
    },
    {
      url: "https://www.comingsoon.net/feed",
      domain: "comingsoon.net",
    },
    {
      url: "https://www.firstshowing.net/feed/",
      domain: "firstshowing.net",
    },
    {
      url: "https://www.avclub.com/rss",
      domain: "avclub.com",
    },
    {
      url: "https://filmschoolrejects.com/feed/",
      domain: "filmschoolrejects.com",
    },
    {
      url: "https://www.bleedingcool.com/movies/feed/",
      domain: "bleedingcool.com",
    },
    {
      url: "https://www.aintitcool.com/node/feed/",
      domain: "aintitcool.com",
    },
  ],
  music: [
    {
      url: "https://www.billboard.com/articles/rss.xml",
      domain: "billboard.com",
    },
    {
      url: "http://pitchfork.com/rss/news",
      domain: "pitchfork.com",
    },
    {
      url: "http://consequenceofsound.net/feed",
      domain: "consequence.net",
    },
    {
      url: "https://www.musicbusinessworldwide.com/feed/",
      domain: "musicbusinessworldwide.com",
    },
    {
      url: "http://songexploder.net/feed",
      domain: "songexploder.net",
    },
    {
      url: "https://edm.com/rss/feed",
      domain: "edm.com",
    },
    {
      url: "https://www.youredm.com/feed",
      domain: "youredm.com",
    },
    {
      url: "http://feeds.feedburner.com/metalinjection",
      domain: "metalinjection.net",
    },
  ],
  news: [
    {
      url: "http://feeds.bbci.co.uk/news/world/rss.xml",
      domain: "bbc.co.uk",
    },
    {
      url: "http://rss.cnn.com/rss/edition_world.rss",
      domain: "cnn.com",
    },
    {
      url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
      domain: "nytimes.com",
    },
    {
      url: "https://www.theguardian.com/world/rss",
      domain: "theguardian.com",
    },
    {
      url: "http://feeds.washingtonpost.com/rss/world",
      domain: "washingtonpost.com",
    },
    {
      url: "https://www.reddit.com/r/worldnews/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://www.cnbc.com/id/100727362/device/rss/rss.html",
      domain: "cnbc.com",
    },
    {
      url: "https://www.yahoo.com/news/rss",
      domain: "yahoo.com",
    },
    {
      url: "https://news.google.com/news",
      domain: "news.google.com",
    },
    {
      url: "https://timesofindia.indiatimes.com/rssfeeds/296589292.cms",
      domain: "timesofindia.indiatimes.com",
    },
    {
      url: "http://feeds.feedburner.com/ndtvnews-world-news",
      domain: "ndtv.com",
    },
  ],
  personal_finance: [
    {
      url: "https://www.reddit.com/r/personalfinance/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://www.nerdwallet.com/blog/feed/",
      domain: "nerdwallet.com",
    },
    {
      url: "https://blog.mint.com/feed/",
      domain: "mint.intuit.com",
    },
    {
      url: "https://www.thepennyhoarder.com/feed/",
      domain: "thepennyhoarder.com",
    },
    {
      url: "https://www.moneycrashers.com/feed/",
      domain: "moneycrashers.com",
    },
    {
      url: "https://www.iwillteachyoutoberich.com/feed/",
      domain: "iwillteachyoutoberich.com",
    },
    {
      url: "https://www.makingsenseofcents.com/feed/",
      domain: "makingsenseofcents.com",
    },
    {
      url: "https://www.financialsamurai.com/feed/",
      domain: "financialsamurai.com",
    },
    {
      url: "https://millennialmoney.com/feed/",
      domain: "millennialmoney.com",
    },
    {
      url: "https://www.getrichslowly.org/feed/",
      domain: "getrichslowly.org",
    },
    {
      url: "https://affordanything.com/feed/",
      domain: "affordanything.com",
    },
    {
      url: "https://www.goodfinancialcents.com/feed/",
      domain: "goodfinancialcents.com",
    },
    {
      url: "https://www.sidehustlenation.com/feed/",
      domain: "sidehustlenation.com",
    },
    {
      url: "http://www.moneyunder30.com/feed",
      domain: "moneyunder30.com",
    },
    {
      url: "https://www.doughroller.net/feed/",
      domain: "doughroller.net",
    },
    {
      url: "http://feeds.feedburner.com/wisebread",
      domain: "wisebread.com",
    },
    {
      url: "https://thecollegeinvestor.com/feed/",
      domain: "cdn.thecollegeinvestor.com",
    },
    {
      url: "https://studentloanhero.com/blog/feed/",
      domain: "studentloanhero.com",
    },
    {
      url: "http://feeds.feedburner.com/budgetsaresexy",
      domain: "budgetsaresexy.com",
    },
    {
      url: "http://feeds.feedburner.com/Frugalwoods",
      domain: "frugalwoods.com",
    },
    {
      url: "https://moneysavingmom.com/feed",
      domain: "moneysavingmom.com",
    },
    {
      url: "http://feeds.feedburner.com/MoneyNing",
      domain: "moneyning.com",
    },
    {
      url: "https://mywifequitherjob.com/feed/",
      domain: "mywifequitherjob.com",
    },
    {
      url: "http://feeds.feedblitz.com/kitciesnerdseyeview&x=1",
      domain: "kitces.com",
    },
    {
      url: "https://obliviousinvestor.com/feed/",
      domain: "obliviousinvestor.com",
    },
    {
      url: "https://www.savingadvice.com/feed/",
      domain: "savingadvice.com",
    },
    {
      url: "https://www.learntotradethemarket.com/feed/",
      domain: "learntotradethemarket.com",
    },
    {
      url: "https://wellkeptwallet.com/feed/",
      domain: "wellkeptwallet.com",
    },
  ],
  photography: [
    {
      url: "https://iso.500px.com/feed/",
      domain: "iso.500px.com",
    },
    {
      url: "https://500px.com/editors.rss",
      domain: "500px.com",
    },
    {
      url: "https://petapixel.com/feed/",
      domain: "petapixel.com",
    },
    {
      url: "https://feeds.feedburner.com/DigitalPhotographySchool",
      domain: "digital-photography-school.com",
    },
    {
      url: "https://www.lightstalking.com/feed/",
      domain: "lightstalking.com",
    },
    {
      url: "https://lightroomkillertips.com/feed/",
      domain: "lightroomkillertips.com",
    },
    {
      url: "https://www.canonrumors.com/feed/",
      domain: "canonrumors.com",
    },
    {
      url: "https://stuckincustoms.com/feed/",
      domain: "stuckincustoms.com",
    },
    {
      url: "https://feeds.feedburner.com/TheSartorialist",
      domain: "thesartorialist.com",
    },
    {
      url: "https://www.bostonglobe.com/rss/bigpicture",
      domain: "bostonglobe.com",
    },
    {
      url: "http://feeds.feedburner.com/OneBigPhoto",
      domain: "onebigphoto.com",
    },
    {
      url: "http://feeds.feedburner.com/blogspot/WOBq",
      domain: "strobist.blogspot.com",
    },
  ],
  science: [
    {
      url: "https://www.reddit.com/r/science/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://www.nature.com/nature.rss",
      domain: "feeds.nature.com",
    },
    {
      url: "https://rss.sciam.com/ScientificAmericanGlobal",
      domain: "scientificamerican.com",
    },
    {
      url: "http://feeds.sciam.com/sciam/60secsciencepodcast",
      domain: "scientificamerican.com",
    },
    {
      url: "http://feeds.bbc.co.uk/news/science_and_environment/rss.xml",
      domain: "bbc.co.uk",
    },
    {
      url: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
      domain: "nytimes.com",
    },
    {
      url: "https://www.sciencedaily.com/rss/all.xml",
      domain: "sciencedaily.com",
    },
    {
      url: "https://phys.org/rss-feed/",
      domain: "phys.org",
    },
    {
      url: "https://www.wired.com/feed/category/science/latest/rss",
      domain: "wired.com",
    },
    {
      url: "https://gizmodo.com/tag/science/rss",
      domain: "gizmodo.com",
    },
    {
      url: "https://feeds.npr.org/510307/podcast.xml",
      domain: "npr.org",
    },
    {
      url: "https://feeds.npr.org/510306/podcast.xml",
      domain: "hiddenbrain.org",
    },
    {
      url: "http://feeds.wnyc.org/radiolab",
      domain: "wnycstudios.org",
    },
    {
      url: "https://www.ted.com/feeds/talks.rss",
      domain: "ted.com",
    },
    {
      url: "https://feeds.gimletmedia.com/sciencevs",
      domain: "gimletmedia.com",
    },
    {
      url: "https://feeds.simplecast.com/Ly11F_52",
      domain: "sawbones.simplecast.com",
    },
    {
      url: "https://omnystudio.com/d/playlist/a537e28a-af51-495e-afcc-a7600146022b/2a105077-1014-41d2-831f-ab190186b4d5/podcast.rss",
      domain: "gastropod.com",
    },
    {
      url: "https://sciencebasedmedicine.org/feed/",
      domain: "sciencebasedmedicine.org",
    },
    {
      url: "https://flowingdata.com/feed",
      domain: "flowingdata.com",
    },
    {
      url: "https://probablyscience.libsyn.com/rss",
      domain: "probablyscience.com",
    },
    {
      url: "http://podcasts.files.bbci.co.uk/p02w57nt",
      domain: "bbc.co.uk",
    },
    {
      url: "http://podcasts.files.bbci.co.uk/b00snr0g.rss",
      domain: "bbc.co.uk",
    },
    {
      url: "http://shirtloadsofscience.libsyn.com/rss",
      domain: "shirtloadsofscience.libsyn.com",
    },
    {
      url: "http://www.twis.org/feed/",
      domain: "twis.org",
    },
  ],
  space: [
    {
      url: "https://www.nasa.gov/rss/dyn/breaking_news.rss",
      domain: "nasa.gov",
    },
    {
      url: "https://www.reddit.com/r/space/.rss?format=xml",
      domain: "reddit.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?user=spacexchannel",
      domain: "youtube.com",
    },
    {
      url: "http://www.space.com/feeds/all",
      domain: "space.com",
    },
    {
      url: "https://www.skyandtelescope.com/feed",
      domain: "skyandtelescope.org",
    },
    {
      url: "https://www.newscientist.com/subject/space/feed",
      domain: "newscientist.com",
    },
    {
      url: "https://www.theguardian.com/science/space/rss",
      domain: "theguardian.com",
    },
  ],
  sports: [
    {
      url: "http://feeds.bbc.co.uk/sport/rss.xml",
      domain: "bbc.co.uk",
    },
    {
      url: "https://www.reddit.com/r/sports/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://www.espn.com/espn/rss/news",
      domain: "espn.com",
    },
    {
      url: "https://sports.yahoo.com/rss",
      domain: "sports.yahoo.com",
    },
    {
      url: "http://feeds.skynews.com/feeds/xml/sports.xml",
      domain: "skynews.com",
    },
    {
      url: "https://www.sportskeeda.com/feed",
      domain: "sportskeeda.com",
    },
  ],
  startups: [
    {
      url: "https://hnrss.org/frontpage",
      domain: "news.ycombinator.com",
    },
    {
      url: "http://www.aaronsw.com/2002/feeds/pgessays.rss",
      domain: "paulgraham.com",
    },
    {
      url: "https://www.producthunt.com/feed",
      domain: "producthunt.com",
    },
    {
      url: "https://feeds.feedburner.com/venturebeat/SZYF",
      domain: "venturebeat.com",
    },
    {
      url: "https://www.forbes.com/entrepreneurs/feed/",
      domain: "forbes.com",
    },
    {
      url: "https://www.inc.com/rss/",
      domain: "inc.com",
    },
    {
      url: "http://feeds.feedburner.com/entrepreneur/latest",
      domain: "entrepreneur.com",
    },
    {
      url: "https://avc.com/feed/",
      domain: "avc.com",
    },
    {
      url: "https://bothsidesofthetable.com/feed",
      domain: "bothsidesofthetable.com",
    },
    {
      url: "https://feld.com/feed",
      domain: "feld.com",
    },
    {
      url: "https://feld.com/archives/tag/blog/feed",
      domain: "feld.com",
    },
    {
      url: "https://steveblank.com/feed/",
      domain: "steveblank.com",
    },
    {
      url: "https://www.intercom.com/blog/feed",
      domain: "intercom.com",
    },
    {
      url: "https://rss.art19.com/masters-of-scale",
      domain: "mastersofscale.com",
    },
    {
      url: "https://rss.art19.com/tim-ferriss-show",
      domain: "tim.blog",
    },
    {
      url: "http://feeds.feedburner.com/twistvid",
      domain: "thisweekinstartups.com",
    },
    {
      url: "https://feeds.feedburner.com/SmallBusinessTrends",
      domain: "smallbiztrends.com",
    },
    {
      url: "http://feeds.feedburner.com/smartpassiveincome",
      domain: "smartpassiveincome.com",
    },
    {
      url: "https://www.springwise.com/feed",
      domain: "springwise.com",
    },
    {
      url: "https://startupjunkie.libsyn.com/rss",
      domain: "startupjunkie.org",
    },
    {
      url: "https://www.quicksprout.com/rss",
      domain: "quicksprout.com",
    },
    {
      url: "https://www.youtube.com/feeds/sdeus.xmlthmer-spacexchannel",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCSLXy31l220sdDeeAX5JpPw4",
      domain: "youtube.com",
    },
  ],
  tech: [
    {
      url: "https://news.ycombinator.com/rss",
      domain: "news.ycombinator.com",
    },
    {
      url: "https://www.theverge.com/rss/index.xml",
      domain: "theverge.com",
    },
    {
      url: "http://feeds.feedburner.com/TechCrunch",
      domain: "techcrunch.com",
    },
    {
      url: "http://feeds.arstechnica.com/arstechnica/index",
      domain: "arstechnica.com",
    },
    {
      url: "https://www.engadget.com/rss.xml",
      domain: "engadget.com",
    },
    {
      url: "https://www.cnet.com/rss/news/",
      domain: "cnet.com",
    },
    {
      url: "https://gizmodo.com/rss",
      domain: "gizmodo.com",
    },
    {
      url: "http://rss.slashdot.org/Slashdot/slashdotMain",
      domain: "slashdot.org",
    },
    {
      url: "https://lifehacker.com/rss",
      domain: "lifehacker.com",
    },
    {
      url: "http://feeds.mashable.com/Mashable",
      domain: "mashable.com",
    },
    {
      url: "https://www.blog.google/rss/",
      domain: "blog.google",
    },
    {
      url: "https://thenextweb.com/feed/",
      domain: "thenextweb.com",
    },
    {
      url: "https://readwrite.com/feed/",
      domain: "readwrite.com",
    },
    {
      url: "http://stratechery.com/feed?",
      domain: "stratechery.com",
    },
    {
      url: "https://feeds.twit.tv/twit.xml",
      domain: "twit.tv",
    },
    {
      url: "https://feeds.megaphone.fm/vergecast",
      domain: "theverge.com",
    },
    {
      url: "https://feeds.megaphone.fm/replyall",
      domain: "gimletmedia.com",
    },
    {
      url: "https://atp.fm/rss",
      domain: "atp.fm",
    },
    {
      url: "https://www.relay.fm/analogue/feed",
      domain: "relay.fm",
    },
    {
      url: "https://www.relay.fm/clockwise/feed",
      domain: "relay.fm",
    },
    {
      url: "https://www.relay.fm/rocket/feed",
      domain: "relay.fm",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?user=GaryVaynerchuk",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?user=marieforleo",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCSLXy31l220sdDeeAX5JpPw7",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCSLXy31l220sdDeeAX5JpPw8",
      domain: "youtube.com",
    },
    {
      url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCSLXy31l220sdDeeAX5JpPw9",
      domain: "youtube.com",
    },
  ],

  television: [
    {
      url: "https://www.reddit.com/r/television/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://tv.avclub.com/rss",
      domain: "avclub.com",
    },
    {
      url: "https://tvline.com/feed/",
      domain: "tvline.com",
    },
    {
      url: "https://www.tvfanatic.com/rss.xml",
      domain: "tvfanatic.com",
    },
    {
      url: "https://www.bleedingcool.com/tv/feed/",
      domain: "bleedingcool.com",
    },
    {
      url: "http://feeds.feedburner.com/thetvaddict/AXob",
      domain: "thetvaddict.com",
    },
  ],
  tennis: [
    {
      url: "http://feeds.bbc.co.uk/sport/tennis/rss.xml",
      domain: "bbc.co.uk",
    },
    {
      url: "https://www.atptour.com/en/media/rss-feed/xml-feed",
      domain: "atptour.com",
    },
    {
      url: "https://www.espn.com/espn/rss/tennis/news",
      domain: "espn.com",
    },
    {
      url: "https://www.reddit.com/r/tennis/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://feed.podbean.com/essentialtennis/feed.xml",
      domain: "essentialtennis.podbean.com",
    },
    {
      url: "https://www.perfect-tennis.com/feed/",
      domain: "perfect-tennis.com",
    },
    {
      url: "http://www.grandslamfantasytennis.com/feed/?x=1",
      domain: "grandslamfantasytennis.com",
    },
  ],
  travel: [
    {
      url: "https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml",
      domain: "nytimes.com",
    },
    {
      url: "https://www.theguardian.com/uk/travel/rss",
      domain: "theguardian.com",
    },
    {
      url: "https://www.lonelyplanet.com/news/feed/atom/",
      domain: "lonelyplanet.com",
    },
    {
      url: "https://www.atlasobscura.com/feeds/latest",
      domain: "atlasobscura.com",
    },
    {
      url: "https://www.nomadicmatt.com/travel-blog/feed/",
      domain: "nomadicmatt.com",
    },
    {
      url: "https://www.livelifetravel.world/feed/",
      domain: "livelifetravel.world",
    },
  ],
  ui_ux: [
    {
      url: "https://www.smashingmagazine.com/feed",
      domain: "smashingmagazine.com",
    },
    {
      url: "https://www.reddit.com/r/userexperience/.rss",
      domain: "reddit.com",
    },
    {
      url: "https://uxdesign.cc/feed",
      domain: "uxdesign.cc",
    },
    {
      url: "https://www.nngroup.com/feed/rss/",
      domain: "nngroup.com",
    },
    {
      url: "https://www.invisionapp.com/inside-design/feed",
      domain: "invisionapp.com",
    },
    {
      url: "https://www.designernews.co/?format=rss",
      domain: "designernews.co",
    },
    {
      url: "https://uxstudioteam.com/ux-blog/feed/",
      domain: "uxstudioteam.com",
    },
    {
      url: "https://uxmovement.com/feed/",
      domain: "uxmovement.com",
    },
    {
      url: "https://usabilitygeek.com/feed/",
      domain: "usabilitygeek.com",
    },
    {
      url: "https://feeds.feedburner.com/JustCreativeDesignBlog",
      domain: "justcreative.com",
    },
    {
      url: "http://boxesandarrows.com/rss/",
      domain: "boxesandarrows.com",
    },
  ],
  web_development: [
    {
      url: "https://css-tricks.com/feed/",
      domain: "css-tricks.com",
    },
    {
      url: "https://alistapart.com/main/feed/",
      domain: "alistapart.com",
    },
    {
      url: "https://hacks.mozilla.org/feed/",
      domain: "hacks.mozilla.org",
    },
    {
      url: "https://developers.google.com/web/updates/rss.xml",
      domain: "developers.google.com",
    },
    {
      url: "https://davidwalsh.name/feed",
      domain: "davidwalsh.name",
    },
    {
      url: "https://www.codewall.co.uk/feed/",
      domain: "codewall.co.uk",
    },
    {
      url: "https://gosink.in/rss/",
      domain: "gosink.in",
    },
  ],
};
