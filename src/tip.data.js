const tip = [
    {
        title: '',
        description: '',
		know: '',
		city: '',
        country: '',
        continent: '',
        image: ''
    },
    {
        title: "Rainbow Mountain",
        description: "The peaks in the Ausangate mountain region of the Peruvian Andes are all uncommonly colored, but none are quite so marvelous as Vinicunca, known as Rainbow Mountain. This remote candy-striped mountain is straight out of the pages of Dr. Seuss. Yet for all its striking colors, Rainbow Mountain is notoriously hard to find.",
		know: "There is now a road leading to the mountain. The trek to the summit can now be done in a couple of hours. While the hike is not long, the altitude can cause problems for those not used to it. A horse and guide can be rented for around 50 to 100 soles.",
		city: "Pitunarca",
        country: "Peru",
        continent: "South America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzg0NjFkZDk0NDBiM2RmZWFiZl9zaHV0dGVyc3RvY2tfNDUxNzgwMTE0LmpwZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/shutterstock_451780114.jpg"
    },
    {
        title: "The United States - Canada Border Slash",
        description: "The entire length of the US-Canada boundary is marked by a 20-foot-wide slash through the trees. Known as “the Slash,” this treeless zone covers everything from narrow isolated islands to steep hillsides to towering mountains. The vast majority of The Slash is so remote that it will never receive visitors, but witnessing the Slash is no doubt on the bucket list of hundreds of geography nerds worldwide.",
		know: "Another way to see the slash is in Waterton-Glacier International Peace Park, on the Pacific Crest Trail, the Continental Divide Trail to Canada, or the Long Trail in Vermont.",
		city: "",
        country: "Canada / United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2IwMzEyY2YyOGI3YTE3ZWY5OF80NzczMjQ4NTM0XzFmNWRlNDE4Y2Ffby5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/4773248534_1f5de418ca_o.jpg"
    },
    {
        title: "Perito Moreno Glacier",
        description: "If you only visit one glacier in your life, Perito Moreno would be a good one to pick. It towers above the turquoise glacial water of Patagonia’s Los Glaciares National Park, beaming a blinding white and exuding cold blue hues. This stunning mass of ice spans 121 square miles and, unlike most of Earth’s other glaciers, is is still growing.",
		know: "If you're arriving via your own car, you'll need to take Provincial Route No. 15 from El Calafate, which is 80km (50 miles) and will take about an hour and a half. There are also four bus companies based in El Calafate running daily round trips for about 15 USD.",
		city: "Los Glaciares National Park",
        country: "Argentina",
        continent: "South America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzllNTA1ZDUzYzViMmUyNThjOV8yMDQ4cHgtMTUzXy1fR2xhY2llcl9QZXJpdG9fTW9yZW5vXy1fR3JvdHRlX2dsYWNpYWlyZV8tX0phbnZpZXJfMjAxMC5qcGciXSxbInAiLCJ0aHVtYiIsIngzOTA-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/2048px-153_-_Glacier_Perito_Moreno_-_Grotte_glaciaire_-_Janvier_2010.jpg"
    },
    {
        title: "Kan'ei-ji Temple",
        description: "Close to Tokyo’s Ueno Park, the Kan’ei-ji temple is a quiet pagoda far removed from the hustle and bustle of the park’s top tourists draw. The Buddhist temple is home to a remarkable monument: a simple engraved stone that is a memorial to the souls of dead insects. It was built to console the spirits of the flies, crickets, and grasshoppers that were killed during a 19th century anatomical study of insects.",
		know: "5 minutes walk from Uguisadani Station South exit",
		city: "Tokyo",
        country: "Japan",
        continent: "Asia",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzQxYzM3N2RkLTRiODEtNDc2My05ZmZiLTdhOGJkYWY1YzkyZWJlZDdjYjc1MTNiOWQ0MTA3ZF9EU0NfMjAxNC5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/DSC_2014.JPG"
    },
    {
        title: "Razzouk Ink",
        description: "The Razzouk family tattoo parlor has been inking religious pilgrims in the Middle East with marks of faith for 700 years. Evidence of such tattoos dates back at least as far as the 8th century in Egypt and the 6th century in the Holy Land, when early tattoos self-identified indigenous Christians in the Middle East and Egypt. Later, as the faithful came to the Holy Land on pilgrimage, the practice expanded to offer these travelers permanent evidence of their devotion and peregrination.",
		know: "",
		city: "Jerusalem",
        country: "Israel",
        continent: "Africa",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzlyNm02YWx0eGtsN2VlZjFiNmZmYzlhNTg2MzdmX0pJNzgxNy03LmpwZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/JI7817-7.jpg"
    },
    {
        title: "Leftover Star Wars Sets",
        description: "While much of George Lucas’ mythic Star Wars films were filmed in studio lots or in preexisting structures, a number of their exterior sets, especially for the desert planet Tatooine, were purpose built for the films and simply abandoned to the sands and the fans when filming was over. Today buildings from the fictional planet of Tatooine still litter the Tunisian desert.",
		know: "In Star Wars Episode 1: The Phantom Menace the spaceport of Mos Espa is shown as a bustling frontier town where young Anakin Skywalker lives and works as a slave. Many of the bulbous structures were filled in using CGI, but much of the first stories of the buildings were built practically and still stand as a squat beige town square that looks as though it was shaved cleanly off at the top. The facades are not actually buildings, but fronts built for filming, yet visitors can still mill about the exteriors as though they were on that far flung desert planet. There are also some iconic “moisture vaperators” also left on the site.",
		city: "Tozeur",
        country: "Tunisia",
        continent: "Africa",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2M1NWI2ZTllZWZhMDNiZWRhNF82MzQyMTg3OTQ0XzkyMDE2MjAwZjlfYi5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"
    },
    {
        title: "Barack Obama Plaza",
        description: "This modest plaza in Moneygall, Ireland has cashed in on its distant connection to the U.S. president. The entirety of this plaza is a tribute to the first U.S. president to ever have roots in Moneygall, described by tour guide’s as 'Obama’s ancestral homeland.'",
		know: "LOCATED AT A HIGHWAY JUNCTION along the R445 motorway, the Barack Obama Plaza appears, at first glance, as nothing more than a gas station. The outside has gas pumps, and the inside looks like it might house a few snack kiosks and a restroom. But oh how deceiving looks can be.",
		city: "North Tipperary",
        country: "Ireland",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhlZmVkNThmNjcwMGY2ZTc1MF9pbWFnZSAoMSkuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/image%20%281%29.jpg"
    },
    {
        title: "Discoteca Ayala",
        description: "In the colonial 	city: of Trinidad, Cuba, the nightlife is underground. As in, 100 feet under the earth, in an actual cave. Disco Ayala, also known La Cueva, is a dance club built into a natural cave, an unlikely union of Top 40 dance hits and naturally formed stalactites.",
		know: "From Trinidad center, walk up a path leading directly behind the cathedral, off Juan Manuel Márquez, or take the longer route from Hotel Las Cuevas. For google maps see: Disco Ayala, Discoteca Las Cuevas",
		city: "Trinidad",
        country: "Cuba",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzUyNmQyNzVlMTI3NDAzNmQwY18zODg2MDczODFfMGI4YmZiMjEwNV9vLmpwZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ"
    },
    {
        title: "Hitler's Olympic Village",
        description: "Berlin is a hot travel destination these days, but little known to most tourists and even many Germans, on the edge of the 	city: lie the chilling abandoned remains of “Hitler’s Olympic village,” built for the so-called Nazi Games of 1936. The site remains a crumbling remnant of sportsmanship and a history its host country would like to forget.",
		know: "The site is only accessible on a guided tour, and none are currently scheduled for 2020. Visit this website for information about future dates.",
		city: "Wustermark",
        country: "Germany",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2U1NTEzOWViODUxNTc3MzI4N19CdW5kZXNhcmNoaXZfQl8xNDVfQmlsZC1QMDE3MDczLF9CZXJsaW4sX09seW1waXNjaGVfU3BpZWxlX2ltX09seW1waWFzdGFkaW9uLmpwZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/Bundesarchiv_B_145_Bild-P017073%2C_Berlin%2C_Olympische_Spiele_im_Olympiastadion.jpg"
    },
    {
        title: "The Libraries of Chinguetti",
        description: "Five ancient libraries nearly unchanged since medieval times are slowly being eaten by the desert in the stark 	city: of Chinguetti, home to some of the world’s most important Quranic texts.",
		know: "Mauritania's tourism has dwindled in recent years but once you get to Atar, it's relatively easy to organize the ride to Chingeutti, where there are several tourist lodgings. Your hosts will be able to help you make a visit to the one library, which is commonly visited by tour groups.",
		city: "Chinguetti",
        country: "Mauritania",
        continent: "Africa",
        image: "https://live.staticflickr.com/7154/6835715859_6c0bbcabe2_b.jpg"
    },
    {
        title: "Forbes Pigment Collection",
        description: "The thousands of shades on display at Harvard—some toxic, others impossibly rare—are a library of more than just color.",
		know: "The Harvard Art Museums are open 10am to 5pm, daily. The Forbes Pigment Collection is located on the Museums' 4th Level. It is housed in a 'staff only' area of the museum but can be seen, from a distance, across the atrium. The rest of the museum's collection makes it worth the trip.",
		city: "Cambridge",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzQyNTI1MTk5ZmI2MTU4ZjA5MF8xMC5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/10.JPG"
    },
    {
        title: "Pogue's Run",
        description: "This hidden stream, buried beneath Indianapolis because it didn't fit into the 	city:'s plan, makes an appearance in the best-selling novel 'Underground Airlines.'",
		know: "Pogue's Run goes underground northeast of the Mile Square in the 1000 block of East New York Street.",
		city: "Indianapolis",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzFmNjgyYjc2MmQzMmU3MTE4Ml9pbWFnZSAoMzcpLmpwZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/image%20%2837%29.jpg"
    },
    {
        title: "David Bowie Graffiti Mural",
        description: "A mural of David Bowie, as bright and colorful as the man himself, can be found just around the corner from where he was born. In the days following Bowie’s death on January 10, 2016, thousands of fans visited the mural to pay tribute, leaving notes and flowers and taking photos, some arriving with the same lightning bolt across their faces.",
		know: "Tunstall Road, Brixton, next to Morleys. Directly across from the exit of Brixton Underground station (Victoria Line).",
		city: "London",
        country: "England",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhhZGJmZDU3MjNmY2VhMGI4YV9EYXZpZF9Cb3dpZV9NdXJhbC5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"
    },
    {
        title: "Opus 40",
        description: "One man's swirling six-acre monument of stone is hidden in the woods below the Overlook and Roundtop Mountains in the Catskills. Expecting that he would need 40 years to complete the work, the sculptor nicknamed the ambitious project Opus 40. It has been described as “one of the largest and most beguiling works of art on the entire continent.”",
		know: "Today, the site is open to visitors from Memorial Day through Columbus Day thanks to Barbara Fite, Harvey Fite’s widow, who created a nonprofit group which still administers the site. A short monograph is screened on a loop in the admissions building where visitors can also visit the Quarryman’s Museum. Above the amphitheater within the quarry, visitors can use provided stones to construct their own homage to Fite’s work. Opus 40 was added to the National Register of Historic Places in 2001 and has been described in Architectural Digest as 'one of the largest and most beguiling works of art on the entire continent.'",
		city: "Saugerties",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2E5MWI3ZWRjNWNkNmJkOThhY19JTUdfMTAxOC5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/IMG_1018.JPG"
    },
    {
        title: "Church of the Jacobins' Little Crushed Man",
        description: "There is a strange little carving of a person seemingly crushed by a pillar behind the remains of St. Thomas Aquinas. Look down towards the floor and you’ll see, sticking out, a peculiar pair of bony hands and chubby crossed feet, their meaning and origin unknown.",
		know: "The Church is in the very center of Toulouse, which is in southern France about 60 miles from the border with Spain. The Museum is open all year, from 10am to 6pm every day except Monday. Entrance to the Church and Chapel of the Virgin is free. The fee for entry to the Cloister, Chapter House, St Antonin Chapel and Refectory is €4 for adults, €2 for groups of 15 or more. Admission is free for students & seniors.",
		city: "Toulouse",
        country: "France",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2lxM2RrdnhtbnkwbDR5cW5mZDUyMmQwNTRlMTk0YjFlZDlfSU1HXzIwMTYwODI0XzEyMDk1OC5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/IMG_20160824_120958.jpg"
    },
    {
        title: "Lake Hillier",
        description: "From a distance, Lake Hillier looks like a swath of solid bubble-gum pink. Draw closer, and the color takes on a more watery, translucent quality, but remains unmistakably pink. Though theories abound, the Australian lake’s unusual pink hue defies scientific explanation.",
		know: "Helicopter flights operate daily during the October–April period. The rest of the year, you can book a private tour.",
		city: "Recherche Archipelago",
        country: "Australia",
        continent: "Oceania",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhmODk2MWZlZjI5ODg2NzRiYl9MYWtlLmpwZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/Lake.jpg"
    },
    {
        title: "Long Lines Building",
        description: "New York 	city:’s doom-iest skycraper was designed to survive nuclear fallout and exist off-grid for up to two weeks without issue. What’s more, it’s recently come to light that this ominous tower is used as a hub for NSA spying—a brick-and-mortar arm of the surveillance state.",
		know: "One look at the skyscraper’s face should tell you that public admittance isn’t an option. But that beautiful, terrifying image you have in your head of stories upon stories of telephone cables and digital boxes stacked 18-feet high, glowing within the building’s impenetrable walls, might just be better than the real thing, anyway.",
		city: "New York",
        country: "United States",
        continent: "North America",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/33_Thomas_Sidewalk_View.JPG"
    },
    {
        title: "Zhangjiajie Glass Bridge",
        description: "China’s Zhangjiajie Glass Bridge is the latest in a series of long glass bridges suspended at terrifying heights. At 1,400 feet long and 900 feet high, it currently holds the record as both the longest and the highest in the world.",
		know: "To ensure safety only 600-800 people are allowed to partake in its glass wonder at any given time.",
		city: "Zhangjuajie Shi",
        country: "China",
        continent: "Asia",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzdiMzliMDU0YzQ4OWUwMDdiMF9zaHV0dGVyc3RvY2tfNDgyNTQ4NTM0LmpwZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/shutterstock_482548534.jpg"
    },
    {
        title: "Deep Throat Parking Garage",
        description: "Although this was the place Bob Woodward met with Watergate informant 'Deep Throat,' it still exists today a simple parking garage. However, not for long: The historic garage is scheduled for demolition in 2017.",
		know: "Make sure you use entrance D, which is about 250 feet north of the historical marker on Nash St. Turn left at the bottom of the ramp inside the garage and go straight, all the way to the end. Space D32 will be on the left. The fee to park in the garage starts at $8. You should pre-pay or validate your ticket before you leave the garage.",
		city: "Arlington",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2M5NDkyYzZlLTRhMTktNGM5Yy1hNDRmLWRmZDQ3YjZhNWI0MjQzYmE2NDBkMzg4ZjExNGE4Nl9CQzhDMUYzNS1BRTlDLTQ0RDAtQjkwNy0zNDhGRjhEMjBGNEMuanBlZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/BC8C1F35-AE9C-44D0-B907-348FF8D20F4C.jpeg"
    },
    {
        title: "The Grolier Club",
        description: "The oldest bibliophilia club in America celebrates 100 years in its Upper East Side location this year. Established in 1884, the stately Grolier Club is a center for the celebration of the beauty and art of books, packed with texts on the literary arts, such as bookbinding and illustration.",
		know: "The Grolier Club also holds a 100,000-volume research library packed with texts on the literary arts, such as bookbinding, illustration, and catalogues from exhibitions and auctions. The collection has a strong Francophile bent, and its name is a tribute to Jean Grolier de Servières, a 16th century French bibliophile and collector. ",
		city: "New York",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzg2NDBkMzIyLTRjYTQtNDI3MC1hZjI4LTE3ZDlhMTdiYThlYjgxYzMwOTRhMmU2YTU4ZThiNl84MkU3MDU5Ri1GQjM2LTQ2MjEtQUJERC1ENkE4NEJEQzU5NDAuanBlZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/82E7059F-FB36-4621-ABDD-D6A84BDC5940.jpeg"
    },
    {
        title: "The Sunken city of Baia",
        description: "In its heyday, the Classical Roman 	city: of Baia was the hedonist Las Vegas of the time, catering to the recreational whims of the rich and powerful among the Roman elite. Some of antiquity’s most powerful figures such as Nero, Cicero, and Caesar were known to have visited the 	city:, but now its remains are partying beneath the waves. Today the ancient remains of Baia can be visited in one of the world’s few underwater archeological parks.",
		know: "Today the ancient remains of Baia can be visited in one of the world’s few underwater archeological parks. Visitors can view the crumbled structures and amazingly preserved statuary of the 	city: through glass-bottomed boats, snorkeling, or even scuba dives which allow people to actually swim amongst the copious ruins. While the 	city: is no longer a resort, its waters still hold wonders.  ",
		city: "Baia",
        country: "Italy",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2U1YjQyNDVkLTgyYmUtNGI5ZS05MjE2LTYyNTMzZDA0M2QwNWJmYjhiMjIzYzE2NmJhMzI3ZV9CYWlhXzIxMTQuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/Baia_2114.jpg"
    },
    {
        title: "The Imperial War Museum",
        description: "In 1917 the British War Cabinet voted to create a national museum that would record the horrific events still taking place. The museum’s original First World War exhibit continues to be its most affecting, refurbished coinciding with the 100th anniversary of the start of the Great War. Most of the entire ground floor of the old hospital is now given over to the 'war to end all wars.'",
		know: "A trip to the Imperial War Museum is a sobering reflection on the horrific events that took place a hundred years ago. Harry Patch was the last British veteran of the Western Front to die, passing away in 2009. He is quoted in the First World War Gallery: 'I’ve tried for 80 years to forget it. But I can’t.'",
		city: "London",
        country: "England",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzI0NTVkNzc3NmVjMmVkNmY1ZV9JTUdfMDM3Mi5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"
    },
    {
        title: "Los Jardines de la Tropical",
        description: "All of the great parties in Havana could not stop this Spanish-style estate from falling into a picturesque state of decay. Built in the late 1800s by the Herrera family, owners of La Tropical brewery, this Cuban pleasure garden is now a somewhat abandoned gem on the outskirts of Havana.",
		know: "Now the Los Jardines de la Tropical belongs to the Havana Metropolitan Parks organization and efforts are underway to preserve the verdant tropical history of the site. Frequent rock concerts and dance festivals are held on the grounds, so while the tuxedoes and finery may have disappeared, the parties rage on. ",
		city: "Havana",
        country: "Cuba",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzQ4YjhjZWNhZmRhNThmMTU1NF9qYXJkaW4uanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d"
    },
    {
        title: "Colina Kapa Astronomical Observatory",
        description: "The haunting ruins of this military fortress-turned astronomical observatory sit on a Sarajevo mountaintop. It was once the only facility of its kind in the area, and remains an important symbol of Sarajevo. The white building still looks over the 	city: from Mount Trebević, though today the walls are crumbling and decrepit. Without Čolina Kapa, astronomy is virtually nonexistant in Bosnia and Herzegovina, despite the fact that the study of the stars reaches back to the 15th century in the region.",
		know: "Today it remains an important symbol of Sarajevo, as its white building still looks over the 	city: from Mount Trebević, though today the walls are crumbling and decrepit. Though the abandoned building is a popular attraction for urban exploring hikers, most Sarajevans would prefer that the observatory be restored.",
		city: "Saraajevo",
        country: "Bosnia and Herzegovina",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2NkMzk0YmQ1Nzk5NjMwOGYyOV8xOTg2MTQ5OTkzOF8zOTU4ODgyZmViX28uanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/19861499938_3958882feb_o.jpg"
    },
    {
        title: "Biliotheca Philosophica Hermetica - Ritman Library",
        description: "This Amsterdam library is goldmine of early manuscripts and books on ancient mysticism, religion, and philosophy. Author Dan Brown found this library's rare collection so useful he paid to have it digitized. Some of it will be available this year.",
		know: "The Da Vinci Code author Dan Brown drew inspiration from the texts at the Ritman Library, and used the collection for research for some of his mystery novels. He found the library such a valuable cultural resource he donated over $300,000 to help digitize and preserve the collection. The core collection is expected to be available online in spring of 2017.",
		city: "Amsterdam",
        country: "Netherlands",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2ViZjlhNDhjLTA4ZjYtNDgyZC05YTc1LTFmMzgzNDNjMTczMmU4ZGI1NjBjM2VlODhiZjNjY19XMXNpWmlJc0luVndiRzloWkhNdmRXNWtaV1pwYm1Wa0wyRmhNbVZrWkdFMUxUY3daVFl0TkRSa1l5MWlPVE0yTFdJd1ltTTVNakpqWkRFeU5qazJNalEyWXpnM1ltTTJabU0uanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/W1siZiIsInVwbG9hZHMvdW5kZWZpbmVkL2FhMmVkZGE1LTcwZTYtNDRkYy1iOTM2LWIwYmM5MjJjZDEyNjk2MjQ2Yzg3YmM2ZmM.jpg"
    },
    {
        title: "'Signing Runway' at the Abandoned Disney World Airport",
        description: "1960s France was a time of idealism and whimsy, of freedom and excitement. Anything was possible. So why not build a set of submarine cars pulled by massive cable which could take riders ten meters underwater and pull them across the ocean? Amazingly, they built just that: Le Téléscaphe. Today you can still see the remains of the huge mechanical wheels that were used to pull the underwater cables of this unusual transport system.",
		know: "The singing runway is past the parking fee booth, we were able to get in without paying but there were cars and trailers parked pretty tight, couldn't get up to speed or on the correct grooved portion of the pavement.",
		city: "Orlando",
        country: "United States",
        continent: "North America",
        image: "https://4.bp.blogspot.com/-zq1bOJuPEiU/VTz43r8rt4I/AAAAAAAALc0/EFIX4tK-6e8/s1600/wdw%2Bairport%2B1.png"
    },
	{
        title: "U.S. Fish and Wildlife Service Forensics Laboratory",
        description: "The U.S. government maintains the only forensic lab in the world dedicated to fighting crimes against wildlife. Take a walk around the lab’s evidence rooms and you’re likely to see musical instruments made from the scarcest rosewood, colorful feathers, bundles of animal hides, taxidermy and mounted trophy heads.",
		know: "While the lab is not open for tours to the general public, it is possible to step inside the building's atrium during business hours. They have a few exhibits and a video slideshow of the work they do. There is also a video tour of the Lab you can watch on their website.",
		city: "Ashland",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzAyY2RkNGU5NWU3ZWExMmJlNF9MYWIgMS5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/Lab%201.jpg"
    },
	{
        title: "Professional and Amateur Pinball Association World Headquarters",
        description: "The arcade of all arcades is open to the public in April, when anyone is welcome to vie for the title of 'World Pinball Champion.'",
		know: "While the PAPA headquarters isn’t generally open to the public, during the twice-yearly pinball competitions anyone is welcome to come to play and even compete, in the Rank D division. ",
		city: "Carnegie",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzkzMThjYzZmMmRlMDQwZDJlY19EU0MwMDQ5My5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/DSC00493.jpg"
    },
	{
        title: "Nishiyama Onsen Keiunkan",
        description: "Nestled among a number of picturesque hot springs in the mountains, the traditionally styled Nishiyama Onsen Keiunkan is recognized as the world’s oldest hotel, inn, and possibly even business in general. Originally established in 705 CE, it catered to everyone from ancient samurai to modern tourists for over a thousand years.",
		know: "Today the site is considerably larger than it was over a thousand years ago, but both the look and feel of the inn have remained surprisingly unchanged. Despite modern amenities, the simple, calming design of the spaces and the natural mountains surrounding them make it feel as though it is still 705. Keiunkan currently holds the Guinness World Record for oldest hotel and is now aiming for another, world’s most productive hot spring, thanks to their new bath that pumps over a thousand liters of naturally heated water per minute.",
		city: "Hayakawa",
        country: "Japan",
        continent: "Asia",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Keiunkan08s3200.jpg"
    },
	{
        title: "Rasputin Museum at Yusupov Palace",
        description: "2017 marks 100 years since the dawn of the Russian Revolution. This palatial home in St. Petersburg is where the ball started rolling, with the murder of the nearly un-killable Rasputin.",
		know: "If you show up at the palace and just buy a ticket, you will NOT get a ticket to the Rasputin exhibit. You will get a ticket to the palace interiors, which are lovely, and totally worth visiting. But if it's Rasputin you're after, and you don't speak Russian: go INSIDE (not the ticket booth outside) and just keep repeating 'Rasputin' like a simpleton until someone takes you money, hands you a ticket, and points you down the right hallway. There is a guided tour to the 'Rasputin rooms' available on Friday, Saturday, Sunday and Monday at 5pm from the lady who distributes audio guides inside the museum. It is 350 rubles as of Sept 2017.",
		city: "Saint Petersburg",
        country: "Russia",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhhYzcxYTY3ODVhZWFkYjlhZDFiNmNhMjhlZWY4MDMxODY4MTVjOWMuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/8ac71a6785aeadb9ad1b6ca28eef803186815c9c.jpg"
    },
	{
        title: "Dymaxion Chronofile",
        description: "Starting in earnest exactly 100 years ago, each and every day of his dynamic life Buckminster Fuller contributed to the Dymaxion Chronofile, an archive of his existence. With more than 140,000 papers and 1,700 hours of audio and video, all stretching to more than 1,400 linear feet of material, Fuller’s life might be the most documented life of all time.",
		know: "The Dymaxion Chronofile has been at the Stanford University Libraries Department of Special Collections since 1999. There you can pick any day of these years of his life and find out exactly what he was doing nearly to the hour by flipping through a scrapbook. You might even see his glasses or passport. ",
		city: "Stanford",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzUxZTg3ZjE1N2E5MzU1YmM4MV9keW1heGlvbmNocm9ub2ZpbGUuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d"
    },
	{
        title: "Melnik Chapel of Bones",
        description: "Underneath this small church are 15,000 bones, arranged by an obsessive academic. Arranged with a “literate theology,” the bones are stacked into orderly piles and meaningful patterns. The largest pile can be seen directly in front of the entrance and is 15 feet square and over six feet high. It is believed to contain roughly 10,000 skeletons.",
		know: "Today, you can still visit the ossuary, as well as the lovely church above it. It is open daily except Mondays.",
		city: "Melnik",
        country: "Czech Republic",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzBjMTcxNmYxNzM3NjQ1M2ViOF9tZWxuaWsxLkpQRyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ"
    },
	{
        title: "Dafen Oil Painting Village",
        description: "While Shenzhen is the undisputed capital of electronics manufacturing, tucked away beneath the towering skycrapers is a more unusual claim to fame. Dafen Oil Painting Village is the knock-off oil painting capital of the world, producing 60% of the world’s art reproductions.",
		know: "To get here, take the Blue Line of the Shenzhen Metro. The village is between the Dafen and Mumianwan station.",
		city: "Shenzhen Shi",
        country: "China",
        continent: "Asia",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzNmMGI1MWMwMDIxMjEyZjZjOF9EYWZlbixfb2lsX3BhaW50ZXJzX3ZpbGxpYWdlXzIwMDYuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/Dafen%2C_oil_painters_villiage_2006.jpg"
    },
	{
        title: "The Sword in the Stone at Montesiepi Chapel",
        description: "The legendary sword in the stone, often linked to King Arthur, does exist. Not in Avalon though, but in Italy. The real sword is on display in the Montesiepi Chapel, near the Abbey of San Galgano in Chiusdino, Tuscany. Allegedly, countless people have tried to steal the sword.",
		know: "While the sword was considered a fake for years, recent studies examined the sword and the hands, and the dating results, as well as metal and style of the sword, all are consistent with the late 1100s–early 1200s. While it’s impossible to verify the sword’s legendary history, it does match up with Saint Galgano Giudotti’s timeline.",
		city: "Chiusdino",
        country: "Italy",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2dhbGdhbm8yXzAuZ2lmIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50IC1jb2FsZXNjZSAtbGF5ZXJzIE9wdGltaXplVHJhbnNwYXJlbmN5Il1d/galgano2_0.gif"
    },
	{
        title: "Soyuz 11 Memorial",
        description: "In the center of Kazakhstan, 16 miles of desert away from the nearest road, lies a giant, black monument that only a small handful of people have ever laid their eyes on. This is the Soyuz 11 Memorial, dedicated to the only men to die in outer space, the crew of the Soyuz 11 rocket.",
		know: "To honor their memory, at the exact location that the Soyuz 11 landed in the middle of nowhere, the Russian government built a large black monument with three sides, each engraved with the face of one of the three crew members. Constructed in 1973, it was hardly ever visited due to its remote location, but it paid due respect to those who lost their lives for the Space Race. Unfortunately, it only lasted 39 years. In 2012, a group of visitors found that the monument had been vandalized. Only metal bars and scattered ruins remain. As of 2016 a new, smaller monument has been installed.",
		city: "Zhanaarka District",
        country: "Kazakhstan",
        continent: "Asia",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2EyNzU4OTQ1MjM3OGViNTY5Nl81MF9iaWctbWl0Y2hlbGwuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/50_big-mitchell.jpg"
    },
	{
        title: "The Clown Motel",
        description: "Oh, just a motel on the edge of the desert decorated with thousands of clowns conveniently located next to an abandoned graveyard. Remarkably, there do not seem to be many extant stories, horror or otherwise, surrounding the Clown Motel.",
		know: "No check-ins after 11 p.m. However, if you call ahead, they'll leave a key under the mat.",
		city: "Tonopah",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2IyMTU3NzIwLWM1YjktNGZkMS04MWJlLTM0MmFhYmFkNTI4NDg1MjEyMTFkYzNhM2FhZTdiNF8yMDE5MDkxNV8wNzMyMDcuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/20190915_073207.jpg"
    },
	{
        title: "Pando, the Trrembling Giant",
        description: "One of the world's oldest and most massive living organisms is a grove of quaking aspens. Located in the Fishlake National Forest in Utah, each of the approximately 47,000 or so trees in the grove is genetically identical and all the trees share a single root system.",
		know: "Located one mile southwest of Fish Lake on SR-25. Doctor Creek Recreation Site is a US National Forest Service Campground located within Pando, if you want to spend a night inside a giant, ancient organism.",
		city: "Richfield",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzg1MmY3MGYzNTI4YjhkOGNkM19wYW5kb3RyZWUyLkpQRyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ"
    },
	{
        title: "Sea Tigers Submarine Yard",
        description: "These military submarines wouldn’t look out of place in a 1950s sci-fi film, but in fact they are warzone remnants of the long and bloody Sri Lankan Civil War. These deserted vessels were homemade in secret in makeshift factories in Tamil Tiger-occupied jungle by the rebels’ naval wing.",
		know: "",
		city: "Puthukkudiyiruppu",
        country: "Sri Lanka",
        continent: "Asia",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2c2eTl5MnF2MTR4dDJvdnUzMWRkMTllODFkNDM1ODRkMDhfSU1HXzA2NzQuSlBHIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/IMG_0674.JPG"
    },
	{
        title: "Twinings Tea Shop",
        description: "A 300-year-old tea shop that brought tea to the English people still stands today. Though we think of Britain’s relationship to tea being as old as the nation itself, the drink had only been introduced in the 1660s by a Portuguese queen. But tea quickly became the national beverage, and today Twinings is synonymous with the history of British tea.",
		know: "Today Twinings is synonymous with the history of British tea. Over 300 years later, the original Twinings shop on the Strand is still in business. The Twinings logo, a simple, gold sign bearing the company name, has remained unchanged since 1787, making it the oldest corporate logo still in use. In 1837, Queen Victoria granted the company a royal warrant, a merit which has given Twinings the honor of providing tea to the royal family ever since. ",
		city: "London",
        country: "England",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzk1Mjc3MTIxZjU1YzllYjFkNF8xMzc4MTQyMDU5M18yNDRmZTFkMmM5X2suanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/13781420593_244fe1d2c9_k.jpg"
    },
	{
        title: "That Wanaka Tree",
        description: "A solitary tree has grown up all alone on Lake Wanaka, backdropped by the beautiful Southern Alps. Known as the “lone tree of Lake Wanaka,” it is said to be one of the most photographed trees in all New Zealand. However, you still need to have the inside scoop to find it, as there are no signs directing people to the solitary tree.",
		know: "The easiest way to access this iconic tree is via a car park located just a two minute walk away. This car park is found at the start of the Waterfall Creek Track.",
		city: "Wanaka",
        country: "New Zealand",
        continent: "Oceania",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzQyODMwMjQ4OGVjMGQ4ZTFjMl93YW5ha2EtMzI1Mzc4XzE5MjAuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/wanaka-325378_1920.jpg"
    },
	{
        title: "The Swing at the End of the World",
        description: "With no harness, net, or any other safety feature the swing (nothing more than a plank suspended by two ropes) arcs riders out into the air over the canyon. It is unclear where the swing came from—perhaps it was set up by a whimsical seismologist.",
		know: "When you pull up to the Casa de Arbol, you will immediately see a tree house with a swing at the top of a steep hill. This is not the Casa de Arbol, it is actually up a little trail and on the other side of the hill. But, this is a giant swing over a huge hill, and it’s cheaper than the Casa de Arbol (by $1) and has less lines. So by all means, give it a try if you like. The actual Casa de Arbol is to the right and up a short trail. Or, hike up the path to the Bellavista Cloud Forest Viewpoint from Baños (3-hour hike, less than 1 km). Casa de Arbol costs $2 to enter, which includes all three swings and the zip line. There is a small cafe on site as well with food and drinks for purchase.",
		city: "Banos",
        country: "Ecuador",
        continent: "South America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzBmODRjZmI2NzU5YThiOGQzOV9zd2luZy1hdC10aGUtZW5kLW9mLXRoZS13b3JsZC5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"
    },
	{
        title: "The Museum of Icelandic Sorcery & Witchcraft",
        description: "Staves, storm-calling, and of course, necropants, await in Iceland.",
		know: "At Strandagaldur, the museum of Icelandic sorcery & witchcraft, these times of magic and fear are remembered in often shocking detail. The museum focuses on the elaborate and esoteric spells and rituals that the regional magic called for which would provide such effects as conjuring a creature to steal goat’s milk or making someone invisible. The collection features a number of artfully displayed artifacts and displays such as rune-carved pieces of wood, animal skulls, and a number of Icelandic magical staves. However, the most shocking and remarkable piece is easily the so-called 'necropants' which is the dried skin of a man from the waist down. These horrifying leggings were used in a spell that would supposedly bring the caster more money.",
		city: "Holmavik",
        country: "Iceland",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzJkYzhkZDBkYWMzMzE2YTk3NF81NDY1ODg5MzY2XzZkN2YyMjg0ZmNfei5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"
    },
	{
        title: "Farine Five Roses Sign",
        description: "When French was cemented as the official language of Quebec in 1977, one unwitting victim was one-third of this bright red and white neon sign, flashing out the Five Roses flour brand. The sign has been a fixture on the Montreal skyline since the late 1940s, and the lights are still on. At least for now.",
		know: "The sign is atop what is now mill property owned by ADM. It sits along the St. Lawrence River, at the Old Port of Montreal, and you can see the sign from both sides. It's illuminated every day, and photography is best in the early evening to late at night.",
		city: "Montreal",
        country: "Canada",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2NlMTk2OGI4MjhiMGFhMGY2YV9Sb3NlIDEuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/Rose%201.jpg"
    },
	{
        title: "Synchronized Fireflies of the Great Smoky Mountains",
        description: "For two weeks every June, fireflies in the Smoky Mountains perform an astonishing synchronized light show, a curious phenomenon that remained undiscovered for years.",
		know: "During the second week in June, trolleys run from the Sugarlands Visitor Center to the Little River Trailhead at Elkmont, leaving every 20-25 minutes. The trolley is the only transportation in and out unless you are a registered camper at Elkmont. If you want to take the shuttle, you must register for the lottery. There are only 1,800 parking spaces, and over 20,000 people enter.",
		city: "Gatlinburg",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzcyY2EyMzUwNDMwMTcyMmFhMF9TY3JlZW4gU2hvdCAyMDE2LTA2LTIwIGF0IDMuNDUuNDAgUE0ucG5nIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/Screen%20Shot%202016-06-20%20at%203.45.40%20PM.png"
    },
	{
        title: "Thor's Well",
        description: "On the Oregon coast there is a natural hole that seems to be draining the sea. Also known as the drainpipe of the Pacific, the well is actually a hole in the rock that only appears to drain water from the ocean. The hole is not bottomless, but it is, however, very dangerous.",
		know: "Just South of the Cape Perpetua Visitor Center in Cook's Chasm, Oregon. Park on the West side of Highway 101 to see it below.",
		city: "Yachats",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzlhMzRiNDgxYzJlZmY4MTQ5MV82MDY2NTA3Njc3XzBjNDkwN2QzZGJfYi5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/6066507677_0c4907d3db_b.jpg"
    },
	{
        title: "Anna Goldi Museum",
        description: "The last woman executed for witchcraft in Europe is remembered in this Swiss museum.",
		know: "In 2008, 226 years after her execution, the Glarus parliament acknowledged that a miscarriage of justice had taken place and officially exonerated Anna Göldi. Today, visitors can tour a museum dedicated to Göldi’s life and death within the Hänggiturm building in nearby Ennenda.",
		city: "Ennenda",
        country: "Switzerland",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzBjNGJjYzczM2FjNjVhMmZlNF9EU0MwMjE4OC5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/DSC02188.JPG"
    },
	{
        title: "Shah Cheragh",
        description: "Visiting the Shah Cheragh mosque in Shiraz, Iran can be a sober, spiritual experience. Yet the interior of the central temple looks as though a disco ball exploded, covering nearly every inch of this arrestingly beautiful mosque with glittering mirrors and shards of glass.",
		know: "Despite being damaged by human hands and natural disasters over the centuries, the mosque has been maintained and repaired and shines brightly even today. The increasingly sprawling site is still an extremely important pilgrimage location for Shia Muslims, however visitors of any faith are likely to marvel at the sheer beauty of this glassy wonder. ",
		city: "Shiraz",
        country: "Iran",
        continent: "Asia",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2RhOThlN2IxYmM4YWQzM2JiM19JTUdfNzc1MC5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"
    },
	{
        title: "Trick Eye Museum",
        description: "South Korea's love of the silly photograph is on full display at this goofy collection of trompe l'oeil paintings.",
		know: "The Trick Eye Museum continues to add optical illusions to its collection which now covers almost every wall in the space. In addition, the museum has also opened an 'Ice Museum' next door that while retaining the Trick Eye name has nothing to do with tromp l’oeil images and is solely focused on ice sculptures and plastic displays of frozen water. The connection seems a bit strained, but both sites provide ample photo opportunities.",
		city: "Seoul",
        country: "South Korea",
        continent: "Asia",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2U0YzRkZTJjN2Q4N2EyMTEwZV84Mzc4MzY5ODQ4XzgxNzc0ZTUwMDZfei5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"
    },
	{
        title: "Seven Magic Mountains",
        description: "The 30-foot-tall neon totems that adorn the desert skyline outside Vegas will only be on view for one more year.",
		know: "There are brown and white directional signs pointing to Seven Magic Mountains starting just before the exit off the I-15 and along the access road. Park in the dirt parking lot. No restrooms on site. Rattlesnakes have been seen in this area, so wear closed footwear and stay alert.",
		city: "Sloan",
        country: "United States",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzQ3eG1la210MTYyMHByeDYxOGZjYjRiMWFkMzY4MjI4OWNfSU1HXzA1NDcuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/IMG_0547.jpg"
    }
];

export default tip;