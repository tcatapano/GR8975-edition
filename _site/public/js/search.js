// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  title: "Casting wax to mold an animal that one has not got",
  author: null,
  layout: "narrative",
  content: "- - - - - 139v - - - - - \n##  Casting wax to mold an animal that one has not got\n\nTake some white wax which is much more appropriate for this kind of work than anything else, because it is much firmer and does not leave as much filth, as much as you need to cast the animal that you propose, and no more. And [take] a half quantity of ground coal and neatly sieved through a cloth or coal sleeve, using it to give some color to your wax, that would otherwise be transparent and you will not be able to see your lines as clearly. Put your wax on the coal fire to melt. And when it is well—melted and well—liquified, have, for a full eared—porringer of melted wax, as much sulphur as a large walnut. Pulverize it. Melt it over a slow fire and when it is melted, do not leave it on the fire because it will become too hard. But take it off and keep stirring it with a little stick and when it has finished bubbling and is as liquified as water, cast it into the wax that you will have previously removed from the fire. And mix and stir both of the them so that they join together. After stir in little by little while continuously mixing, the charcoal that has been repeatedly ground, and in this way it will be very well incorporated. This is how you will know that your wax has gone beyond its ideal heating point, it will release no more smoke, it will start to have lines appearing on the side and not in the middle, and those lines will be close to each other. If you cast too hot, you will not be able to separate your wax from your mold and it would stick to the cast. When it is at the right state, stir it with a little stick so that the pulverized charcoal is well mixed in and has not fallen to the bottom of the mixture. And in this way, throw it in your mold bit by bit and not in one go, because wax is not runny\n\n\n  position: left-top\n\n  This black sulphured wax is for fashioning round figures that do not come out of the mold. And they need to be burned in the moule au noyau rather than be opened like the ones that have something jutting out or an intertwining of legs and arms. And this wax, thanks to the sulphur, will melt with little heat and leave without leaving any filth. If by some misfortune the crushed charcoal remains in ashes, when you open the mold and blow on it, it will come clean.\n\n\n\n  position: left-bottom\n\n  To make wax serpents or other things to affix to candles, it is necessary to cast them with esbaucher wax of all colors.\n\n- - - - - 140r - - - - - \nnot like other things. And for this one, you can cast two or three times until your mold is full. Now, concerning this mold of pulverized white plaster &amp; reheated in the manner of the sand from the preceding recipes, you should have made it long ago because it is used many times. But, before using it, soak it for a good hour in cold water, &amp; at a minimum, at least as long in hot water that at first is so hot that you can’t hold your finger in it. And note that it absorbs no more, but that it appears very wet overall without water seeping into it. In removing it closed from the hot water, cast your wax in such a state of heat as has been described. And neither the first nor the second casting will readily come out well, hardly, until the mold is soaked. Let it cool down before opening it so that the cast thing not break. You will know that the casting is good when the wax coming back out of the mold is thin and even. Remember to make several castings along the whole length of the mold so that in this way the wax runs better. Make the firstcasting twice as large as other molds. And if, in the first casting, your work fills with bubbles and in so doing does not come out neatly, it’s all the same, because you have to face the fact that the three or four first do not readily come out well. Firstly, you will know whether there are a few barbs that keep it from stripping well. And you will remove them if, on their own, they do not remove themselves in the two or three first castings. And the more that you cast, the more you will do it neatly. And your mold will serve you more than one hundred times if it Is well governed. But it is good to soak it one night or one day before casting so that it be well soaked. The same must be done for fruits made from sugar. This wax is very soft &amp; friendly &amp; pliant, like copper. And if it is hard [this is] because of sulfur, which makes it melt more easily than than other [wax], so much that you can see evidence on a hot slate. And the sulfur that you put inside will be found the second time that you melt it, [as] cracks on the bottom. Having in this way passed through wax, it will not catch fire at all when put to a candle. And in this case, I believe that it will cast quite the medal [illegible]. One uses the same wax in place of varnish to [illegible].\n\n\n  position: left-middle\n\n  When your animal is cast, cut away the froth &amp; superfluous things with a hot pen knife. And if you want, plait and wrap it around some stick or candle, put it in some hot water to soften and hold it in turning it around.\n\n\n\n  position: left-middle\n\n  Lower the protrusions of the castings so that they be even &amp; that the wax has more silver so that it can run all in one go without turning through the windings of the snake.\n\n- - - - - 140v - - - - - \nto engrave on silver &amp; copper with aqua fortis. With this [wax] too, one fills the cavity of a relief, &amp; then casts in this cavity, with moistened sand, which immediately takes the relief very neatly. And then you can cast its cavity on it in copper, gold, and silver, and make really singular seals.\n\n\n  position: left-top\n\n  Seals\n\n\n",
  id: 0
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 169r - - - - - \nMolding a tortoise Furry animals Birds Leaf of vine — put Of the strawberry Piece molding Molding a vase in a chassis Molding capilli veneris Molds that need to be supported by nets Molding a bouquet Rose carnations Hollow molding Hollow gilded silver Molding wort plant put + Crayfish put and seen Grasshoppers Barbots Butterflies Flies Bats Enameling thin gold Molding in sugar Molding fish Molding in sulfur put Cardboard + Wax put Roughing out Stamped medals full of lead Molding large carved wooden pieces Molding and making casts of metal animals + Wheat oil put and seen Stag beetle Foot of a bittern molded Thickness of a medal Very hard wax Molding the engraving on a ring Molding pieces of carcanets Things that do not release from the mold …  Fountains Grottoes Sundry mosses applied Molding in three chassis Tempering iron in order to engrave it Etching on silver and iron Stamping White enamel, softening it with black calcinated river pebbles\n",
  id: 1
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \nNicolas Coste, in the Rue de la Heaumerie, at the sign of St Claude/Mirrors Master Jehan Cousin, who resides in the Faubourg St Germain, knows about the master Master Jehan Garnier, in the Rue des Escrivains by St Jacques de la Boucherie, currier. Try woad flowers\n",
  id: 2
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \nThe harvester that leaves some ears is not blamed.\n\nSacra Eleusinae deae propalare nefas.\n\nTrumpets, see the book of funerals\n\n",
  id: 3
});
index.addDoc({
  title: "To varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 003v - - - - - \n## To varnish\n\n  Turpentine varnish does not need any glue since it is fat and viscous and does not penetrate the wood as spike lavender varnish and sandarac varnish would. Spike lavender varnish does not require any glue on iron and similar materials which cannot be permeated, but on wood and on colors which do not contain gum or colle de détrempe, it is necessary to lay one coat of the said glue colle de retailles and allow to dry, then varnish.\n\n",
  id: 4
});
index.addDoc({
  title: "Lavender spike oil varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 004r - - - - - \n##  Lavender spike oil varnish\n\n  One must heat lavender spike oil and, as it begins to simmer, put in powdered sandarac gum so that it soon melts. And stir continuously over a charcoal fire until the sandarac is well melted, which you will know by taking a little of the said varnish on a plate and, if it is fat enough when you handle it with a finger, it is ready. And for one pound of lavender spike oil, you should put five ounces of ground sandarac.  Some only put in four ounces but this is not as good, nor as fat. The former dries promptly. To avoid the trouble of polishing their ebony, framemakers varnish it with this. So do guitarmakers. This varnish is not as fitting for paintings as fine turpentine varnish, though it is good for the paintings’ moldings. When linseed varnish was in use, one would not commonly varnish the landscape of a painting because it would turn the landscape yellow. But with turpentine varnish one varnishes everywhere. Instead of sandarac, you can add to it pulverized mastic drop by drop or otherwise, and it will dry more quickly.  If you want to varnish plaster or a wall, first put on your colle de retaille, very hot, because if cold it would not penetrate the wall at all. And when you would have put your varnish on, it would come off.\n\n\n  position: left-top\n\n  Aspic oil varnish is not as apt for colors as that of turpentine, because aspic oil eats the colors, since it is too penetrating.\n\n\n",
  id: 5
});
index.addDoc({
  title: "To remove varnish from an old panel painting that has yellowed and varnish it again",
  author: null,
  layout: "narrative",
  content: "- - - - - 004r - - - - - \n## To remove varnish from an old panel painting that has yellowed and varnish it again\n\n  Take some white soap and ashes strained through a sieve, and soak all together in water. And with a sponge, take some of the said ashes and soap and rub the painting with it. And when you see that the old varnish has been taken off, throw a bucket of water at the painting to clean it, then leave it for a quarter of an hour in the sun to dry and revive the colors. Once your painting is dried, you can apply your turpentine varnish.\n\n\n  position: left-bottom\n\n  Make sure the colors do not come off.\n\n\n",
  id: 6
});
index.addDoc({
  title: "Black varnish for sword guards, metal bands for chests, etc.",
  author: null,
  layout: "narrative",
  content: "- - - - - 004v - - - - - \n## Black varnish for sword guards, metal bands for chests, etc.\n\n  Take linseed oil or, for a cheaper option, walnut oil, and rid it of fat with garlic cloves and hog’s fennel (some also add bread crusts), which you will boil in it for a good quarter of an hour. Then add to one pound of the oil boiled in this way a piece of black pitch the size of a walnut and a double handful of wheat, without removing the garlic and onions, and allow to boil together for a good quarter of an hour. Once the pitch is well melted and the oil takes on body, you can remove it from the fire. Then, to varnish, place your iron over a warm charcoal fire and apply with a feather or a brush. When you see that it no longer smokes, it is done and your varnish is dry.\n\n\n  position: left-top\n\n  For an excellent black varnish, add two or three paternoster beads to the rest.\n\n\n\n  position: left-top\n\n  Some consider walnut oil to be better.\n\n\n\n  position: left-top\n\n  If there is a quantity of varnish, it needs to boil for at least half a day, because the more it boils, the better it is. Should the varnish boil over, it is dangerous for it to catch fire and it is difficult to extinguish. So do this in a courtyard or other open space.\n\n\n\n  position: left-middle\n\n  In five or six lbs. of oil, one must put one lb. of galipot, which costs 4 sols, and some peeled garlic cloves. This varnish is not black in and of itself, but turns black when exposed to fire.\n\n\n\n  position: left-middle\n\n  See below, around the 3rd part of this book, after sands, in the chapter on furbishers.\n\n\n",
  id: 7
});
index.addDoc({
  title: "Black varnish without fire, without disassembling harnesses or removing metal bands from chests.",
  author: null,
  layout: "narrative",
  content: "- - - - - 004v - - - - - \n## Black varnish without fire, without disassembling harnesses or removing metal bands from chests.\n\n  Take spike lavender oil varnish and mix it with charcoal black or lampblack and, without fire, it will mix in by itself. Apply the varnish with a brush and it will soon be dry. Turpentine varnish would work quite well but it does not dry as quickly.\n\n",
  id: 8
});
index.addDoc({
  title: "Iron engravers' varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 004v - - - - - \n## Iron engravers’ varnish\n\n  Take linseed oil or walnut oil and instead of black pitch you will add some pine resin and you must cook it like black varnish on fire. And to apply it, heat your iron and apply just one layer of varnish, and when it no longer smokes, it is dry. Then engrave with a steel point whatever you want. Then take some salt and verdigris and soak it with as much of one as of the other in very strong vinegar, and leave it for XX4 hours before using it, and the whole will be soaked. Then spread this liqueur or sauce on the engraved object with a sponge\n- - - - - 005r - - - - - \nor linen cloth and leave it thus for xx4 hours and it will be engraved. But if you should want to engrave it quickly, varnish all your work and boil it in the aforementioned liquor, and this will engrave it quickly.\n\n",
  id: 9
});
index.addDoc({
  title: "Steel mirrors",
  author: null,
  layout: "narrative",
  content: "- - - - - 005r - - - - - \n## Steel mirrors\n\n  + They are called steel mirrors because in the past they were usually made of steel polished with emery paste. But more easily, various kinds are made of cuivre franc, which is rosette and tin, because these can be cast in a mold and made round, hollow, convex or in whatever various shapes you want to represent.\n\nSo take half rosette copper and half soft tin, i.e. fine and yet unused. Place them in a crucible, and first melt the copper. Once it has been well melted, add the tin and mix them together and cast that in a white stone mold with no hole, and grease the mold, which should be moderately warm, with oil. Then, once your mirror has been molded, you can polish it in this manner.\n\nSet one mirror in plaster to hold it firmly, then put the other one over it with fine sand between them, and rub one against the other, whether they are hollowed or flat, and thus you will polish both at once. If you want to polish them on both sides, you only have to switch them, which means putting the one that was polishing in the plaster and [using] the one which was in the plaster to polish. Once they have been polished with you can soften them with tripoli of Venice that should not be sandy, and then with paste. You use water with arene to polish, but polishing with tripoli and paste is done dry. Once the mirror has been polished, you can set it.\n\n",
  id: 10
});
index.addDoc({
  title: "Concave mirrors",
  author: null,
  layout: "narrative",
  content: "- - - - - 005r - - - - - \n## Concave mirrors\n\n A concave mirror shaped in the aforesaid form produces an endless number of illusions which seem like magic. If one wants to see oneself from behind, you have to place the concave mirror on the ground on its foot, at a slant, and then look at it one step further. But if you look at it from a closer position, it shows you the right way up but with the face quite large and the hairs of your beard as thick as\n- - - - - 005v - - - - - \n a string and will reflect a nipple as large as a plate, and women can see the secret places they do not want to show to surgeons. It projects the reflection outwards, and if you touch with your finger the eye of the reflection, another finger will come against yours. You will be able to provide light at night for someone quite far away, if you set the concave mirror behind a candle placed on a window sill. You will be able to read and write quite far from the candle if you set it behind the candle and turn the concave face towards you. If you put the mirror at the far end of a table with a candle on it, it will reflect two lights on the table for you. To see what is happening in a street, shut the window, or the more you can shut the better, make a hole in the bottom pane, the size of your little finger, perfectly round all the way through. Then apply a sheet of paper onto the window and let the middle of the sheet be over the hole. Pierce the sheet in the same place as the hole and of the same size. Then turn the concave face of the mirror towards the hole, and anyone passing by in the street will be reflected on the sheet of paper. Do the same with the pierced door of a closed room. You can make wavy mirrors and triangular ones, such as are described by Ptolemy and Archimedes. The concave sort can also set fire to straw or light a candle from afar, using the sun. By reverberating fire too, it can provide warmth.\n\n",
  id: 11
});
index.addDoc({
  title: "For bronzing in yellow and white",
  author: null,
  layout: "narrative",
  content: "- - - - - 005v - - - - - \n## For bronzing in yellow and white\n\n Take mirror tin and melt it. On half a pound of this, put half an ounce of quicksilver, and remove it immediately from the fire and grind it until it is like ashes. Wash it thoroughly in clean water, then grind it on a marble slab and soak it with water of colle de retailles. Then apply that on your wooden candlesticks and any other works you like, and burnish with a tooth. You can grind pin filings and apply them with the said colle de retailles.\n\n",
  id: 12
});
index.addDoc({
  title: "To lay down and set burnished gold and give it a red or green or blue hue",
  author: null,
  layout: "narrative",
  content: "- - - - - 006r - - - - - \n## To lay down and set burnished gold and give it a red or green or blue hue\n\n  Ceruse and lead white is not appropriate for polished white nor for burnishing because it is fat, but it is quite good for matte gold, which is made with oil by mixing it with yellow ochre and mine and tempering the whole with oil, and this matte gold so applied lasts in the rain, like gilded leadwork and similar things. Therefore, for burnished gold take good chalk, quite white, well ground and soaked with distemper glue and do four coats of it, one after the other, on the wood. And when the last one is dry, rub it with prêle, which is a kind of grass otherwise named horsetail, to render it well polished. Afterwards, take fine Armenian bole and sanguine, as much of one as of the other, a bit of lamb tallow the size of a bean or a pea depending on the quantity of bole, and a little willow charcoal, or as much as the tallow, and half a walnut shell filled with half—burned saffron; some put in a little candi sugar. Grind everything together with water and apply it without gum or glue, and let it dry. And rub the place that you would like to gild with a piece of white cloth to better unify it, and when the rubbed place is a little shiny it is a sign that the gold will behave well. After rubbing, wash the place that you want to gild with a clean brush soaked with clear water and apply the gold at once, which you will burnish when dry. And if you want to set rouge clair and glaze with it, grind Venice lake on the marble with walnut oil or linseed oil. After grinding, mix in turpentine varnish or spike lavender varnish and apply on gold with the brush. Brazilwood and laque ronde fade. For green, temper verdigris with walnut oil or linseed oil and grind it, then mix in some turpentine varnish; not aspic varnish, which is not suitable for verdigris. If you want to glaze with azure it must be set on burnished silver. Take azure enamel, and without grinding temper it with turpentine varnish and apply it.\n\n",
  id: 13
});
index.addDoc({
  title: "For cages",
  author: null,
  layout: "narrative",
  content: "- - - - - 006v - - - - - \n##  For cages\n\n  You can embellish them with thin enamel canes of various colors by covering the yellow latten or iron wire with said canes. These you will break neatly into the length that you want if you make a small notch with a cutting file at the point where you want to break them, and they will not break anywhere else. You can bend them with a wooden model over a brazier or by the heat of a lamp. A cane can be stretched out as long as you want in a small furnace made like a reverberatory oven but with openings on both sides. And once the large cane is red, they seize the hot end of it with small pincers that have long beaks, with one end of the beak inside the end of the cane, so that it may be stretched without becoming blocked. The other end of the cane is held with the hand, as it is not hot. Once the cane is stretched enough, the one who is working seated with his stove, the size of a carnation pot, placed in front of him, breaks it off and carries on. This is for making cane for capes, which may be cut, as already mentioned, with a file. Glass—button makers also use the said stove. \n  \n&gt; position: left-middle\n&gt; \n&gt;  Under the door is a grill that supports the burning charcoal. The ash is emptied by turning the stove upside down.\n\n",
  id: 14
});
index.addDoc({
  title: "For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances",
  author: null,
  layout: "narrative",
  content: "- - - - - 006v - - - - - \n##  For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances\n\n   Etch with aqua fortis on iron or copper whatever you have pounced and drawn there, next make it neat with a burin or chisel. Then pour soft tin, yet unused, onto polished marble and flatten it, making it quite thin, with a wooden board. Or else pour it on a table as is done with lead, or put it through a roll—press. Next lay your tin plate over the engraving, and over the tin plate put a piece of felt and strike it with a hammer. Then gild it in the following manner.\n\n",
  id: 15
});
index.addDoc({
  title: "To gild with gold color and tinsel",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n##  To gild with gold color and tinsel\n\n Once you have colored or made your stamped ornament in tin (as previously described), or in iron or copper, you must not put glue as on wood, but just have some fatty oil, which is made in seven or eight days in the sun from walnut oil and white lead, stirring often, or cooked on fire if one should be in hurry. Then, with  the oil thus made fatty, grind a little white lead, massicot and black graphite, at discretion, as much of one as of the other. Minium will color the gold. Then apply an even layer of that onto your stamp, taking care you do not fill the hollows. And once it is almost dry, apply the gold leaf on it using cotton. Such gold will withstand rain on houses or elsewhere. And if you have made your gilt with tinsel, color it with smoke from a partridge or from yellow or red cloth, and it will look as fine as pure gold. You can cover trunks, mirrors, bed valances and posts in colored velvet or satin and then apply the gilded stamped ornament on them with strong glue.\n\n",
  id: 16
});
index.addDoc({
  title: "To color stamped ornaments for trunks",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n##  To color stamped ornaments for trunks\n\n  The stamped ornament made from sheets of copper or latten are made with wood from a service tree engraved and cut, should you want to spend less. Next, the stamped piece is colored with the aforesaid lacquer colours of lacquer, verdet, blue enamel, and soaked in turpentine varnish. But wherever you want to make it azure, apply some fer blanc, which is more appropriate for an azure background.\n\n",
  id: 17
});
index.addDoc({
  title: "Doublets",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n##  Doublets\n\nGood dragon’s blood soaked in spirits produces its own mastic or glue. So do vert de vessie and saffron.\n\n",
  id: 18
});
index.addDoc({
  title: "Fish glue or usblac and mouth glue",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n##  Fish glue or usblac and mouth glue\n\nIt is made from codfish skin that has been boiled rather than salted. Joiners use it on their masterpieces and guitar makers use it for their more delicate works. It needs to be strongly whipped, then soaked gently in barely boiling water.\n\nMouth glue is made of parchment scraps and used to glue paper or similar things without fire, by wetting it with one’s mouth.\n\n\n  position: left-bottom\n\n  It is whipped and left to soak in white wine for one night, then melted over a low heat. Others soak it in spirits.\n\n\n",
  id: 19
});
index.addDoc({
  title: "To give the color of all kind of metals and woods and other things",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n## To give the color of all kind of metals and woods and other things\n\n   Take touchstone and pumice stone as much of one as of the other and grind them together, mix that with a colle de retailles stronger than that used for painting, and apply a layer of it on whatever you like. Once dry, rub this layer on any metal whatsoever, then burnish it.\n\n",
  id: 20
});
index.addDoc({
  title: "Against windy colic",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n## Against windy colic\n\n Take a dozen dried common walnuts and throw them one after another onto a good brazier where they may catch fire, and take them out with tongs, and let them burn and flame well in the air, and extinguish them in a glass of good wine. Then let the wine cool and filter it, then pour half of it, since six extinguished nuts make one dose. An excellent cure against suffocation of the matrix.\n\n",
  id: 21
});
index.addDoc({
  title: "To relieve the pain of g{out}",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n## To relieve the pain of g{out}\n\n  Take half a pound of finely powdered golden and yellow marcasite, half an ounce of storax, 4 lb. of urine, incorporate well together, little by little, in a mortar, then boil all together quite strongly. But the pot needs to be well covered so the smoke does not escape. Then distill the imbibed urine, separated by inclination, in an alembic, well luted and covered with a copper head. And soak a cloth with the said water and apply it lukewarm on the pain.\n\n",
  id: 22
});
index.addDoc({
  title: "Against gonorrhea",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n## Against gonorrhea\n\n  Cook .i. lb. of old smiths’ water, .i. ℥ of Armenian bole reduced in the finest powder, and .iii. ʒ of common honey, until the honey stops foaming. Once cooled, strain with great pressure and use the results of filtration by injection.\n\n",
  id: 23
});
index.addDoc({
  title: "Gold lettering on paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n## Gold lettering on paper\n\n  Write with fig tree milk then let it dry a little, afterwards apply the gold in leaf and, once quite dry, rub with linen and only the lettering will hold.\n\n",
  id: 24
});
index.addDoc({
  title: "To explode grenades and give force to fireworks",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n## To explode grenades and give force to fireworks\n\n  Put into the powder one sixth as much of quicksilver\n\n",
  id: 25
});
index.addDoc({
  title: "Tempering bullets to pierce bullet-proof armor",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n## Tempering bullets to pierce bullet—proof armor\n\n Heat the lead bullet as much as you can without melting it, and once it is hot dip it into the strongest vinegar that you can. And do this four or five times. Afterwards, mince some lard very finely and some linen also very delicately, mix all this together and use it as wadding, making it go into the arquebus or pistol with a little strength and very tightly. And before shooting, if possible, the bullet should be hot.\n\n",
  id: 26
});
index.addDoc({
  title: "To make a breach in a wall by night",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n## To make a breach in a wall by night\n\n Having made a hole in a wall as you know, put one mortar inside, charged with powder, almost flat, and another upright, then fill in the hole and fire.\n\n",
  id: 27
});
index.addDoc({
  title: "To polish a ruby balay",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## To polish a ruby balay\n\n Unlike others, you don’t polish it with tripoli, but with marcasite powder and oil.\n\n",
  id: 28
});
index.addDoc({
  title: "Ground gold and ground silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## Ground gold and ground silver\n\nYou have to calcine your pure gold with ☿ and then let your amalgam dry well and the said mercury fly off. Then crush it on marble with gummed water. As for silver you have to use it in its raw form and corrode it with aqua fortis, then take it out with a copper blade and rinse it well and then grind it with gum water.\n\n",
  id: 29
});
index.addDoc({
  title: "Polishing stones",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## Polishing stones\n\n There are three wheels for this purpose, one of tin, one of lead, and one of pure copper. On the copper wheel, only diamonds, rubies, sapphires and oriental jacinths are usually polished. The tin wheel is for softer stones such as emeralds, amethysts and others.\n\n",
  id: 30
});
index.addDoc({
  title: "Pewterers' mixture",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## Pewterers’ mixture\n\n Because they often mix in with the pure tin half the quantity of lead, which renders the tin deaf. To correct this, they mix in some latten filings to make it resonant.\n\n",
  id: 31
});
index.addDoc({
  title: "Perfect amalgam",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## Perfect amalgam\n\n Take the finest sandstone you can find and make a cavity in the middle. And put in it an eighth part of ☿ and rub it and wear it down while adding some water with ☾ or ☼ until the material becomes paste—like and even harder. Then, if you want, corrode it with good aqua fortis, if it is ☾ or ♀. Then melt it again, having taken it out as you know. The ☾ will have some color, and after being melted it will leave some flecks of ☼, and the ♀ will be very fine and will have almost no covering.\n\n",
  id: 32
});
index.addDoc({
  title: "Plowman",
  author: null,
  layout: "narrative",
  content: "- - - - - 009r - - - - - \n##  Plowman\n\n Since millet is naturally very dry, harvesters thresh it most often in the cool of night and in moonlight. Which could not be done with another, wetter, grain, because you must let the sunbeams pass over it, and one rarely threshes it before midday. Immediately after the millet is harvested, the earth needs to be plowed because its roots eat and make lean the soil as much as if the millet was still standing. The ground where millet will have been sown becomes quite diminished in fertility, which you can tell next time it is sown. But more than any other the grain called pomole in Gasconyor or baillard in northern France, makes the earth shake, according to the common saying, seven years later. Broad beans improve and enrich the soil, provided that one lets the roots and stems rot in it.\n\n",
  id: 33
});
index.addDoc({
  title: "Painters",
  author: null,
  layout: "narrative",
  content: "- - - - - 009r - - - - - \n##  Painters\n\n After laying down their colors, some smooth it with the back of a feather but the large brush is best.\n\n",
  id: 34
});
index.addDoc({
  title: "Merchants",
  author: null,
  layout: "narrative",
  content: "- - - - - 009r - - - - - \n##  Merchants\n\n  They commonly have four books. The tiro, which is a formulary for apprentices, by which they can know how much every item of merchandise costs and for how much it should be sold. The second is the waste book, where they put down in rough what they sell daily. The third is the sales book, where they put down the clean copy and detailed account of what is contained in the waste book. The fourth is the ledger, which mentions the sale, the balanced account, the bill and the term of payment, and this book is accepted as evidence in court.\n\n",
  id: 35
});
index.addDoc({
  title: "Painters",
  author: null,
  layout: "narrative",
  content: "- - - - - 009v - - - - - \n##  Painters\n\n  They melt orpiment entirely in a glass bottle on very hot ashes, but it would be more appropriate to sublimate orpiment in a long—neck matrass as for making garnets. The orpiment thus turns red like red enamel and it has to be ground first in distemper, because once entirely melted it is very brittle and difficult to grind. Then, once dry, you can thin it with oil and it will make a deep and saturated yellow. But to prevent orpiment from fading in contact with other colours and make it compatible with these and to make it dry quickly, a most rare secret is to calcine common salt and to grind it together with the orpiment. Green verditer is not used with oil.\n\n",
  id: 36
});
index.addDoc({
  title: "Merchant",
  author: null,
  layout: "narrative",
  content: "- - - - - 009v - - - - - \n##  Merchant\n\n  The order that merchants are accustomed to keep in their books, which are the waste book, the sales book, and the ledger, also called the account book.\n\n",
  id: 37
});
index.addDoc({
  title: "Waste book",
  author: null,
  layout: "narrative",
  content: "- - - - - 009v - - - - - \n## Waste book\n\nFirst, François du Cros owes from 2 September 1581, for 1 canne de batiste at 8 livres per canne, total —— 8 livres tournois.\n\n\n  position: left-middle\n\n  Moved to the sales book at r. 25/ François du Cros owes from 2 September 1581, for 1 canne de batiste at 8 livres per canne, as shown by the waste book at r. 25\n\n\n\n  position: left-middle\n\n  Moved to the account book at r. 55/ François du Cros owes from 2 September 1581, for the merchandise taken by himself, as specified in detail in the sales book, No. 7, at r. 55, the sum of 8 livres, of which the aforesaid du Cros has made a bill on the aforesaid day, to be payed on Saint Andrew’s day next, total —— 8 […] r.\n\n\n",
  id: 38
});
index.addDoc({
  title: "Imitation jasper",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \n## Imitation jasper\n\n  Take horn as is used to make lanterns, quite thin, and underneath imitate your jasper, cornaline, and other stones. That will look more appropriate than doing it on glass, which is too shiny. And the horn gives a lustre and a fatty polish similar to jasper.\n\n   You know how you can imitate roses with scrapings of the said horn. The colors for this jasper need to have as a base clear turpentine or spike lavender varnish. And matte, opaque colors are not appropriate, no matter how fine they are. You have to oil the unpainted underside with spike lavender oil.\n\n\n  position: middle-top\n\n  Thin glass looks very fine for this effect\n\n\n\n  position: left-top\n\n   You can inlay beds with it, and on the joints you can throw talc or metal filings on the fresh cement of the said joints. You have to bond them with gum amoniacum soaked in vinegar. To better imitate marbled jasper, apply coarse wool hair dyed various colors and intermingled. After you have laid down all the colors, scrape oblique lines into them then lay down gold leaves and silver leaves. If you lay down colors made of turpentine on the horn, give it a backing of silver leafor of tin leaf. You can also file horn and mix it with strong glue and lay it down onto the joints of the horn piece and finish with a joiner’s plane.\n\n\n",
  id: 39
});
index.addDoc({
  title: "Scudegrun",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \n##  Scudegrun\n\n  It is made in Lyon from the juice of weld mixed with chalk or better yet with ceruse, which is appropriate for tempera and oil.\n\n",
  id: 40
});
index.addDoc({
  title: "Roses",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \n##  Roses\n\n  These are imitated either with the scrapings of horn used for lanterns, or with very light, fine and dyed parchment scrapings, used as you know.\n\n",
  id: 41
});
index.addDoc({
  title: "Purple color",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \n##  Purple color\n\n  Painters make it beautifully by first applying an undercoat of ordinary azur, or better yet azure enamel, and then they glaze it with lacquer, which will be more appropriate for this if you mix in alum, which will give it a violet tint depending on the quantity that you mix in.\n\n",
  id: 42
});
index.addDoc({
  title: "Powder for hourglasses",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \n## Powder for hourglasses\n\nIt must be made very fine and not subject to rust and with enough weight to flow. Taking i lb. of lead, melt it and skim and purify it from its filth, then pour into it four ℥ of finely ground common salt, and take care that there are no stones or earth. And immediately after pouring it, stir continuously very well with an iron tool until the lead and salt are quite incorporated, and take it immediately off the fire, stirring continuously. And if it seems too coarse, grind it on a marble slab and pass it through a fine sieve, then wash it as many as times as necessary until the water runs clear, throwing out the fine powder that will float on it, renewing the water as many times as necessary until it is completely cleared.\n\n",
  id: 43
});
index.addDoc({
  title: "For painting in oil on taffeta without the oil running",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \n## For painting in oil on taffeta without the oil running\n\n One needs to make a layer of batture, which is made of colle forte soaked for 24 hours in water then gently boiled so it is not too strong. Then stir in a little honey to soften it, and bring it all to a boil. And on top of this layer, which will soon be dry, you will be able to paint in oil, which will soften the layer even more, and which will also serve to make an underlayer for gold. Alum water also keeps oil from running.\n\n",
  id: 44
});
index.addDoc({
  title: "Underlayer for gold leaf on parchment or paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \n## Underlayer for gold leaf on parchment or paper\n\n   Make very clear starch glue, showing little body. And apply six or five layers, and when the last is almost dry, apply your gold to it.\n\n",
  id: 45
});
index.addDoc({
  title: "For cleaning gold leaf applied to iron",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \n## For cleaning gold leaf applied to iron\n\n  Rub your weapons or other gilt objects with dry horse dung.\n\n",
  id: 46
});
index.addDoc({
  title: "For whitening ceruse",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \n## For whitening ceruse\n\nHard—boil some eggs, cut them in half and take the yolks out, and between the two halves of the white put a bit of ceruse, and tie the two halves together with thread. Then boil in clear water, and it will become black, and thus the ceruse will be purified. Some reheat it over fire and it becomes very white.\n\n",
  id: 47
});
index.addDoc({
  title: "Painting enamel azure in oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 011r - - - - - \n## Painting enamel azure in oil\n\n  This is a secret that is hardly known to common painters. Some take the most delicate they can &amp; crush it with ceruse, which binds it, and next prick with an awl in several places the area they want to paint with azur d’esmail, such that the oil enters &amp; leaks in, &amp; does not cause the azure, which in itself is heavy, to run. Others lay the panel flat &amp; apply the azure on it, which is also done à destrempe. The main thing is to crush it well on marble, and before that, to have washed it thoroughly. Some grind it with thoroughly with an egg yolk &amp; then wash it in five or six lots of water and lay it on not with a painceau, which would be too soft, but with a broisse highly softened &amp; bent, &amp; laying it on thickly as if one were applying it with a trowel; settling down it evens out and flattens. I have experienced that crushing azur d’esmail with egg yolk &amp; then washing it in several lots of water is good, although it loses a little of its vividness in the crushing of it. I have also washed it in several lots of water &amp;, when it had settled a little, I removed the water, still q blue, with a sponge and squeezed it into another vessel thus where it settled, &amp; from the residue I had the ash, flower and subtlest part of the azure without crushing it, which is the best, for in the crushing of it, it loses some of its color. Those who make it in Germany compose it like enamel, in large pieces which they pestle, &amp; pass through several sieves &amp; wash.\n\nTo make azures beautiful, they wash or soak them in a rock water, as they call it; it is a water distilled from mines where azure or vert d’azur is found, which distills naturally through the mountain’s veins or is distilled with an alembic par from &gt;mineral stones of azure or copper.\n\nAzure ashes are only good for landscapes because they die in oil. Only true azure lasts. Azur d’esmail cannot be worked if it is too coarse. Try it, therefore, on the fingernail or the oil palette. If it happens to be sandy, do not crush it except with the egg yolk or, better yet, wash it in clear water &amp; with a sponge remove the colored water after it starts to go to the bottom, and in this manner you will extract the quite delicate flower, which will be easy to work with.\n\n",
  id: 48
});
index.addDoc({
  title: "Applying the color of Damascene steel on knives",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Applying the color of Damascene steel on knives\n\n  Rub the steel with common aquis fortis mixed with earth. After, rub everything with ashes or sand. Do with the gold and silver as you would do on a touchstone.\n\n",
  id: 49
});
index.addDoc({
  title: "Getting rid of red eyes or black eyes",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Getting rid of red eyes or black eyes\n\n  Make two small licks of raw mutton flesh, and with a blindfold, apply it at night on your eyes.\n\n",
  id: 50
});
index.addDoc({
  title: "Applying unpolished gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Applying unpolished gold\n\n  There is nothing better than the black varnish of sword—makers to use as a base layer because it dries quickly and makes the gold appear very beautiful.\n\n",
  id: 51
});
index.addDoc({
  title: "Making diamond points for engraving",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Making diamond points for engraving\n\n  These are for sketching what you want to draw on stones and for engraving. When these points are too dull and cannot engrave, it is necessary to rub diamond against diamond; one can rub them with pumice stone powder. It is necessary to strip what you want to engrave on a lead wheel or with a stone or with glass, because the polishing is like varnish or glass and stops the diamond or sapphire from engraving well. This is why it does not engrave easily on horn, which is polished and fat. But when the polish has been taken off, it is easy to engrave.\n\n",
  id: 52
});
index.addDoc({
  title: "Polishing a copper wheel",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Polishing a copper wheel\n\n  Instead of polishing your stone, it is necessary to remove the grease by rubbing the flesh side of a piece of leather on the wheel, all while spinning the wheel if you have not worked on it in a long time.\n\n",
  id: 53
});
index.addDoc({
  title: "For molding from sulfur",
  author: null,
  layout: "narrative",
  content: "- - - - - 012r - - - - - \n## For molding from sulfur\n\n  Sulfur is made beautiful by mixing in soot black or powdered sanguine, which makes it harder and stronger. After letting it melt entirely until it becomes liquid and similar to oil, then mixing it with verdigris, you can use it for casting a lizard or something else in plaster, very cleanly.\n\n\n  position: left-top\n\n   You must not cast it until it has cooled down and lost all its bubbles and eyes, and its surface has fallen and become flat as water. Soot black gives it a fine luster and makes it neater. Use yellow sulfur of the best kind, as the greyish natural sulfur is no good. Don’t cast it in the wind and cold for it would fill with bubbles.\n\n\n",
  id: 54
});
index.addDoc({
  title: "Paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 012r - - - - - \n##  Paper\n\n   The whitest and thinnest is the best. And when the hollow mold is quite clean, as when it is made of sulfur or baked cimolee, the paper comes out very clean. You can apply a layer or two of white, with a border of gold, to imitate alabaster. And after applying the white you may burnish it with a tooth.  Yet in order for it to take burnish you should soak the lead white with egg white and peelings from the fig tree. Or better still, varnish your work with white varnish. Also while you are molding with paper, as it starts drying, burnish the back of it with the tooth.\n\n",
  id: 55
});
index.addDoc({
  title: "Plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 012r - - - - - \n##  Plaster\n\n   Mountain plaster is greyer, and that from the region of Albi is whiter. It has to be heated over a closed fire, such as a reverberatory furnace or fours de barbiers. The more freshly heated, the better it is to work with. It should be finely crushed on marble. After preparing your hollow mold of sulfur or another [material] and oiling it and surrounding it with a circle, soak your plaster in water, not too thick, and rub it well with your finger, and if it makes bubbles, throw on more powder of the said plaster and crush it with your finger until +\n\n\n  position: left-bottom\n\n   + it makes no more bubbles. Then once more throw and sprinkle plaster powder on top and leave to set well, then scrape the powder off.\n\n\n",
  id: 56
});
index.addDoc({
  title: "Moulding stucco promptly",
  author: null,
  layout: "narrative",
  content: "- - - - - 012v - - - - - \n##  Moulding stucco promptly\n\nCrush and pulverize finely brick or Armenian bole or sanguine and incorporate it with melted wax, and thus melted, cast like the others on a relief medal, and so you will have a hollow mold where you will be able to cast ground paper or cimolee.\n\n\n  position: left-top\n\n  Finely sieved brick is better, since bole is too fat\n\n\n",
  id: 57
});
index.addDoc({
  title: "Cleaning yellow pearls",
  author: null,
  layout: "narrative",
  content: "- - - - - 012v - - - - - \n## Cleaning yellow pearls\n\nGently boil them in a goldsmith’s bouteure then, with tripoly and a small piece of leather, sprinkled on the flesh side with the powder of the said tripoly, rub and polish the pearl.\n\n",
  id: 58
});
index.addDoc({
  title: "To whiten enilanroc",
  author: null,
  layout: "narrative",
  content: "- - - - - 012v - - - - - \n## To whiten enilanroc\n\nSome believe the ceruse—color crust that is on top to be natural. Others say that it is a lost secret of ancient lapidaries. Others say that it is enamel that has been reheated. And, from this crust, one can form multiple ciphers, letters, circles and other bizarre motifs. As to the means, I proceeded thus: I once wanted to add a layer of arsenic ground on marble. However, I did the experiment without it, and I put the above mentioned thing, enilanroc, in a small iron casket on the fire of my goldsmith’s forge with three or four small half—burnt coals and blew on it only with my mouth. However, the thing caught fire and became all white, not only on its surface but also inside. And then I let it cool on its own near the fire, since otherwise, exposing it suddenly to cold air, it would have cracked. While it was all white, I passed it through my lead wheel and I found it to be as hard as it was before. And after scraping off a little of the white, I found it to be of a clear fleshy tone. Finally, I polished it and observed that it took quite a beautiful polish luster and that it could compare with a quite beautiful agate for the purpose of engraving it with some beautiful face and applying it to a table of\n- - - - - 013r - - - - - \nagate of various colors. But because this overall whiteness did not correspond with the white crust on the surface that I was seeking, leaving the rest of the thing its natural color, I made a hole in a brick, precisely the same size as the object, and put it inside. Then I heated two glassmaker’s soldering irons until they became red hot and, when they were red hot, I applied them one after the other onto the surface of the object until I got the white crust I was looking for, on which I made the drawing that I wanted, revealing the red background, with a diamond point, and I polished it with hog bristles and tripoli. I don’t know if it would be better to reheat it under hot ashes, and if it would be good to encase it in alabaster, which is quite cold, as I did in the brick.\n\n",
  id: 59
});
index.addDoc({
  title: "Flesh color with arsenic",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n## Flesh color with arsenic\n\nSublimated arsenic, that is to say, the white kind sold as stone, when powdered on marble, mixed with vermilion or laque or mine, produces a beautiful flesh color that always shines. Yellow arsenic has a very beautiful color, the white one works well in oil and goes well with lake.\n\n",
  id: 60
});
index.addDoc({
  title: "To dye",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n## To dye\n\nMix sal ammoniac and vitriol and boil them together. Then mix in lake or verdigris and azure or similar colors, and dye. This will not come off unless the animal sheds. @Non bona.\n\n",
  id: 61
});
index.addDoc({
  title: "Polishing of stones",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n## Polishing of stones\n\nEngraved stones are not polished on a copper wheel, but with brushes and tripoli. Yet faceted and flat stones are polished on the said wheel.\n\n",
  id: 62
});
index.addDoc({
  title: "Fine sieves of raw silk",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n## Fine sieves of raw silk\n\nTammy of raw silk is made on a weaver, to make very fine and delicate sieves. And for that effect, you must not choose raw silk whitened by sulfur smoke: this covers the silk in a sticky vapor that would hold the flour and in the end would prevent it from\n- - - - - 013v - - - - - \npassing through so well. But for this effect, choose yellow and natural raw silk because it is stronger and rejects flour as horsehair does.\n\n",
  id: 63
});
index.addDoc({
  title: "Candles",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n## Candles\n\nCandlemakers never make good candles when the autan wind blows because they always melt, however good is the tallow they use in them.\n\n",
  id: 64
});
index.addDoc({
  title: "Whitening pearls",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n## Whitening pearls\n\nWhen they have been applied in embroidery on some garment, they are greasy and may be cleaned in soapy water.\n\n",
  id: 65
});
index.addDoc({
  title: "Toadstone",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n## Toadstone\n\nThat which comes from the head of the toad and has the shape of the toad, painted naturally as you have seen, is the most excellent. It is said that if powder made from it is put on a brazier in someone’s room at night, they will be unable to move, speak, or stop thieves.\n\n",
  id: 66
});
index.addDoc({
  title: "Snakes",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n## Snakes\n\nIt is said that if one calls a snake in Greek, saying ΟΦΗ ΟΦΗ, it will flee. Similarly, that if one calls a swine in Greek, ïon, it will come.\n\n",
  id: 67
});
index.addDoc({
  title: "For earth walls and rustic construction",
  author: null,
  layout: "narrative",
  content: "- - - - - 0114r - - - - - \n## For earth walls and rustic construction\n\nSwallows have taught us this craft by building their nests out of mud mingled with wisps and bits of hay or straw to make it bond. Therefore, in places where stones and bricks are lacking, one can use earth to make walls thin and thick. The best for this is light earth, which does not form clumps when plowed, or better, that which in some way mingled with arene, because it can be most easily beaten and tamped down. It is true that it needs to be dampened and cut into clumps with a ditch—spade, and put and placed in this form. This one lasts more and does not require that much effort, and dryness doesn’t make it split or crack. However, since such kinds of earth are not found everywhere, those who live on good and fertile land, after drawing the width and length of their foundations with a rope, drive in long poles and rafters along the edges on each side to support boards between which they throw the earth, making each layer about one foot thick, interspersed with S.S.S—shaped branches of heather or similar things, then they tamp it down and beat it with beaters of three different forms. One is called the mall, which has a triangular form like A, and this is used firstly to tamp down the earth. Then one uses another made of pointed woodblocks fitted onto a thick stick, and this one is used to properly press the earth at the wall’s ends and edges where they adhere to the boards, and is called [blank]. The other one is called the bat and is used to flatten and beat the earth for the last time, as shown in C. Then one makes another layer of earth and heather and beats as has been said, and continues thus until completing the wall, which is covered with heather and then with earth. Some intersperse the said wall with rows of bricks. They also make walls with a sloped foot, adding width to the foundations according to how high they want to build the wall. When it is old it whitens, showing that it has saltpeter in it. Which is why, when they fall down, gunpowder makers profit from them.\n \n",
  id: 68
});
index.addDoc({
  title: "Damask Cloth",
  author: null,
  layout: "narrative",
  content: "- - - - - 015r - - - - - \n## Damask Cloth\n\nYou can make damask cloth of two different colours and imitate embroidery without adding anything else to it, as follows. Once it is is dyed yellow, pounce onto it such a pattern as will please you. Then you will sew some string or a bigger cord loosely onto the pattern and throw it into a dye of woad or pastel and it will become green, except that which is beneath the string, which will remain yellow because the green dye will not have penetrated there. And you can do the same with other colours and, instead of string or cord, add some pieces of poor quality cloth cut in Moorish shapes on top of the first colour. In that manner, you will have cheap embroidery.\n\n\n  position: left-middle\n\n  + by the heat of molten metal\n\n\n",
  id: 69
});
index.addDoc({
  title: "Casting metals",
  author: null,
  layout: "narrative",
  content: "- - - - - 015r - - - - - \n## Casting metals\n\nCandlesticks and small works are cast in a frame with sand. Having stamped the work, sprinkle it with flour in order to make the copper or latten run better. When the sand has been in use for one month, it is necessary to take some new sand because that which has been used, being reheated +, dries &amp; loses its binding power. Yet it is used mixed with the new sand, because it makes the work less porous. Large works such as artillery, bells and similar things are cast in earth, and copper cast in earth makes less crust and is whiter than when cast in sand. The earth is sandy clay mixed with horse dung and cloth waste. The earth that has been used for casting, which is black, baked and as if burnt, is mixed with artificial sand, and is very good. For softening and making the copper run, once it is melted, one throws in some lead, which does not form an alloy but is found on the surface of the cast.\n\n",
  id: 70
});
index.addDoc({
  title: "Casting gold and silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 015r - - - - - \n## Casting gold and silver\n\nThe sand must be made from something very dry and arid and reheated well because, if it were humid, like founder’s sand, the gold and silver would leap out of the mold and sustain damage. It is also necessary for the earth to absorb the metal because cast gold or silver become very porous. That is why it must be beaten out again, otherwise it is brittle, as seen in spoon handles.\n\n",
  id: 71
});
index.addDoc({
  title: "Ears",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n## Ears\n\nWhen a defluxion occurs in the ear, be very careful not to put anything in it, and following the proverb, ears and eyes should only be touched with your elbow. However, to an affected ear, it is good to apply musky cotton, that is to say, cotton kept in musk, which comforts quite well.\n\n",
  id: 72
});
index.addDoc({
  title: "Making letters easier to read",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n## Making letters easier to read\n\nOne cuts the largest pieces of beryl or crystal round on one side and flat on the other, then one fits it with a little handle and puts the flat side on the letter\n\n",
  id: 73
});
index.addDoc({
  title: "Stamping",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n## Stamping\n\nIf you have a bronze medal and you want to make it very light, make a lead cavity, then spread upon it a thin plate of gold, or sheets of lead or reheated silver, place your bronze medal on top and hammer it with a wood mallet.\n\n",
  id: 74
});
index.addDoc({
  title: "Softening horn",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n## Softening horn\n\nThose who mount acou Agnus Deis and make circles from horn for certain little boxes soften the said circles by soaking them in hot water and then shape them on a round or oval—shaped triblet.\n\n",
  id: 75
});
index.addDoc({
  title: "Toothache",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n## Toothache\n\nSome put a clove of garlic in the ear on the side of the aching tooth, and after two or three hours they feel better. Others put in their nostril, on the same side as the tooth that hurts, some green skin scraped from the stem of bisaube, namely that which is under the grey one that looks like a vine.\n\n",
  id: 76
});
index.addDoc({
  title: "Black color for dyeing",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n## Black color for dyeing\n\nTake lye made from quicklime and white lead, mix and leave to soak and you will have a dark brown dye, and reiterating the same you will make black. Try other colours with the lye made of lime.\n\n",
  id: 77
});
index.addDoc({
  title: "Against nose bleeding and for dyeing",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n## Against nose bleeding and for dyeing\n\nPound some of the kind of vinete or lapathum acutum that is red—veined, which is called dragon’s blood, and apply it on the bleeding person’s forehead. This herb is a strong dye &amp; makes beautiful violet.\n\n",
  id: 78
});
index.addDoc({
  title: "Beautiful artichokes",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n## Beautiful artichokes\n\nYou need to trim them every year so that only one stem is left, and water them a lot. Also plant some more every year, because the second year they will bear very beautiful fruits.\n\n",
  id: 79
});
index.addDoc({
  title: "Planting trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n## Planting trees\n\nIt is said that rarely a tree planted on Saint Paul’s day will fail to take. To cover the young shoots, oxen manure is very appropriate, for it doesn’t come apart in the rain like earth.\n\n",
  id: 80
});
index.addDoc({
  title: "Merchants",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n## Merchants\n\nThose who retail velvet and other materials do not keep double—entry books because they sell in small quantities and recording these details would be too much effort. They only have their sales book and account books. But those who sell in bulk and those who traffic in woad have a double—entry book.\n\n",
  id: 81
});
index.addDoc({
  title: "Goldsmith",
  author: null,
  layout: "narrative",
  content: "- - - - - 039r - - - - - \n## Goldsmith\n\nThey bind silver filings with saltpeter which refines it &amp; does not make it brittle. But gold filings are bound with borax or, to save the borax, with lead, which refines the gold &amp; softens it, for the saltpeter would make it brittle, which it does not do to silver. This is why, in order to save, goldsmiths use it to bind it in order to save borax, which costs viii sols per ounce &amp; saltpeter costs x sols per lb. When goldsmiths have thus bound their silver filings with salpeter, a red enamel vitrifies at the bottom of the crucible. I do not know if the copper mixed in with the silver is the cause for this. Try for enamel.\n\n",
  id: 82
});
index.addDoc({
  title: "Dyers’ woad",
  author: null,
  layout: "narrative",
  content: "- - - - - 039r - - - - - \n## Dyers’ woad\n\nIt is grown in Lauragais where the deep soil is so fertile that every year wheat was grown there, it would lie flat for being too vigorous. This is why dyers’ woad and wheat are grown there alternately. For cultivating dyers’ woad, the soil is ploughed with iron shovels, as gardeners do. Next, it is harrowed with rakes, &amp; broken up finely as for sowing some kitchen herbs. It is commonly sown on Saint Anthony’s day in January. Eight harvests are made. The first ones are better. The best dyers’ woad of Lauragais is the one from Carmail &amp; the one from Auragne. And sometimes the dyers’ woad is good in one field &amp; in the one close by it will hardly have worth. The goodness of the dyers’ woad can be recognized when put in the mouth it gives the taste of vinegar, or when crumbling &amp; breaking it, it has some mold—like veins which are as it were golden or silver. It is assayed in the dyers’ vat, and to fill a vat with it, six bales of it are needed. There several flocks of wool are dyed, and if it dyes fifteen times, it is said to be worth 15 florins, if it gives xx dyings, xx florins. The good kind dyes up to 30 times &amp; commonly up to xxv or 26.\n\n",
  id: 83
});
index.addDoc({
  title: "Enamel",
  author: null,
  layout: "narrative",
  content: "- - - - - 039v - - - - - \n## Enamel\n\nEnamel takes more readily on copper than on silver. It is true that the cut needs to be well hollowed out &amp; rough. Azure in body &amp; the red called gules, white enamel &amp; thick green take very well. Having enamelled, one gilds the feuillages of the cutting[illegible]. Copper has a similar hardness when cut as pure silver or pistolet gold.\n\n",
  id: 84
});
index.addDoc({
  title: "Colors for illumination on glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 039v - - - - - \n## Colors for illumination on glass\n\nIn order that your turpentine colors shall not run, &amp; become unified, mix in a little larme de mastic together with the turpentine.\n\n",
  id: 85
});
index.addDoc({
  title: "Tracing a history on glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 039v - - - - - \n## Tracing a history on glass\n\nIf you want to trace a history in intaglio on glass, you can do so in different ways. Place your glass pane on, as thin as possible, over the printed history, &amp; having cleaned the glass well with lye &amp; ashes so that it is not at all greasy, trace over the lines visible to you with oily black or scales black with a pinceau, if you want to paint with colors in the manner of glaziers, who spread a wash of scales black all over their glass pane &amp; then scratch &amp; uncover what they want to coat with color, leaving that which is necessary for shading. But if you want to make gilt histories on glass with a background of colors, which imitates the basse—taille of goldsmiths, gild the whole glass pane with gum water or garlic juice or fig—tree milk. Then moisten your printed history with two wet linen cloths &amp; lay it down on the gilt glass. Then with a pin mounted on a small stick, follow the lines of your history as if you wished to pounce it, &amp; thus you shall vividly trace it on the gilding of the glass. &amp; next you shall uncover the background &amp; what needs to be empty with a quite pointy steel awl, &amp; and neatly follow once more the lines &amp; accomplish your work &amp; fashion your faces &amp; flesh tones in pounded silver; then fill the background with azur d’esmail or verdigris or fine laque platte, tempered with clear turpentine, mixed with a little larme de mastic if you want the colors to be more unified &amp; not to run. Next, apply on the back of the glass &amp; over the colors a white tin sheet. And once this is dry, you can cover the tin sheet of with color to hide your secret. The tin sheet gives light to the colors. Thus you will be able to paint without being\n- - - - - 040r - - - - - \nbeing at all expert in painting. If your glass pane is bulging as if taken from the belly of a jar, it will show better. When you apply your turpentine colors to your glass panes, first place them on a hot tile &amp;, once they are hot, spread your colors &amp; leave it a while on the tile, then lay down your tin sheet.\n\n",
  id: 86
});
index.addDoc({
  title: "Aqua fortis",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n## Aqua fortis\n\nSome put on for four pounds of aqua fortis matter four that is in the retort, four ounces of common water in the container, which is better than putting it into the retort. The alum is de—phlegmed &amp; calcined such that the water does not have as many dregs. Many make it without de—phlegming the alum.\n\n",
  id: 87
});
index.addDoc({
  title: "Vinegar",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n## Vinegar\n\nOne takes for granted that jec heat red—hot the mineral salt that looks like marble &amp; that is called in Catalonia &amp; at the border of Spain Cardona salt, &amp; throwing it in the red hot or quite hot in wine, it turns it into very good vinegar. Some make it with water poured on pomace soured after being pressed by grape pickers, but it will not keep &amp; spoils in heat &amp; thunder storms.\n\n",
  id: 88
});
index.addDoc({
  title: "Silver gilt buttons",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n## Silver gilt buttons\n\nBecause silver gilt does not fear fire, it is cut into lozenges flat[illegible] on one side, then they are joined together in a star shape with a paste of crushed enamel, which is then melted &amp; the enamel is gilt with gold leaf and then reheated.\n\n",
  id: 89
});
index.addDoc({
  title: "Grottos",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n## Grottos\n\nTo fill some empty place that cannot be laden with hanging rocks, one puts a piece of thick parchment close to the fire, which shrinks &amp; crumples. Then one paints it with distemper, then in oil. Next one affixes it.\n\n",
  id: 90
});
index.addDoc({
  title: "Latten and calamine",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n## Latten and calamine\n\nFounders do not melt latten in a bellow furnace but in crucibles, for in a bellow furnace and amid the charcoals, the calamine would disappear.\n\n",
  id: 91
});
index.addDoc({
  title: "Metal",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n## Metal\n\nTin needs to be pure because if there is any lead, it will go up in smoke whilst melting. Alloyed tin withstands fire for a long time but in ashes it will come apart.\n\n",
  id: 92
});
index.addDoc({
  title: "Aqua fortis",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n## Aqua fortis\n\nIf your retort is well luted you should not surround it with ashes, which would only prevent the vapors from escaping properly. But when, towards the end, you fire it intensely, surround it with charcoals lit elsewhere beforehand, such as those in the furnace should be, so they do not crackle or smoke. Place said lit charcoals around the body of the retort, not close to the neck, which does not need to be heated as much. The top grate, on which you place your retort, should be sufficiently far, one dour or half a foot, from the bottom grate where the charcoal is placed, since thus you will not waste as much aqua fortis.\n\n",
  id: 93
});
index.addDoc({
  title: "Cross of the commanders of Malta",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n## Cross of the commanders of Malta\n\nThe fine rouge clair which is the background of the white enamel cross is of fine dragon’s blood drops soaked with eau de vie or Indian laque plate, which I believe is made in Flanders, distempered with clear turpentine and mastic drops and applied on a silver leaf, not the one used by painters but a thicker one, which is burnished by the makers of foil backings for gemstones or by goldsmiths, and that gives it its fine brilliance.\n\n",
  id: 94
});
index.addDoc({
  title: "Garden lily",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n## Garden lily\n\nIf it is broken during its first blossom, it will not grow or bloom until the following year, and I believe it is the same for bulbous flowers [in general].\n\n",
  id: 95
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n## Sand\n\nThe sand to be used for casting should be chosen such that it is not too dry for it won’t hold together, nor should it be too fat. And although you find some in nature, however, it is not everywhere. And if you are in a place where it is not found, you can put it together yourself but not from fat earth, because the sand should contain none at all, since it makes it porous. But you can make it bind by mixing it with brick well ground on marble, or plaster or calcinated alabaster or something similar, or the burned marrow of ox horn or burned asphalt. If you grind it quite finely on porphyry, it binds better &amp; then you can burn it with asphalt or mix it with a quarter of tripoli. Make sure no bread falls into your sand because this makes it porous.\n\n\n  position: left-middle\n\n  Try mixing in soot black.\n\n\n",
  id: 96
});
index.addDoc({
  title: "Ducks",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n## Ducks\n\nYoung domestic ones do not grow for a month after hatching but remain in this state. But after, they soon grow up, even if they go into the water. They are fed boiled millet grains, to which are added crumbled bread and finely chopped lettuce.\n\n",
  id: 97
});
index.addDoc({
  title: "Casting earth for founders",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n## Casting earth for founders\n\nIt becomes fat by being beaten and also mixed with horse manure. Potter’s earth would be too soft and would break and wouldn’t resist the fire. But [your soil] has to be mixed with one half of sand and a quarter or a fifth of horse manure. And leave it to dry, then reduce it to powder, then put it through a sieve to make it fine and free from gravel, which would prevent it from casting cleanly. The manure makes the earth more amenable [to casting] &amp; easier to work with, but it should be free of straw and other things. And when the earth is very fat, you have to add more sand and more manure. But one does find fat varieties of earth [that are] naturally mixed with sand. If they are not, make them so artificially. One should always cook the soils again before casting.\n\n",
  id: 98
});
index.addDoc({
  title: "Glassmaker's black",
  author: null,
  layout: "narrative",
  content: "- - - - - 041v - - - - - \n## Glassmaker’s black\n\nFilings of iron taken from bars that have been in the fire for a long time, which are thick, are much better than the common soft ones that fall under the anvil in the forge, because they imitate niello. To said black, described elsewhere, some people add a little minium.\n\n",
  id: 99
});
index.addDoc({
  title: "Sheared ewes",
  author: null,
  layout: "narrative",
  content: "- - - - - 041v - - - - - \n## Sheared ewes\n\nIf the shearer wounds them at some point, he applies the very excrement of the ewe on it. When they are fat, they are easier to shear and do not get hurt as easily.\n\n\n  position: left-middle\n\n  If the shearer wants to ‘viscorter’ them, that is to castrate them as [they] are one or two years old, he must not have been with his wife, because this would cause the sheep to die.\n\n\n",
  id: 100
});
index.addDoc({
  title: "Colors and gilt on glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 041v - - - - - \n## Colors and gilt on glass\n\nYou should not put as strong gummed water on glass for the silver layer as for the gold layer because a silver leaf is twice as strong as gold leaf. Also, silver is harder and therefore does not scratch as easily. And if gum was not a little [too] strong for silver, it would not crack so clearly. When you work, the exhalation of your breath humidifies the leaf lying on the glass, and therefore it would be good, when working, to heat it up a few times. You have to very thoroughly wash what you want to be empty and used as a surface painted with colors, because if it is not really clean of the gum’s grease and viscosity, and of other things, the colors will not be so clear on it. To advance your work you can smooth with a pumice stone, or [you can do this] to better lay down gum and leaf on a cut paper. This way, you will have to do very little repairs. If you want a gold color there without gold, mix soaked dried saffron with a little bit of massicot.\n\n",
  id: 101
});
index.addDoc({
  title: "Founder",
  author: null,
  layout: "narrative",
  content: "- - - - - 042r - - - - - \n## Founder\n\nThe clay mould should be baked until sometimes it becomes red hot, since otherwise the metal would be unstable and be no good at all. Similarly, the inner core must be baked very hard, and mixed with charcoal powder.\n\n",
  id: 102
});
index.addDoc({
  title: "Wax for seals and impressions",
  author: null,
  layout: "narrative",
  content: "- - - - - 042r - - - - - \n## Wax for seals and impressions\n\nFor large wax seals, you should always have tepid water handy, and keep your wax in it. Yet previously you should have kneaded it with your hands, so as to make it very smooth and even, for otherwise the water would penetrate the wax and prevent it from holding together. Afterwards, you can imprint whatever you want. Cover the wax in three or four sheets of paper, and, with a round and smooth stick similar to a pestle, roll it out as if to polish it. It will then stick to the paper, helping you to take it off from the seal. In this way you will imprint better than if you were dripping molten wax. You can carve figures and color them in gold, in silver, or paint them with couleurs à vernis, and transfer them onto a glass pane painted with couleurs à tourmentine &amp; mastic. And if you want to apply these designs by inlaying, use gum ammoniacum mixed with vinegar, and it will stick well.\n\n",
  id: 103
});
index.addDoc({
  title: "Casting in plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 042r - - - - - \n## Casting in plaster\n\nMelt some wax, and with a big brush coat it over the relief of which you want to have the cave, as if you wanted to paint it. And a light crust will be formed upon which you will cast plaster, to give it shape and consistency. Afterwards, in the cave of the wax, cast your plaster as well to get the relief, and it will come out very easily, because of the wax. This is done more often for large pieces in haut relief than for others.\n\n",
  id: 104
});
index.addDoc({
  title: "Pounce for scratching satin",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## Pounce for scratching satin\n\nAfter pouncing with crushed flour or chalk, in order that the dots of the pounce not be erased, go over the trace with egg white beaten with the milk or bark of a fig tree, which will immediately make the egg white clear up like water, without becoming opaque, it will maintain the trace that you will go over again and scratch with a piece of glass or penknife.\n\n",
  id: 105
});
index.addDoc({
  title: "Canvas for oil painting without breaking",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## Canvas for oil painting without breaking\n\nIn order that your oil painting be not broken or ruined as you bend it, make your (preparatory) layer with honey, a bit of oil, water, and flour.\n\n",
  id: 106
});
index.addDoc({
  title: "Oil painting on taffeta",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## Oil painting on taffeta\n\nIn order that the oil not run, make your first layer with honey, water of alum, and essence of amidin.\n\n",
  id: 107
});
index.addDoc({
  title: "Casting sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## Casting sand\n\nThe key is to grind it well upon marble, and that it be extremely fine; mix in a bit of calcined alabaster.\n\n",
  id: 108
});
index.addDoc({
  title: "For decorating a painting",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## For decorating a painting\n\nGo over the lines with lacquer ground together with olive oil, which will not dry out.\n\n",
  id: 109
});
index.addDoc({
  title: "White varnish on plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## White varnish on plaster\n\nPut down two or three layers of white glue for painting. Afterwards, varnish with varnish of sandarac, aspic oil, and a bit of mastic. Put it into a vessel at night, everything ground well together without fire, which would make it turn yellow. Then, with a paintbrush, it becomes dry immediately. Filter the oil that will have absorbed the substance.\n\n",
  id: 110
});
index.addDoc({
  title: "Mericoton and pavis",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n## Mericoton and pavis\n\nOne should graft them before Christmas so that they will not freeze too much.\n\n",
  id: 111
});
index.addDoc({
  title: "White bronzing on plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n## White bronzing on plaster\n\nOne must apply four layers of painters’ distemper glue onto the plaster portrait, leaving one layer to dry at a time. Then apply gently some burnt English point ground on a marble slab, or some lead burnt, ground and distempered with a bit of gum or glue. When dry, rub gently with a little cotton and the plaster portrait will look like lead. Others grind minium with quicksilver.\n\n",
  id: 112
});
index.addDoc({
  title: "Purpurine",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n## Purpurine\n\nTake half an ounce of soft tin, melt it in a spoon. Once it is melted, throw in an ℥ of ☿, mix together. Once they are cold, grind on a porphyry slab. Then take an ℥ of sal ammoniac and an ℥ of the yellowest sulfur that may be found, grind both. And then mix very well all the aforementioned materials. Then put all together into a glass sublimatorium. Hold this over a small fire for an hour, and for an hour over a stronger fire, and for an hour over a very strong fire, and it will be ready. Then, to use it, apply resin black with the glue used by painters to paint, two or three times, until it is quite black. Then apply a bit of varnish. Once it is dry, apply the purpurine dry with a finger where you want. The more you apply, the finer it will look. Then, if you like, you can apply varnish on top.\n\n",
  id: 113
});
index.addDoc({
  title: "White bronzing",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n## White bronzing\n\nApply some black with glue on the medal, as described above, and then varnish it. Once dry, rub it with English point using a brush or your finger. The said rubbed point embellishes lead medals.\n\n",
  id: 114
});
index.addDoc({
  title: "Varied and transmuted wine",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n## Varied and transmuted wine\n\nGrate Brazilwood very fine, let it soak for one or two hours in clear water. Then take this tinted water and add some clear water and you will make wine as clear as you like. If you please, put a drop of juice of lemon or of orange in it and it will immediately become white. You can drink it without danger.\n\n",
  id: 115
});
index.addDoc({
  title: "Pearls",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n## Pearls\n\nIt is said that pulverised talc blown into a lamp makes them so.\n\n",
  id: 116
});
index.addDoc({
  title: "Arquebusier",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n## Arquebusier\n\nTo shoot your arquebus precisely the end of the breech must come precisely on the edge of the light, because like this the powder catches [fire] and burns all at once without blowing and has more strength and does not recoil. On the contrary, if the breech is made hollow, as they commonly are, the powder catches more quickly in this place, makes it recoil, and blows. This is clearly shown [by] a arquebus with a chamber which recoils more than another. And since the cannon is bigger at the breech than at the muzzle the sights are also uneven, because that at the breech is higher than that at the muzzle. Additionally, the thickness of the cannon is greater than the caliber by about one line, and the sight by another. It would therefore be necessary to either make the cannon all of one size or to raise the barrel from the end and towards the muzzle, and push it in and lower towards the breech. The weight of the powder must be one third of the [weight of the] bullet.\n\n",
  id: 117
});
index.addDoc({
  title: "Hail shot for the arquebus",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n## Hail shot for the arquebus\n\nIf you want that it stays together put a piece of felt or leather or paper on it, depending on the distance, and let the piece be made with a form precisely cut depending on the caliber of the arquebus.\n\n",
  id: 118
});
index.addDoc({
  title: "The reach of an arquebuse",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## The reach of an arquebuse\n\nThe proportion of a fowling piece is: 4 king’s feet long and the bullet weights xviii pennyweights, the expulsion vi pennyweight of powder, its range iiii—by—xx pans and 3 and a half feet and two thumbs and around a line, which is the Paris aulne. The medium arquebuse, which is the usual one and the easiest, admits xv pennyweight of bullet, v pennyweight of powder &amp; reaches lx paces.\n\n",
  id: 119
});
index.addDoc({
  title: "Pewtermaker",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## Pewtermaker\n\nThey mix viii or ten pounds of lead for each hundredweight of tin in the cities that have regulated guilds. But elsewhere, they add as much as they can. One also uses ii. lb. of estaim de glace to bind it and three lb. of broken brass, that is, copper scrap that kettlemakers make. This makes the vessel more reverberant and it is not as breakable.\n\nThis pewter is called ordinary pewter.\n\n",
  id: 120
});
index.addDoc({
  title: "Arquebuse",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## Arquebuse\n\nTo keep it from backfiring, clean your arquebuse every eight days, and rub it with oil, and when you draw out, wet some linen in oil &amp; put it in instead of paper.\n\n",
  id: 121
});
index.addDoc({
  title: "Lacquer",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## Lacquer\n\nTo test it, soak it and apply it to paper, and if one or two hours later it has not died at all, it’s fine and well—done.\n\n",
  id: 122
});
index.addDoc({
  title: "Dyes from flowers",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## Dyes from flowers\n\nRed poppies that grow amongst wheat make a very beautiful columbine on white leather. The boufain makes a very beautiful blue. An herb which grows in hedges, which has a stem similar to flax, long and broad leaves like little bugloss, which has a violet flower verging on blue and looks like the fleur de lys, makes a quite beautiful turquin, better than azure. Another columbine flower of the shape and size of the bugloss flower, which has a leaf like that of the pansy, also makes a very beautiful turquin. It grows in wheat in light earth.\n\n",
  id: 123
});
index.addDoc({
  title: "Horsehair sieves",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n## Horsehair sieves\n\nThey are made often in Normandy with horsetail hairy that they clean with some washing water because they pick them out with their mouth and separate short and broken ones. They do not make the thread longer than the sieve and it is round. They attach the black or white hair at the two edges of the thread, according to the piece they want to make. And the thread is woven above and below like any other fabric. And passing a small flat stick of ii or three fingers wide between two, they pass between after two bits of hair at each step strike and weave with three steps. The entire sieve is made of xvii bits of hair. They sell them by dozens and each xxx sols. They bring them to Toulouse to send them then to Spain and there, they exchange it with silk.\n\n",
  id: 124
});
index.addDoc({
  title: "Excellent water against the pest by the Master of Montorsin",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n## Excellent water against the pest by the Master of Montorsin\n\nTake some theriac rue, dittany and good vinegar, put the whole in a glass bottle and leave it half—open and well attached. And put it in a bath for three or 4 days. Then take some of your brew from its container when you need it and pour some, when necessary, on a red hot tile and receive the vapor and also perfume your clothes. This is a very precious and proved secret.\n\n",
  id: 125
});
index.addDoc({
  title: "White soporific oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n## White soporific oil\n\nHave x or 12 Mandragore apples, put them in quarters together with some olive oil in a glass bottle which you will cook in a bain marie for two days and your oil will turn white with which you rub the sole of your feet and you will quickly feel sleepy.\n\n",
  id: 126
});
index.addDoc({
  title: "Stucco",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n## Stucco\n\nTo stick stones, some do not use gem and pitch black rosin because it is too greasy, but they use as much rosin and sulphur and the same quantity of wax and then add finely ground brick. Others some white chalk and crushed and powdered and sieved white stone.\n\n",
  id: 127
});
index.addDoc({
  title: "Loading a pellet arquebus",
  author: null,
  layout: "narrative",
  content: "- - - - - 045r - - - - - \n## Loading a pellet arquebus\n\n \nIt is necessary to make a wooden pipe 4 or 5 fingers wide that is perfectly hollow, according to the open end of your barrel, of the form represented in A. Then, having cut some paper, which has to be as strong as that of large printed books, in the form indicated in D and as wide as you want your cartridge to be long, wrap the paper around the baton B and at the top, where the pointed tip F will be around the aforementioned paper, and the cartridge will be formed. But, in order to make the bottom more uniform, put it into pipe A, then introduce baton B and, in the other end of the pipe, which is marked G, insert baton C and pack so as to compact and press the folded tip of your cartridge, then take it out, and the charge in this, put three or four drageons or larmes. Then, with a punch, marked E, of the same caliber of your arquebus or pistol, punch round pieces on cardboard or felt or waxed cloth, and put this round piece into your cartridge, and push it until the drageons with the baton B, the more drageons, 3 or 4, then a round piece. And continue like that until the cartridge is full, the put it into the arquebus. If you want your pellet to scatter earlier, make round pieces out of paper. If you want it to reach further without scattering, make the piece out of cardboard. If you want it to reach even further, make the round piece out of waxed cloth, or either of leather or felt, and a piece of waxed cloth on the top. And if you make the cartridge in part with waxed cloth or waxed paper, it will reach one hundred paces and will make a big hole, and the pellet, barely scattering, will produce a big opening. But if you make your cartridge with waxed cloth or a material stronger than paper, it cannot be so long, with the cardboard tip being like in D, because it is enough if it wrapped around twice. In such a way, the pellet barely scatters and makes a big hole in porte—corps armor or others.\n\n",
  id: 128
});
index.addDoc({
  title: "Loading an arquebus",
  author: null,
  layout: "narrative",
  content: "- - - - - 045v - - - - - \n## Loading an arquebus\n\nYou must have different charges depending to the range that you want your arquebus to have, all of which have a screw on the end that fits in the nut of the the said arquebus’ ramrod. So when you put the powder in the charge, which is in the nut, hold the ramrod upright. And raising your arquebus up, insert the said ramrod until the charge is in the bottom of the arquebus, then straighten the arquebus, the mouth of the barrel up, and remove the ramrod. That way, your powder will now be entirely in the breech without any grain or dust that lines the sides of the arquebus, which always has some grime in the chamber. That way it will not recoil, and you will shoot more true.\n\n",
  id: 129
});
index.addDoc({
  title: "How to adjust a bent gun barrel",
  author: null,
  layout: "narrative",
  content: "- - - - - 045v - - - - - \n## How to adjust a bent gun barrel\n\nTake off the breech and put it [the barrel] on a well—leveled table set perpendicular to the floor, and insert a very smooth string without knots, on each end of which there is a plumb hanging from each side. Then look in the barrel along the string, and if it does not touch equally all over, note the place where it does not touch and hit it with a hammer on the exterior of this this side in the same place, and this will make it straight. Do this all around it.\n\n",
  id: 130
});
index.addDoc({
  title: "Birds",
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n## Birds\n\n\n  position: right-top\n\n  Calandra larks and all birds taken from the nest and which have not known freedom are better, because those taken with a net never sing as well. However, wild birds give much pleasure with their chanting, but they must be taken before Michaelmas, otherwise they do not live long. All get a small impostume on the fork of their tail, sometimes, which some call “gaillardise”, which makes them sick and sometimes kills them, especially calandra larks. One can tell when they are sad and do not sing. It must be pierced, not with a pin, but very delicately by turning with the tip of a quite sharp feather. The calandra lark should not be without river sand, and grey sand, a little rough, is the best. It rubs itself against it and purges itself [with it].\n\n\n",
  id: 131
});
index.addDoc({
  title: "Grain of lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n## Grain of lead\n\n\n  position: middle\n\n  Take a playing card, pierced with a pin or needle, folded over on all four sides. Hold it with the end of a small split stick and, holding said stick by the other end, put your card three or 4 fingers away from the water that you will have put in a platter or a similar vessel. Then pour your lead, which should not be too hot, into the card and continually tap on the stick that holds it. And thus your lead will turn into round grains. And pass it through a large sieve to separate the larger grain from the smaller. The larger one will carry 25 to 30 paces.\n\n\n",
  id: 132
});
index.addDoc({
  title: "Birds",
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n## Birds\n\n\n  position: bottom\n\n  Those that are caught at Michaelmas are good to keep, but those that are caught in March die, because they are starting to fall in love. Ortolans are fed oats all summer so that they eat without getting fat, to be more suitable for hunting and helping to catch others. Then, when one wants to fatten them to sell, one gives them millet. They sing at night. They must be caught after mid—July and before Michaelmas, because after the period when they have their young in this country, they leave as turtledoves do. Siskins should also be caught after All Saints’ Day and before Christmas, because afterwards they leave for the mountains to brood.\n\n\n",
  id: 133
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n\n  position: left-bottom\n\n  Ortolans are ventriloquists, so that, singing without opening their beaks, they seem to be…\n\n\n",
  id: 134
});
index.addDoc({
  title: "Preserving fruit for the entire year",
  author: null,
  layout: "narrative",
  content: "- - - - - 050r - - - - - \n## Preserving fruit for the entire year\n\n\n  position: top\n\n  Take a rounded glass phial, with a large enough opening to receive cherries and plums and whatever fruit you want. Put in some hot water and leave it for two hours, and once your water is cold, throw it out and turn the phial upside down onto its opening on a perfectly even table and in a room where there is not a bit of draft or wind. Then prepare a stopper of fresh wax, wrapped in oilcloth, and adapt it precisely to the glass phial so that it will be ready to stop it once you have put in the fruit. And once you have hand—picked the fruit, only the non—rotten fruit, and on a warm and dry day, withdraw to the room, well closed so that no wind or draft can get in, and put it gently and deftly in the bottle. Then stop the bottle well with the stopper and lute it, making your lute, if you want, with some quicklime and oil, so that no water gets in. Then put your bottles into a tub full of water, in a cellar, during the summer, and in the winter put your bottles into a basket filled with some weights and lower it to the bottom of a deep well. Because in the winter the water in the tub would be too cold if your cellar is not warm enough, because the water needs to be like river water.\n\n\n",
  id: 135
});
index.addDoc({
  title: "Molding",
  author: null,
  layout: "narrative",
  content: "- - - - - 050r - - - - - \n## Molding\n\n\n  position: top\n\n  If you want to quickly mold in demi—relief anything you come upon, fold some paper five or six times over, and place it on the medal and make sure the paper is folded around the edges of the medal so it is very secure. Next take a stick, broad at one end and with a well—dulled point at the other, and rub firmly on the paper, and retrace the lines with the point of the stick until you reckon that your impression is well done. Then, at your convenience, rub oil onto the paper lightly with a brush, and cast some tallow or wax or sulphur into it. And the paper, without burning, will give you a neat design that you can then mold in plaster or tripoli and then in lead and other metals.\n\n\n",
  id: 136
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 050r - - - - - \n\n  position: left-bottom\n\n  Polished cardboard of little thickness and slightly humid is appropriate. Then if you want, strengthen it with some paper glued on the reverse side.\n\n\n",
  id: 137
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 050v - - - - - \n\n  position: left-bottom\n\n  Steel is applied to tools not on both sides, but underneath the part where one sharpens and whets them, and this part must be made of very soft iron.\n\n\n\n  position: left-bottom\n\n  Levantines refine our own steel because their country provides them with none, and they reheat it in a pot with bitumen etc.\n\n\n",
  id: 138
});
index.addDoc({
  title: "Skin colors",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n## Skin colors\n\nIt is necessary that you make it of two kinds, one more red to make the main layer, the other more pale for the highlights, as around the eyes. And then on this last skin color, you will touch lightly the main lights with a little white lead. But avoid applying too much of it because this will look like a face of death. The beautiful Florence lacquer makes a beautiful vivid skin color that resembles the complexion of alexandrine pink and incarnadine\n. \n&gt; position: left-top\n&gt; \n&gt;  Certain colors need to be ground like minium or massicot. The ashes don’t need to be ground at all.\n\n",
  id: 139
});
index.addDoc({
  title: "Making things round",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n## Making things round\n\nIf you want to model well, soften round things by rounding them off with the brush point and the rest with a flat part if it is flat, and thus for the others according to their nature, and lightly with the dry and flattened brush point and with patience.\n.\n",
  id: 140
});
index.addDoc({
  title: "White lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n## White lead\n\nWithout this, you can’t work on a small scale for which it is necessary to soften with great care. But you can’t do it with ceruse because it does not have enough body.\n.\n",
  id: 141
});
index.addDoc({
  title: "Lights",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n## Lights\n\nYour brush shows it to you by making some shadow which must always follow the back of your hand, not in a straight line like this,  because the light would be too crude and too harsh, but obliquely and as an incline like this.  It is necessary that the painting is not facing the light, but be half turned back against it, and above all look for a soft light, for it makes a soft shadow and soft work, like a harsh light makes a harsh work.\n\n\n  position: bottom\n\n\n\n",
  id: 142
});
index.addDoc({
  title: "To bronze in white",
  author: null,
  layout: "narrative",
  content: "- - - - - 074r - - - - - \n## To bronze in white\n\nTake looking—glass tin and put it to soak in gum water, and pound it in a pestle. And afterwards, you will put it on the marble.\n\n",
  id: 143
});
index.addDoc({
  title: "To make vermillion",
  author: null,
  layout: "narrative",
  content: "- - - - - 074r - - - - - \n## To make vermillion\n\nTake two pounds of sulphur, and melt it, and add two pounds of mercury to it. And if this material ignites, cover it quite neatly, so that the air does not pass into the pot, then put everything for some time after into a leaded pot, into the fire. In the space of twenty—four hours, you will have good vermillion.\n\n",
  id: 144
});
index.addDoc({
  title: "To make varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 074r - - - - - \n## To make varnish\n\nTake one pound of linseed oil, and then put it in a pot of earth mixed with a breadcrust and three onions, and put it on a charcoal fire, and you will cook it on a low fire, and let it boil for the space of five hours. You will take half an ounce of flour glue, and will make it boil just as before, and stir continuously with a spoon. And then afterwards, you will add two ounces of well—pounded sandarac to it, and will do so as above. And then afterwards, you will take mastic and gum arabic, two ounces of each, both well pounded, and will put everything together, and will have it boil, always stirring, for the space of five hours. And then you will add rock alum, two ounces, and then you will make it boil. And if you add two ounces of gum arabic to it, if you see that they are not cooked enough, have it cook more on a low\n- - - - - 074v - - - - - \nfire until it is cooked enough. And strain it through a cloth that is compact enough. And when you have strained it, leave it to cool a little. And if you see that it is so thick that you cannot strain it, you will add a little of that oil and will make it better.\n\n",
  id: 145
});
index.addDoc({
  title: "To make red varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n## To make red varnish\n\nTake vermillion, and let it soak in quite light gum water, like the other, and make two or three ground layers as is said above.\n\n",
  id: 146
});
index.addDoc({
  title: "To make yellow varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n## To make yellow varnish\n\nTake some gum arabic and let it soak in water, then take some well beaten saffran and soak said gum. And make it quite light, then make your ground layer on that which you want to varnish, and leave it to dry, and when it will be dry give another ground layer of the same varnish, and leave it to dry as before, until it will be dry enough. Then take varnish from an apothecary, crushed by strokes far enough from one another. Then wash your hands quite well and spread your varnish with their palms.\n\n",
  id: 147
});
index.addDoc({
  title: "Recipe for white gum",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n## Recipe for white gum\n\nTake white wax and ceruse and a little fine pitch, very well pounded together, and put it in a small new pot and make it melt. And when it will be melted you will make a palette of wood and burnish what you want.\n\n",
  id: 148
});
index.addDoc({
  title: "Green gum",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n## Green gum\n\nTake green wax with a little verdigris and make it melt as said above.\n\n",
  id: 149
});
index.addDoc({
  title: "Gilding wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 075v - - - - - \n##  Gilding wood\n\nFirst of all it is necessary to apply a coat of very clear glue; and when it is dry, you will apply a coat of yellow gold; and when this is done you will take fig tree wood and soak it for a while, and wash the place you want to gild,dhdjhjdhdjh and cut your gold with a knife near where you will put it; and said gold must be applied with cotton, and if you can find some fig tree, take an egg white and stir it frequently.\n\nIf your gold does not have a nice enough color, you will take a partridge feather burn it in a chafing—dish, and turn the smoke toward what you have gilded.\n jkfjoehwfoihwoq ehcfo3 h 2oth o\n",
  id: 150
});
index.addDoc({
  title: "Recipe for coloring all wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 075v - - - - - \n## Recipe for coloring all wood\n\nTo make it black, the wood needs to be soaked in olive oil and tough meat in a similar case for four or five days, then boil it in where the wood has soaked for one hour, then take it the wood out of the oil. Take some natural sulphur if possible otherwise take another\n- - - - - 076r - - - - - \nsulphur. Cover the aforementioned wood with this powder, until it cools, and bring it back to a boil. Upon boiling one will see whether or not it is black enough. If it is not, take the aforementioned powder and apply some over the wood and boil it.\n\n",
  id: 151
});
index.addDoc({
  title: "Medicine of orientals against all maladies",
  author: null,
  layout: "narrative",
  content: "- - - - - 077r - - - - - \n## Medicine of orientals against all maladies\n\n \n Dry some rosemary in the month of May, then fill this bowl with powder made of it, and place a lit charcoal on top. And, receive the smoke by a quite tightened mouth having closed your mouth well, and a part will come out by your nose. But if you want to purge the head also pinch the nose. Against colds, rheums, and other maladies.\n\n",
  id: 152
});
index.addDoc({
  title: "Tin for casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 079v - - - - - \n## Tin for casting\n\nThey use common tin, which is the one that pewterers use for plates, which is composed of 9 or ten pounds of pure lead on one quintall of tin.\n\n\n  position: left-bottom\n\n  Some find that there is nothing better than pure tin.\n\n\n",
  id: 153
});
index.addDoc({
  title: "Fountains",
  author: null,
  layout: "narrative",
  content: "- - - - - 080r - - - - - \n## Fountains\n\n \nIf you wish to raise water higher than its source, make a pipe descend as in A. to B. to give it push , then from B. to C. make the pipe ascend, but not quite to the height of the source, here represented by the dotted line, and then make it descend again in a pipe from C. to D., and then let it rise higher than the line demarcating the height of the source, and do this successively until you reach the desired height. Remark nonetheless that the length of the descending pipe is always twice as long as the ascending pipe. This cone also fills itself and demonstrates a perpetual fountain which you can adapt into a rock, attracting the water with which it is filled by the tip here marked, by sucking and breathing in. You can also make a watering can pipe in this way, so long as the bent pipe is just as long as the straight pipe, but does not extend as far down.\n\n\n  position: left-middle\n\n  \n\n\n\n  position: left-middle\n\n  \n\n\n",
  id: 154
});
index.addDoc({
  title: "Founders of small tin work",
  author: null,
  layout: "narrative",
  content: "- - - - - 080v - - - - - \n## Founders of small tin work\n\nThey usually cast from soft solder the things that should not become hollow, because hollow works require fine and soft tin. However, these things would not otherwise lose their coat or become hollow if they are mixed or include glass tin in them, just like they mix a little glass tin in the soft tin. They carve their work on stones of which the sharpening stones or barber’s files are made. These are found in great flakes near the mountains, and resemble slate. They are found in three colors: one reddish, that is not as perfect as the others because it does not sustain heat ; another one is the color of dark slate, and the other is whitish. When they work a relief, first they print it on carton, which is one finger thick, to serve as a pattern. After planing their stones and rubbing them together , they use a compass or little iron tools to carve their figures. They make their molds with three or four stones, to make a circle or a square with the stones which join perfectly because the stones are of equal size. Before casting, they rub the mould over with tallow, and it the mould absorbs it quickly because it is hot. Then, having put fine powder of quicklime into a cloth, they rub the mould using pounce in beating the linen on top, then blow it a little on top; this prevents bubbles from forming. The main thing is to make some vents. If the work is big, they do as it is shown on the picture. They make a hole in the medal, somewhere where it is least visible, and with a bit they pierce the mold on the side of the medal. \n  \nAnd if they want their work to last, they pierce it somewhere and fit in a piece of cork. Lead or tin will not damage it.\n\n",
  id: 155
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 080v - - - - - \nMake sure the pegs of your frame fit in easily so it will open with ease without moving anything else. Your box molds should fit well, and the table should be very flat.\n\n",
  id: 156
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 080v - - - - - \nTry to carve with distilled vinegar.\n\n",
  id: 157
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 080v - - - - - \nTry calcined oyster shells; they are said to be excellent for molding.\n\n",
  id: 158
});
index.addDoc({
  title: "Vine",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Vine\n\nAs with a bramble, it can be planted on both sides. And those who plant the larger side facing a slope say that it makes a larger stock. But it only has a higher point, because it grows higher.\n\n",
  id: 159
});
index.addDoc({
  title: "Mortars",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Mortars\n\nThe fine copper mortars do not throw any flames, as long as the iron pestle is not tempered. If the mortar is indeed made from metal, when this is sour, in this case one makes the bottom of large mortars from fine copper.\n\n",
  id: 160
});
index.addDoc({
  title: "Varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Varnish\n\nTurpentine oil: turpentine &amp; good eau de vie, to dry it out; heat it without mixing on the stove, so that it mixes of its own accord in melting. After, test it on a very clean blade, &amp; you will know from this whether it has enough body and whether it does not flow too much.\n\n",
  id: 161
});
index.addDoc({
  title: "Grafting",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Grafting\n\nOne knows from experience that the young shoot that is enters into the incision on the sunny side takes hardly often at all when it is also bowed.\n\n",
  id: 162
});
index.addDoc({
  title: "Baker",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Baker\n\nDust guards wheat against being worm—eaten. And to clean it well when it is stained &amp; like rust, pass some ashes through a sieve and mix them with the wheat, then sift the whole thing with a bolting cloth made from rough cloth or canvas. The ashes will pass through &amp; your wheat will stay nicely yellow &amp; very fine.\n\n",
  id: 163
});
index.addDoc({
  title: "Looking-glass tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Looking—glass tin\n\nIt makes material whiter.\n\n",
  id: 164
});
index.addDoc({
  title: "Sand from pulverised rock salt and sand from a minium finely ground on marble",
  author: null,
  layout: "narrative",
  content: "- - - - - 088v - - - - - \n## Sand from pulverised rock salt and sand from a minium finely ground on marble\n\nAfter they have been dryly ground and beaten in the mortar, they are ground finely on the marble. I mixed the same quantity of each material, and in order to mix them better, I ground them on the porphyry again, and then filtered this through a double sieve or the sleeve of a shirt. Then, I put them on sheets of paper and stored it on marble in a cellar. In one night, they were both moist enough [that there there was no need] to dampen them further because rock salt, like all other salts, dissolves in dampness. I molded with this very neatly because both should be quite fine. They need to be moist enough so it can be removed easily.\n\n",
  id: 165
});
index.addDoc({
  title: "Mineral sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 088v - - - - - \n## Mineral sand\n\nIt does not matter if the sand color is white or yellow. Above all it the sand must be lumped together much like a precious stone or a stone, and the deeper in the earth one gets it from, the better. The signs of its quality is that it is thus gathered together, that, if the stone is removed as it should be i.e. in the correct way, it forms pieces and lumps together, which demonstrates its capacity for binding, and that it the sand is not too dry. However, it should crumble in your hands. And the grain must be quite small, fine, and homogeneous. If this sand is not fine enough, you can filter it and grind it up finely either with water, or through a sieve, when it or on the porphyry. That way it loses its dryness and becomes greasy and well bound. You can mold it in a box mold or in a noyau without wadding, and try it with lead because, if it does not swell and casts neatly, it will bear out well too. Some say that fatty sands do not work for casting metal that is too hot. Artisans who undertake a big job and who want to save money do not need to crush sand and seek the curious properties of artificial sand; they have more to profit from finding natural sand that has the finest grain possible. And for a small job, they take advantage of finding the finest natural sand they can. For a smaller job, they only filter the sand through the sieve. But those who work on a very small scale crush the sand and grind it finely until it becomes impalpable, because they do not need as much sand. left—middleGround wheat makes a tawny—colored powder that is quite fine and quite soft. Once this powder has been mixed, it can mix mold very neatly. Try wheat flour burned in an enclosed fire.\n\n",
  id: 166
});
index.addDoc({
  title: "Powder of ox bone and rock salt",
  author: null,
  layout: "narrative",
  content: "- - - - - 089r - - - - - \n## Powder of ox bone and rock salt\n\nI pulverised them separately and ground them finely on the porphyry as much as I could. Then I mixed all of one with the other and re—ground it on the porphyry. Afterwards I moistened it in paper folded in a moist napkin which is made wet more quickly from the moisture of the night, or the moisture of the cellar. I have never found one which can be removed more cleanly from the mold than this, though it needs to be quite moist. And if you want to cast small works, make it very hot. It came out very cleanly from the doulx tin, like the main one, and has sustained several castings. For tin, I believe that it is not necessary to look further to find a material that takes to powder better, and even for use with fine lead which has almost better results than tinTou. The bone of an ox hoof is always dry, that is why you must mix it with fatty sand, so it will bind like tripoli, salts, felt, ashes and similar materials. If you do not mix ox—hoof bone, it will not turn out from the mold and will not mold cleanly because it crumbles.\n\n",
  id: 167
});
index.addDoc({
  title: "Reheating or wiping a box mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 089r - - - - - \n## Reheating or wiping a box mold\n\nAlways arrange the most delicate parts, like faces or handles, so that nothing will fall which would then disturb your fusion.\n\n",
  id: 168
});
index.addDoc({
  title: "Natural sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 089r - - - - - \n## Natural sand\n\nThis should not be reheated for lead and tin, it is better all new and fresh.\n\n",
  id: 169
});
index.addDoc({
  title: "Ammonia salt and alabaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 089v - - - - - \n## Ammonia salt and alabaster\n\nDry ammonia salt, ground on a marble slab, molds very cleanly and is easily removed from the mold. When mixed with pulverized alabaster, use two ounces per pound of alabaster; it also is easily removed from the mold. It should be humidified in a cellar or in the cool humid evening air, or to have it quickly, in a sheet of paper in a moist towel. Take care not to leave it too long because it will soften, which would not be good if you wanted to use it as a box mold. However you can use it well as a core provided that you dry it gently and away from the fire. Otherwise the heat would make it swell, and push the salt onto the surface, causing lumps. If you want to mold a core, rub your medal with aspic oil. It is better to use 4 ounces of ammonia salt per pound. Humidify it in a damp place for two or three days, so that the material can be handled without sticking. You will mold very cleanly. Let the mold dry out and reheat it, that way it will get body, and become as hard as stone and when it is like that it is far easier to remove from the mold. If you do not reheat it, it could crumble when removed from the mold because of its thinness. It is the same with a large relief medal. Once you have molded, pulverize the material like before, and moisten it in a damp atmosphere. left—middleAll sands which can be removed easily from the mold have body, well—made fat ammonia, and is sand that removes easily from a mold. There is nothing better for binding than the salt of the metal itself. When ground into powder, they pick up moisture, dry and reheat together.\n\n",
  id: 170
});
index.addDoc({
  title: "White glassmaker's sand mixed with ammonia salt",
  author: null,
  layout: "narrative",
  content: "- - - - - 089v - - - - - \n## White glassmaker’s sand mixed with ammonia salt\n\nYou can find this sand in Cominge, near the town Aurignac. This sand is dry and as white as salt. Glassmakers and potters use this sand ground on the porphyry until it becomes as fine as possible. Easy to grind, this sand looks like calcined alabaster, and provides a very clean mold. I have not found another as suitable for delicate bas reliefs. It is also excellent to mold as a core, without any box mold. You must grind it very finely on a porphyry with gummed water or pure water, then apply a thick coat (as thick as mustard or a little bit thicker) over the medal, which has already been lightly rubbed with oil, walnut oil or, even better, aspic oil. For best results, let it dry by itself, away from fire, for one or two days. If you are in a hurry, you can heat it; it should not break if the coat is quite thick. If it is suddenly exposed to fire, some holes will appear; that does not happen if it has been gently dried. Once dry, reheat it, and it should allow for several castings.\n\n",
  id: 171
});
index.addDoc({
  title: "Sal ammoniac and iron dross",
  author: null,
  layout: "narrative",
  content: "- - - - - 090r - - - - - \n## Sal ammoniac and iron dross\n\nI pulverized sal ammoniac, previously well dried in a hot bronze mortar over heat. Then I filtered the salt through a double sieve; it became very fine. But to make it finer, I dry ground it on the porphyry, then I mixed it with iron dross which was pulverized and ground the same way. Both ingredients take a very clean cast of bas—reliefs, without being moistened with serain, or into the hollow mould, or anywhere else with the serviette, and the cast can be cleanly removed.\n\n",
  id: 172
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 090r - - - - - \n## Sand\n\nMolders from Foix who cast their medals sideways use crocum ferri and calcinated slate. It is used for very flat things.\n\n",
  id: 173
});
index.addDoc({
  title: "Every kind of sand can be made useful",
  author: null,
  layout: "narrative",
  content: "- - - - - 090r - - - - - \n## Every kind of sand can be made useful\n\nArtisans who do big works, and who need to search for things made by nature to pursue their work, because nature does not want to sell its wares to its children, and in order to save the time they would spend grinding, pulverizing and artificially preparing their sand, look for sand from sandpits, which is not too fat from the soil, nor too arid and, consequently, without any binder effect. From deep in the sandpit, one can find some lumps and gravel that show the sand’s natural compaction; it is quite hard to break, with very small and fine grains, quite smooth between the fingers. And since it is found solely close to mountainous regions or arid lands, you cannot find any near every good town, where artisans live. Thus, if they can’t find any close to their home, they prefer to order some of this sand from afar, like Lyon, Venice or Paris, near the Sainte Chapelle, and similar areas, instead of preparing it themselves. Nonetheless, you can be assured that in all locations, you can make sand from the sandpit and will be good and will mold cleanly. Because the sand is coarse and dry, filter it through a sieve. If it is not fine enough, wash it. And when the water has settled a little, pour the soiled water into another pot. The coarse [grains] will quickly fall to the bottom of the first pot. But the sand from the troubled water pot, having settled, will be much finer. If this sand does not bind enough, dry crush it on the porphyry, thus making it impalpable, and it will bind as chalk does. If you wish you can reheat it, and straight after crush it and blend it with salts, or burned cloth, or felt, or paper ashes, or similar material.\n\n",
  id: 174
});
index.addDoc({
  title: "Potters' clay",
  author: null,
  layout: "narrative",
  content: "- - - - - 090v - - - - - \n## Potters’ clay\n\nGrind it in a mortar mustard mill with water, and it will become as impalpable as possible. Dry it, then moisten it with salt water, which give force to all sands in order to allow several castings.\n\n",
  id: 175
});
index.addDoc({
  title: "Orange trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 090v - - - - - \n## Orange trees\n\nIn Italy, particularly in the coldest areas like Lombardia, people plant the orange trees inside squared wood planters. The planters are larger at the bottom than at the top. People make handles on each side, where they attach straps in order to carry the planter, like one carries the gout sufferers, because if one used wheels to roll them one would damage the garden’s paths. Every two year they remember to open the sides of the planters and meticulously cut and trim the ends of the orange tree’s roots, which are dry. Otherwise, the roots find the wood [of the planter] and tighten on it, they double over themselves, the ends dry and the tree dies. Once trimmed, the roots gain new space to expand, without encountering resistance from the wood of the planter. That is why it is better to join the sides of the planter with screws rather than nails, to avoid shaking the soil when one opens them.\n\n",
  id: 176
});
index.addDoc({
  title: "Grafting",
  author: null,
  layout: "narrative",
  content: "- - - - - 091r - - - - - \n## Grafting\n\nAny tree that has a large pith will be hard to be graft from, because the cutting is difficult to remove. If the pith is damaged, the graft will take in an unstraight manner, like with vines of all peach and apricot trees. Apricot trees have a very thin bark, and so it is necessary to graft them onto young trees whose own bark is not thick yet, such as the young shoots of prune trees or apricot trees. The graft will not take if the cutting gets wet. It is necessary therefore to graft in serein and mild weather, not too cold and not too windy. One must use old wood to graft, if one wants to graft on a tree that is already mature and quite big; because if this is the case, it will compress the cutting, and if the cutting is of young wood, it will not grow properly. But old wood resists the compression of old wood better than the young, because it is harder than young wood. But if the graft is done with only old wood, it will never grow beautifully, but will be frail and short and will take a long time to grow.\n\n",
  id: 177
});
index.addDoc({
  title: "Molding with cuttlefish bone",
  author: null,
  layout: "narrative",
  content: "- - - - - 091r - - - - - \n## Molding with cuttlefish bone\n\nPay attention to keep the bones in a dry place, because they are very prone to dampness. If you have a small medal, divide the bone into two pieces, then smooth the two parts with a knife. And on a dry, smooth rooftile [that has been] pulverized with willow charcoal, rub and polish the two half bones. In this way, the bones soak up the willow charcoal so that the bones will come off cleanly from the cast, and will not stick to it. Then on a fake bone, that is to say a bit of smooth brick of the same width as your bone, place your medal. And then on the medal, put your bone and press it firmly with another stone of the same size. And for a second time, mold it, and instead smooth over the top with willow charcoal and blow slowly, then press as before, and it will cast neatly. If it is for a spoon handle, two whole bones are needed. Any work that is cast is brittle and prone to breaking, because the metal swells when cast, and contracts and condenses when hammered. That is why it is necessary to retrace with a chisel the cast object and in this way the metal will contract again and let it escrouir. If the piece you have to cast is in high relief, first trace the mold and the hollow with a penknife, to make a clear path for the medal and then cast it. And if the medal has two sides\n\n\n  position: left-bottom\n\n  Rather than casting, heat the bones only to make them lose the coldness and wetness.\n\n\n\n  position: left-bottom\n\n  When the lead gets too hot, it calcinates.\n\n- - - - - 091v - - - - - \nBecause the two bones are joined, cut around them with precision, and make notches in different places which cross through where the two bones are joined, so as to recognize the place where they were first joined. Or with little shards of wood, you can also pierce the bones, or coat the joints with clay, and leave it to dry. Compress between them it with your two hands in between your knees; and do not use a normal press, otherwise the bones will break. Mold at your leisure two or three times, until you can see that it has the design come up and is well imprinted. And on each occasion rather than putting the piece straight back in the mold, smooth with willow charcoal because it helps it to come out easily. Once you have cast, rub your medal with oil and willow charcoal with a brush, to make it dull. Take care that your medal is not greasy or oily when you cast it in cuttlefish bone. Once you have cast, leave it to cool rather than taking the medal out straight away, because when one takes it out hot, some bone will come away with the medal. Cast at medium heat, which you will recognize because the bone should stay almost white. But when it is too hot, the bone becomes brown. The proportion of lead and tin is equal, one to the other. If the piece is difficult to cast, and composed of various pieces, cast it with a forked pattern, of three or four grooves, and make and make these grooves where the metal is the thickest. Also make these grooves around the medal and directly on the head because this attracts the metal and will fill the figure best. Lift your boxmold a little, once you cast, and in this way you will be able to make several clean casts. Tin that is too hot burns the bone which becomes damaged. Moreover, having come out of the mold hot , it risks breaking. \n\n",
  id: 178
});
index.addDoc({
  title: "Provisions for the work of Colchos",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n## Provisions for the work of Colchos\n\n7 limbecks of glasse 2 lbs. of ☿ One measure of coarse salt 6 unleaded earthenware vessel 2 large unleaded pots for calcinating 2 alembics to distill vinegar 4 pots of good vinegar 3 or 4 lamps 2 lbs. of cotton One pair of scissors\n",
  id: 179
});
index.addDoc({
  title: "For the furnace",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n## For the furnace\n\nA chest with a ten inch wide square stone, and of a one—foot thickness, pierced in the middle 2 boxes or two earthenware pots with a lid 2 small pipes of white iron to evacuate the smoke of the furnace Turnipseed oil for the lamps to heat the furnace A fire—steel\n",
  id: 180
});
index.addDoc({
  title: "Royal cement",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n## Royal cement\n\nOne pound and a half of vitriol As much saltpeter As much rock alum\n",
  id: 181
});
index.addDoc({
  title: "Turtles",
  author: null,
  layout: "narrative",
  content: "- - - - - 105r - - - - - \n## Turtles\n\nMales have shells that turn down at the end near their tails, and their underbelly shells have lined marks along the bottom from their tails to their head. And the females have neither the turned down shell near the tail nor the marks.\n\n",
  id: 182
});
index.addDoc({
  title: "Catching nightingales",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n## Catching nightingales\n\nSee the 15th folio after this.\n\nIn order to catch them, you must observe them in real life, the food that they favor and their mating season. The nightingale, as long as he is singing, marks his own territory. Therefore approach him by pretending to look for something on the ground. Take some worms from old flour or from beneath what you are kneading or from mills, which nightingales love, and put some on your hat, fastened with a pin or in any other way, so that it can wiggle. And five or six steps away from the hedge where it is singing, dig a hole, and place some worms in it, as well as your device made out of little criss—crossed sticks. As soon as you leave it will be anxious to go and see what you have done. And seeing worms it will enter.\n\n\n  position: left-bottom\n\n  Some people sell nightingales on trees.\n\n\n\n  position: left-bottom\n\n  It is easier to catch nightingales in the cool of the morning or evening, near fountains or shaded areas.\n\n\n",
  id: 183
});
index.addDoc({
  title: "Making gold run for casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 106r - - - - - \n## Making gold run for casting\n\nBecause gold cools down very quickly, you have to give it a mixture when it is well melted that will keep the heat. Sublimate softens it nicely. But, since it vanishes into smoke, it won’t aid you for very long. Therefore mix this mixture into it when you want to cast it: of sal ammoniac, the best verdigris that you can find, a bit of borax and some saltpeter. And this, held over the heat, will become neat. The saltpeter makes it clear and heats it. But the key thing in this mixture is the verdigris, which has to be good. This mixture softens your gold so much that it becomes as tractable as lead, even if it is good gold.\n\nFor sand for molding flowers and leaves &amp; other delicate things, mix in raw plaster, crushed brick and stone alum.\n\nTo moisten sand, spirits are excellent because it makes sand fine and leaves in a vapor when you reheat your box frame.\n\nDilute sal ammoniac is very good, is excellent for moistening sand, but for lots of water you only need a little bit of sal ammoniac.\n\nA raw lump of metal, if you don’t have crocum ferri, is good for gold.\n\nThe snakes and the lizards you wish to mold should not be kept for a long time, because if they are alive, they will waste away, and if they are dead, they will decay.\n\nPlaster of Paris is as hard as stone and very good. When you want to choose some for your sand, take the rawest and the hardest that is possible for you &amp; that does not make any powder. Transparent [plaster] and that which makes powder in giving way is that which is not good for this work. A sign of that which is near perfect is that it is hard &amp; makes shining grains that look almost like sugar. Finally, to mix it into the sand to cast gold, it has to be put in the fire twice, &amp; reheated twice.\n\n\n  position: left-top\n\n  When gold is really pure, it is so dry that it can just barely endure a hammer. But this mixture softens it like lead.\n\n\n",
  id: 184
});
index.addDoc({
  title: "Spalt",
  author: null,
  layout: "narrative",
  content: "- - - - -  - - - - - \n## Spalt\n\nSpalt is white like cooked plaster and one can find it in mounds and stones made in long stairs and long veins. It is very soft such that with a fingernail and it makes a powder like that of our chalk from Champagne. And because everything which is provided from the earth is mixed with some other substance, to purify it [the spalt], one boils it with somewhat large gemstones then tempers it with essence of sal ammoniac. One puts [a lump of it] the size of a walnut in a large bottle of water and that way one tempers it &amp; reducing it into small balls, [one] purges it of impurities [by] then putting it on to cook cleanly in a vessel of earth[enware] in a furnace like those in which pots [are made] and one leaves it there to the point at which pots would be fired. After one tempers it more with essence of sal ammoniac &amp; boiling it very strongly and emptying the murky water &amp; putting it in a separate vessel straight after put back the same water over it &amp; one boils &amp; one puts back the murky water again with the other. And one does this therefore until that which is there has passed away. In this way one purges and purifies and makes it a very fine and malleable [matter]. After one has taken away the water by tilting [it] or with a sponge, one takes the residue and dries it. Then moistening it with the aforementioned water the way one did with the other sand, one uses it in a frame or if it shrinks [this] is a sign that it is not fired enough &amp; needs to be fired more. This one is proper for molding all metal and especially gold and silver and the more it is used the better it is. One should put alum which you have cast of lead or tin separately because it makes gold. sour if you cast it there.\n\n",
  id: 185
});
index.addDoc({
  title: "A cast of lead or tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 110v - - - - - \n## A cast of lead or tin\n\nBecause you want to cast tin very thinly, if your medal, plant or other thing you want to mold is thin and fine, make sure to include more tin, much more than lead, namely less than the fourth part of lead for three of tin. And moreover, one only puts lead in as an alloy. Contrarily, if you want to mold something strong and thick, put a lot more lead in than tin. And for the one and the other you can put in a little looking—glass tin, but only a very little, with a little resin, when you want to cast. Since then, when molding with pure new lead, I put in two ounces of pure tin for every pound of lead. And when molding with pure tin, I put in two ounces of pure lead for every pound of tin. I made some plants and snakes as if they were real.\n\n\n  position: left-bottom\n\n  I cast tin when it was nearly red, and the same thing with lead, which however had not remained in the fire for too long, because it becomes brittle and burns up.\n\n\n",
  id: 186
});
index.addDoc({
  title: "Drying animals in an oven",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n##  Drying animals in an oven\n\nOne can skin small cats and remove their eyes and all their guts. Then place a small stick vertically between the teeth in order to open their mouths. Then with iron nails one should attach their feet to a small board, arrange the required position. Once they are tied by their feet with small iron rings, one has to hang them upside down into the sun. By doing so, they will get the right shape and dry, the belly will tighten and the the tail will remain high up thanks to the twist that you made. Once they are already a bit dry, one may twist the head as he wishes and secure the position with any tool. One may finish to dry the animal by placing it in an oven once the bread has been taken off. Then place some realistically painted lead balls or wax balls in the eye—sockets. One should paint them with gummed ink so that they look like jet. One can add a painted tongue, or horns, or wings or anything you may imagine, same goes for rats or any animal.\n\n which surround the fingers of the paws and which stick in the jacket of clay.\n\n",
  id: 187
});
index.addDoc({
  title: "Reddening lively crayfish which will look as if they were boiled",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n##  Reddening lively crayfish which will look as if they were boiled\n\nRub your crayfish with good vinegar diluted with a little eau—de—vie and not much, then you can present them as if they were cooked and yet they will walk.\n\n",
  id: 188
});
index.addDoc({
  title: "Molding a single spider",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n##  Molding a single spider\n\nOne has to display it on the jacket of clay as it is said for the vine leaf. Then do the first cast. And once it dry, peel the mold off to the middle of the legs and do the second cast.\n\nAlso. One cannot mold the hairy legs of big spiders or any other hairy animal if they had not been rubbed with wheat oil before they are laid flat. This will make the hair firmer and will dry very quickly. Hairy things entangle in the sand, and do not burn very well.\n\n",
  id: 189
});
index.addDoc({
  title: "Molding a single vine leaf",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n” \n##  Molding a single vine leaf\n\nAttach it with brass wire points on the jacket of clay and then cast the first mold. Once it is dry peel off the back side and make the second cast. Then peel away the back side, and make your second cast. Once it is dry, you may remove the leaf. You must heat your mold only once, because there is nothing to be burnt inside.\n\n",
  id: 190
});
index.addDoc({
  title: "Molding a crab",
  author: null,
  layout: "narrative",
  content: "- - - - - 130v - - - - - \n##  Molding a crab\n\nIt is a secret and a masterpiece to mold [a crab] well because it is necessary to proceed differently [than you would] with other animals, because its shell is quite difficult to […] and that is why it is necessary to reheat the mold three or four times. And on top of all that, it leaves a hard crust [that is] gray like ash. It is not molded from one piece and one cast as [is done with] plants. Rather, [it is moulded] in two casts as [is done] with serpents which are easily stripped from it [the mold]. After it is opened, nimbly remove this crust with the very fine point of a pen—knife {and not with quicksilver which removes nothing from it} and likewise those small crusts of the second cast which get into the cavities that the sand or the molded animal made because it has curved legs. Here is the subtlety and the secret of stripping it. As you molded it [the crab] from the back side in the way [that you did for] the others [animals], remove the stomach and all the curved legs from it. Make your second cast in the way [that you did for] the other [animals], but as it will have set, take care that you not open the mold unless you have first reheated it well. Otherwise, because of its curved legs, you would break the whole thing. Herein lies the subtlety. If, after it has been well reheated and opened, you see that the crust is not burned enough, reheat [it] until it is burned [enough].\n\n\n  position: left-top\n\n  It [a crab] can be painted like a crayfish.\n\n\n\n  position: left-top\n\n  It does nothing.\n\n\n\n  position: left-bottom\n\n  For opening the mold, it is not necessary to soak it because, once reheated, it will open itself by itself.\n\n\n",
  id: 191
});
index.addDoc({
  title: "Stag beetle",
  author: null,
  layout: "narrative",
  content: "- - - - - 130v - - - - - \n## Stag beetle\n\nLike a crab, it [a stag beetle] is also difficult to burn, therefore do [stag beetles] as you did crabs.\n\n",
  id: 192
});
index.addDoc({
  title: "For molding thinly",
  author: null,
  layout: "narrative",
  content: "- - - - - 130v - - - - - \n## For molding thinly\n\nAfter you have molded the first mold as the core, leave it to dry well before removing the figure from wax, so that the mold is not ruined. Afterwards, then make make a small lasagna of paste as thick as you like, and, once you have greased the cavity of your first hollowed mold with butter, apply the paste to it [the cavity of the first concave mold] and then the upper part of the second mold. If you grease [the mold] with oil, it will be soaked up [into the mold] and it will not be as clean as butter.\n\n",
  id: 193
});
index.addDoc({
  title: "Casting with lead and tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 139r - - - - - \n## Casting with lead and tin\n\n The way I have done it  for lizards and serpents is with two ℥ of pure tin for one lb. of unrefined lead that is impure. The mold is made out of the aforementioned sand, common for all metals, when it is reheated, leave it to cool until you can put your finger in it without causing a breach in the gate of the cast. As for the lead, it is melted in a crucible with a bellows’ fire until both the crucible and the lead are red. When it gets to that state, cleanse it anew with charcoal or with a specially made scraper or with the pufts of the little bellows. This done, leave it to rest in it red state and you can even reheat it, then if you want, throw in a bit of resin to burn away the filth. However, some think it best not to put any in because it leaves filth. But when they are ready to cast, they cannot forget to also thrown in a bean—size quantity of bismuth for each pound of lead. And it must be as red as the melted metal when it enters the mold. If the mold is large, it is much better to put in in a press so that they join well and so that the lead does not come out of the mold. However, should this happen, and that for the first, second or third time your mold does not fill up, cast heartily because for as long as your metal is red it will mix and join with the other one and will come out very neatly like the main one. The same thing can be said for pure tin used for thin things. And that way for doing pure tin is one ℥ of new lead for one lb. of the former. Large molds must be put in a press held tightly between two layers of copper, and then bury the whole thing in sand, which is better than ashes, because being heavy, it will seal better. Otherwise large molds are prone to open because the metal is heavy. Some make square molds\n- - - - - 139v - - - - - \nare made of earth or blades of copper, or iron, or wood covered with white iron, in order to bury more easily these aforementioned molds between the thin sheets of copper, estric or one of iron.\n\n\n  position: left-top\n\n  When the metal is thick, you do not need to cast as hot as when it is thin.\n\n\n\n  position: top\n\n  When you melt this often, it becomes sour and fragile because it has to be cast very hot and it makes it half—calicanated. Use new stuff.\n\n\n\n  position: left-top\n\n  +\n\n\n\n  position: left-top\n\n  Note that If you want to cast with cuttlefish bone, they cannot be too warm because that would burn the cuttefish. For this effect, try paper. It it becomes brown, it is enough, and it is good for casting, but if it blackens the paper, then it is too hot.\n\n\n\n  position: left-bottom\n\n  If you want to cast paper with writing on it, make a mixture with half lead and half tin. As soon as it is melted, throw it between two pieces of cardboard on a flat place that is level. And with a point or gold or hard wood, engrave on the left the writing that you want. And having poured the lead onto the cardboard, press onto it the other piece of cardboard.\n\n\n",
  id: 194
});
index.addDoc({
  title: "To cast in sulfur",
  author: null,
  layout: "narrative",
  content: "- - - - - 140v - - - - - \n## To cast in sulfur\n\nTo cast neatly in sulfur, arrange the pith of bread under the brazier, as you know. Mold whatever you want into it &amp; let it dry &amp; you will have very neat work.\n\n\n  position: left-top\n\n  Try sulfur passed through melted wax, because it will no longer ignite &amp; and make eyelets.\n\n\n",
  id: 195
});
index.addDoc({
  title: "Molding and shrinking a large shape",
  author: null,
  layout: "narrative",
  content: "- - - - - 140v - - - - - \n## Molding and shrinking a large shape\n\nMold it with the pith of bread just out of the oven, or like that aforementioned, &amp; in drying out it will shrink &amp; consequently so will the medal that you will cast. By these means — lengthening out or enlarging the imprinted bread — you can vary the shape &amp; from one face make several different ones. The bread straight from the oven is best. And the one which has been heated twice contracts more. You can cast sulfur without letting the imprint on the bread dry, if you want to cast it as large as it is. But, if you want to let it shrink, let it dry to a greater or lesser extent.\n\n",
  id: 196
});
index.addDoc({
  title: "Casting of lead and tin in plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 140v - - - - - \n## Casting of lead and tin in plaster\n\nIf you want to cast any flat medal or any animal that is not very heavy, and that must not be burnt inside the mold, you can indeed cast in mixed plaster &amp; brique, as above; and not in plaster alone, because it contracts too much feeling an ardent fire if it is not so mixed. But, with the brick, it holds well. However, take heed to dry out your mold at length &amp; on a slow fire &amp; with patience, because there is no need to reheat it. But when your work is of flowers or other things that want their mold to be reheated &amp; set ablaze, mix the plaster with stone alum &amp; even with crocum. I have molded in very neat plaster &amp; brick &amp; it has sustained several castings.\n\n\n  position: left-middle\n\n  I tried both plaster &amp; brick alone and molded en noyau with like the others. My mold was very clean, having lightly oiled &amp; rubbed my medal with spirits. I made my casting wide at the entrance, narrowing it as it goes along until it reaches the medal which is very thin. I notched the casting which embraced the medal well. I dried the mold out well on a slow fire &amp; finally, I heated it well without turning it red. I let it cool in such a way that I could hold my finger to it without burning myself. I made a line of 4 ℥ of tin, &amp; ix deniers of lead. I cast it red, and it was quite good and beautiful. Afterwards I put xii deniers of lead on top of 4 ℥ of tin. It is very good &amp; beautiful.\n\n\n\n  position: left-bottom\n\n  When there is nothing to burn in the mold, it is not necessary to reheat it for lead and tin. But for flowers and other things that must be burned, it is.\n\n\n",
  id: 197
});
index.addDoc({
  title: "Casting a crayfish",
  author: null,
  layout: "narrative",
  content: "- - - - - 141r - - - - - \n## Casting a crayfish\n\nThe crayfish is one of the most fantastical to cast, but also provides an example for casting other difficult things. You can distinguish males and female by the eggs that the females carry, and by the four little white back legs that males have in their tails after behind main eight legs. It is good to dry them out a bit so that the bumps come out more hard and beautiful, because none of what is made of shell shrinks. It is true that should you dry the little inside legs for too long, they become diminished and have no body. If they are too dry, the flesh separates from the scales. Be sure then to maintain the mean. They have certain hairs between the legs and at the end of the tail. And because all hair is difficult to cast, because it gets mixed up in the sand and does not release, you can burn it by putting a hot iron on the crayfish so that it the hair cannot be seen. As for animals that have hair or feathers, you must grease the hair with wheat oil, which is very dry and which will make the hair lay flat and straight. In this way, you will have form of your animal and you will have the hair. Should it the hair be wavy, it can be repaired. If your crayfish has eggs, which are delicate, and which will be difficult to take out of the mold without breaking, you would do better to make the first cast with the crayfish on its belly and eggs. In this way, you will open the mold with it the crayfish on its back, which will be hard and easy to manipulate. And the belly and the eggs will remain in the mold. And rather than opening your mold for the second time, you will have to burn it with them in it. This way, it will open easily, and what has been burned will come away cleanly. In this way, the second casting, which is done on the first one that has successfully taken hold, separates easily from the first, after having been refired. This is a singular secret for similar moldings.\n\n\n  position: left-top\n\n  The casting is made by the very thin tail.\n\n\n\n  position: top\n\n  If some little thing is missing, you can reattach it or else fill it with goldsmith’s cement.\n\n\n\n  position: left-top\n\n  Do not forget to rub with spirits before you mold.\n\n\n\n  position: left-top\n\n  Stag beetles, crayfish and crabs are molded in the same way.\n\n\n\n  position: left-middle\n\n  If your crayfish has no eggs, mold the back on top and the belly on the bottom. You can give it some.\n\n\n\n  position: left-middle\n\n  It the crayfish can be molded hollow for the body, but not for the legs. And for a good result, take note that the crayfish is rather fantastical to mold hollow, this ought to be reserved for turtles.\n\n\n\n  position: left-bottom\n\n  When you open your mold, you will find the crayfish has white bones, but they will not be powder. And without opening it, the mercury will not have affected the process.\n\n\n\n  position: bottom\n\n  Apply very light oil colors.\n\n\n\n  position: bottom\n\n  To paint it, boil it with wine and a bit of salt so that they become very red and use this as a model. Paint the back with vermillion mixed with laquer, and the sides and the underside of the belly and the legs with vermillion and yellow ochre and white.\n\n- - - - - 141v - - - - - \nLet your crayfish dry a little in the sun, by itself. If it has spawns, they will shrink while drying, and be all the more beautiful for it. Make your paste out of yellow potter’s earth, just like for the other representations. Lay your crayfish on it, the back side down, and the other parts which are more tricky to mold —— legs, belly, eggs — side up. Drive in the back side in the clay paste up to the legs, which is about the half part of the crayfish’s body. Fix the body with a pointy iron thread in the middle and, if you feel you need it, you can also drive another one at the edge of the tail. And in order that the big legs be lower than the head, which is lower because it is linked from below, add a little clay under the head. Then add a bit of clay under the jacket in order to raise it. Hide the feelers under the clay and under the crusher claws, then arrange it as you like. Stretch out the walking legs to the joints, and for the first cast, bend the second part of the walking legs. Fix the joints of the legs with wax and a warm wire so they will not move. If you want to mould something fancier, fix the end of one walking legs on the body or on a crusher claw , using the same wax. If the female has spawns, bent half the tail over the spawns, and keep the shape by fixing the tail with a wire. Be sure that you will be able to clean this part. Finally rub your crayfish with spirits, and cast your sand. Once the sand is hardened, uncover the back side, the head, the eyes, and the small legs close to the crusher claws, and the walking legs all along. One must uncover these parts as much as possible. Then bend and cover the spawns again. The other animals\n\n\n  position: left-top\n\n  Fix what may raise the two padded edges on each side of the mouth with melted wax under them. \n \nposition: left-middle\n\n  Uncover as many parts as possible, but be sure the channels you make are well stripped.\n\n\n\n  position: left-middle\n\n  Incline your mould to the thickest side of the animal.\n\n\n\n  position: left-bottom\n\n  To paint the crayfish, one paints the middle of the back with vermilion, mixed with a bit of lacquer. The sides, the belly, and below the legs with a mixture made of vermilion, ceruse, and a bit of yellow ochre. As with all things, always keep the real one in front of you in order to copy it as realistically as possible.\n\n\n\n  position: left-bottom\n\n  Lay the feelers on the crusher claws, or solder this part with a wire made of bleached brass.\n\n\n\n  position: bottom\n\n  When you arrange the legs, be sure that they do not get over the belly, and that they are well set against the belly otherwise [illegible]\n\n- - - - - 142r - - - - - \nare not so uncovered. But since crayfish are troublesome to burn &amp; clean, you have to uncover them as much as you can, even the little legs just until the tips, because they are troublesome &amp; if, in order to not alter them, you have to take them out, you could break something of the mold. Having uncovered it with the point of a knife, like an engraving stick or another fitting thing, clean off the sand at the joints &amp; elsewhere with your little brush really very scrupulously. And if something is loosed from the crayfish, attach it with wax, as is discussed. And also attach the horns this way. And also do the casting the length of the extremes of the little legs with wax. And refill the holes that have been made with the needles of iron wire with it. And everything being quite clean &amp; having uncovered more than half of it, oil your mold after having soaked the back side in water, &amp; do not forget to oil all the fine parts that are between the legs and the little beaks; then rub the crayfish with spirits. And do your second casting after having made the first mold even, so that the cramp—irons join better. Your mold must be larger on the side with the impression than on the back. Do not open your mold after the second casting, so that it not become clayed &amp; reheated &amp; that which is inside not be burned. Do not forget to mix crocum throughout your sand when you mold the crayfish, because you must really reheat it &amp; the crocum withstands this marvelously. To mold a crab &amp; to mold a crayfish are exactly the same. When you have uncovered your crayfish on one side do not delay at all before doing the second casting, because crayfish dry out. It is not enough to uncover the crayfish such that you see the whole half the half you uncover, but take heed that your mold, even when you are uncovering, be good and stripped, because if the crayfish gets well burnt, you will not be able to open your mold without breaking it.\n\n\n  position: top\n\n  Restore it with a pen knife, little chisels, or engraving sticks.\n\n\n\n  position: left-top\n\n  As you see here, but a wax casting all around &amp; at the end of the tail, where you will do the principal casting, two or three more. \n \nposition: left-middle\n\n  Make the casting with candle wax shaped in a thread like a large packthread, the whole length from the end of the claws to the extremity of the tail. If there is also some claw end or other part that is extended past the rank of the others or is raised up higher or turned up all alone, make a wax casting for it from its end just barely not joined to the body or to one of the large claws or to some other place where lots of metal will be wedged in.\n\n\n\n  position: left-bottom\n\n  Having uncovered it, attach &amp; secure the two little bearded horns of the crayfish, and anything else that is not secured, with wax.\n\n\n",
  id: 198
});
index.addDoc({
  title: "Molding grasshoppers and things too thin",
  author: null,
  layout: "narrative",
  content: "- - - - - 142v - - - - - \n## Molding grasshoppers and things too thin\n\nIf you have to mold a piece of written—on paper that is too thin, after you have done the first cast and it has set, give a little thickness to the reverse of your paper with melted butter, which is the most appropriate means there is, &amp; for strengthening the wings of either a butterfly or a grasshopper, or any delicate part of an animal to which you need to give thickness. But take heed to apply this melted butter under the wing or in whichever place it will not be seen. For giving thickness to a pansy or other flowers, butter is not good, but rather wheat oil, which is soon dry &amp; holds firm. Wax would not be appropriate here for it is too hot once melted, and it makes the thing to which it is applied contract. But butter is amiable and handleable.\n\n\n  position: left-top\n\n  If you write on paper or on common carton and your letters are made with gum, the moisture of the clay plate (?) or the wet (?) sand for a noyau will moisten your letters and undo them. Write therefore with cinnabar mixed with oil, on oiled &amp; stamped (?) paper.\n\n\n\n  position: left-middle\n\n  + Reheat your molds with charcoal firstly lit in the forge, so that the fire is not too hot and does not break the molds. And do not fire as strongly where the mold is thin as where it is thick.\n\n\n",
  id: 199
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 142v - - - - - \n## Molds\n\nMake some notches in them the molds that enter more into the inside of the mold than the outside because in this way, they have more strength. Take care to keep from reheating them suddenly in a burning hot fire, because this will make them break.\n\n\n  position: right-middle\n\n  Do not keep them molds in a humid place, nor an enclosed place if they are not well dry, because they will mold. The same with dried animals.\n\n\n\n  position: left-middle\n\n  It is not at all necessary to reheat the molds two times when the animal can pull away without burning, as do toads, which can very well be molded hollow like all thick animals. However, it is always good to redden the mold once.\n\n\n",
  id: 200
});
index.addDoc({
  title: "Lute for luting your molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 142v - - - - - \n##  Lute for luting your molds\n\nI have not found a lute that is made more quickly than this one, nor a better one. Take some of the lean earth that artillery founders and bell founders use to make their trusseaulx and molds, which is lean and sandy. Soak it moderately like a very thick mortar. Mix into it about one half of horse manure and then beat it well. Afterwards mix in one third of cloth waste or cloth shavings and beat it again quite strongly. You can reheat your mold as soon as the lute is ready.\n\n",
  id: 201
});
index.addDoc({
  title: "Moulding turtles and tortoises",
  author: null,
  layout: "narrative",
  content: "- - - - - 143r - - - - - \n## Moulding turtles and tortoises\n\nThe turtle the one that lives in water is more beautiful to mold because it has prettier scales and straight legs. And the tortoises have crooked ones. They eat a lot. To get ready to kill them, open their mouth and pass a long penknife through all the intestines. And then make it swallow some vinegar mixed with spirits or urine, as one does for snakes. It is necessary to mould them in several pieces, and even the back sometimes because the sides of certain ones are narrower than others and in this instance do not release from the cast. To make them die, you must not boil them, because they come apart, even the shell, in the hot water. They the shells come out better when hollowed because their great thickness spoils the mold. Turtles are more lively. The tortoises are leaner, slower, and more sleepy. If you scratch turtles on their shells, no matter how sleepy they are, they move; tortoises do not.\n\n\n  position: left-top\n\n  They turtles/tortoises die rather quickly in vinegar mixed with a little spirits or urine, as with all other animals.\n\n\n\n  position: left-top\n\n  They turtles/tortoises keep their eyes closed in the winter, and appear as dead, having been numbed by the cold. They hide in the earth or under balls of grain or warm manure, and survive only on the dampness of the earth.\n\n\n\n  position: left-middle\n\n  You must not mold them too soon after they die because they are still stiff. But on the day after, you will be able to manipulate them and bend their legs as you wish.\n\n\n",
  id: 202
});
index.addDoc({
  title: "Moulders from Foix",
  author: null,
  layout: "narrative",
  content: "- - - - - p143r - - - - - \n##  Moulders from Foix\n\nThose who mould from across the way make their sand from crocum ferri and calcinated slate, but slate always retains its bumpiness and swells because it is a fatty. In the noyau, it is not good; in sand, it can be put to use. They the moulders from Foix sieve their sand, grind it on porphyry, and soak it in water, and they keep the finest bits which are on the top, then they reheat it.\n\n",
  id: 203
});
index.addDoc({
  title: "Toad",
  author: null,
  layout: "narrative",
  content: "- - - - - 143r - - - - - \n## Toad\n\nHaving been molded, you can take it out it without burning it, because it releases easilyfrom the mold. Choose the biggest and the lumpiest toads. Because they contain a lot of metal, it is best to mold them hollow, since they turn out better. You could make your cast in one great piece, but it would be troublesome to cut. It is best to do it in three or 4 parts, which will be thicker close to the animal, and include the most amount of edge that is close to the cast/mold. Make as well some casting conduits all the way from the end of the cast. \n  \n&gt; position: left-bottom\n&gt; \n&gt;  Let the mold cool rather than opening it, even for thick things.\n- - - - - 143v - - - - - \nfrom one leg to another, so that the spread out limbs are in connection with one another due to the aforesaid casting conduits, which you will start in the waxless round parts that you have put at the edge of the legs to attract the metal. In this way, because you are casting in wax, there is no danger chipping any part of the molded animal. It’s quicker to make the wax casting conduits thus, because in this way you can cast the second mold after the first, rather than wait to do them the conduits after the mold has been recooked, because then, if possible, you will need to have everything ready. You need to heat well, and even redden the molds where there are wax conduits so that they melt and leave nothing inside.\n\n",
  id: 204
});
index.addDoc({
  title: "Openwork carcanets",
  author: null,
  layout: "narrative",
  content: "- - - - - 143v - - - - - \n## Openwork carcanets\n\nYou can mold them “en noyau” like crayfish, first with one side being made higher with clay, which is hollow, and then you open it from the other side and make the second casting. You can just as well cast them “en chassis”, provided that they release well. If they do not, you can do a rough cast in wax, or you can fill up the cavities which do not release well with wax or clay.\n\n",
  id: 205
});
index.addDoc({
  title: "Iron filings",
  author: null,
  layout: "narrative",
  content: "- - - - - 143v - - - - - \n## Iron filings\n\nBecause usually filings are mixed with impurities, it is good to heat them over fire to burn the filth and then wash them in clear water. In this way, the dirt will rise to the top of the water, which you will throw out, and the good filings will go at the bottom.\n\n",
  id: 206
});
index.addDoc({
  title: "Carnations",
  author: null,
  layout: "narrative",
  content: "- - - - - 143v - - - - - \n## Carnations\n\nBecause those that you usually cast are generally quite big, they are heavy. And so for these, you make them with silver leaf or slivers.\n\n",
  id: 207
});
index.addDoc({
  title: "Ashes in the moulds",
  author: null,
  layout: "narrative",
  content: "- - - - - 157v - - - - - \n## Ashes in the moulds\n\nYou must let the mold cool down rather than blow into it to try to get the ashes out. Because when the mold is hot, the ashes stick to it, and when it cold, they separate from it more easily, and will exit by blowing with le vent a vapeur.\n\n",
  id: 208
});
index.addDoc({
  title: "Po{ur} f{air}e h{…} vin f{…}rs [?]",
  author: null,
  layout: "narrative",
  content: "- - - - - 157v - - - - - \n## Po{ur} f{air}e h{…} vin f{…}rs [?]\n\nPrenez un chausson du pied droid t qui ait este porte et le faictes tremper en eau et de leau q{u}i en sortira la f{air}e boyre au mesme ou autre et v{er}rez merveilles\n\n",
  id: 209
});
index.addDoc({
  title: "Mercury in molds, for cleaning",
  author: null,
  layout: "narrative",
  content: "- - - - - 158r - - - - - \n## Mercury in molds, for cleaning\n\nTake heed that your mold be quite cold when you blow in order to get the ashes out. And afterwards put in ☿ in order to finish the cleaning. Because if the mold is hot, the ☿ will go inside; seek out the conduits in escaping, will leave its own odor, which will aggravate the tin or other metal that you will cast, such that it will break in touching the mold at all. The heat of the mold also retains some little grains of ☿ that will make lumps; stick to the sides of the molded leaves and attach to them; make them frangible. The ☿ cleans ashes well. Likewise flat things where there are not delicate traces that it could break with its weight. And therefore, if you can cast neatly without putting it in, don’t use it at all. But if you have need of it, mix your crocum sand so that it withstands fire well. And after having put in the ☿, evacuate it, bouncing the end of the mold from below while moving it. Afterwards reheat your mold gently so that the ☿ is gone from everywhere. In this way I cast a branch of periwinkle leaves; flowers very neatly. Having put a branch of melted [illeg] in the flower, on the back of the flower [illeg].\n\n\n  position: left-bottom\n\n  Reheat your mold until it is good and red before casting, so that the ☿ evaporates well.\n\n\n",
  id: 210
});
index.addDoc({
  title: "Colors for green leafs",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n## Colors for green leafs\n\nOne usually paints them with oil colors, because distemper colors do not stay on. For marigold flowers, lightly ground minium for some of them; for more yellowish ones, mix in a bit of massicot. For green, the vert—de—gris is dark and too somber. If it is a yellowish—green, you can mix with the vert—de—gris a bit of yellow ochre and scudegrum. If the green is dark, mix in some coals made from peach pits, which makes a greenish—black, in the same way than the bone of an ox foot bone makes a bluish—black. And in such a manner, by judgement and discretion, put the color on the natural flower or leaf to see whether it is similar to the original. But paint it on very lightly so as not to cover the features of the work.\n\n",
  id: 211
});
index.addDoc({
  title: "Large molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n## Large molds\n\nBecause of the heaviness of the metal, it is necessary to put them in a press so that they do not open.\n\n",
  id: 212
});
index.addDoc({
  title: "Candle smoke",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n## Candle smoke\n\nIt allows the piece to be taken out more easily, and even if it is slightly thick, it does not stick because it has no substance. I have perfumed my core molds this way for tin and lead, and I have casted in a cold mold, but drying it well beforehand, and the piece came out quite cleanly. It is true that lead mixed with half the quantity of tin, because the medal was very thick, was very hot.\n\n",
  id: 213
});
index.addDoc({
  title: "casts",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n## casts\n\nIf the medal is very thick, do not pour a cast that is as thick; the cast just needs to be half as thick as the medal. But if it is thin, make a cast that is of the same thickness. Do not forget to make vents in the cast or the whole matter will fill with bubbles.\n\n\n  position: left-bottom\n\n  Never forget to oil the cast with wax when you cast herbs or flowers, otherwise it will break and cannot be taken out.\n\n",
  id: 214
});
index.addDoc({
  title: "Portraits in Wax",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n## Portraits in Wax\n\nIf you do not mix your wax with any color dye, and if you paint some colors on the wax, these colors would fade if you cast it en noyau. But the representation is not damaged, rub it very lightly with spirits diluted with hot water. If your representations are varnished, repeat the molding process two or three times in order to remove this varnish which sticks to the mold. When the varnish is removed, your mold is very clean. If your representation is set on wood, it is necessary to pour very hot melted wax on the wood, otherwise the mold sticks to the wood. It is much better to mix your white wax with white lead than ceruse, because white lead is whiter and more firm.\n\n",
  id: 215
});
index.addDoc({
  title: "Chasing tool",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n## Chasing tool\n\nIf a chasing tool has passed through any part of the representation, it is necessary to rework the whole thing and follow it all again. Otherwise it would look like an additional piece.\n\n",
  id: 216
});
index.addDoc({
  title: "Fish glue",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n## Fish glue\n\nBeat it very finely and thinly on a well—cleaned anvil, then dilute your glue with spirits, put the mixture on hot ashes, and on a low fire, it will melt very soon. If the glue is not strong and thick enough, add spirits in greater quantity. Do not melt it in a fatty pot, but in a new pot if possible. It melts on fire and dries very quickly on fire. When your glue sets on the work, heat it away from fire, it will stick very strongly. One reworks flowers and delicate things made from silver, gold, tin and other metal with this glue which will not spoil your work.\n\n",
  id: 217
});
index.addDoc({
  title: "Tin and lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n## Tin and lead\n\nThey must be beaten out very finely and tin will not get brittle or break, lead is a bit fatter. But that is why it is necessary to reheat it under hot ashes, and to beat several leaves together.\n\n",
  id: 218
});
index.addDoc({
  title: "Cleaning files",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n## Cleaning files\n\nSometimes they get fat from the grease of lead, which is naturally fat, or also filings corrode them. And you will be able to clean them with hot charcoal or a wire brush made from brass.\n\n",
  id: 219
});
index.addDoc({
  title: "Carnation",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n## Carnation\n\nMold a carnation like a rose, marigold, and all other flowers as discussed, that is to say cast the flowers in one mold, and the leaves in two parts in order to solder them onto the flower, this is the better way. But you could mold the flower and the leaves together in one single closed mold. I tried one which came out well from the mold. But the sand must be very thin, and you must blow very strongly.\n \n",
  id: 220
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n## Molds\n\nTry to make one side as thick as the other, that way the two parts will be equally reheated. You can open this kind of mold in order to clean it, when you mold some animals, like crayfish, which burn. When your mold is reheated, do not wait too long before casting again, because it gets damp and loses its strength.\n\n",
  id: 221
});
index.addDoc({
  title: "Unmixed plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n## Unmixed plaster\n\nIf you reheat plaster as a stone it would crumble into water, but if you grind it before reheating it, it will not crumble into water, on the contrary it will harden in water, if it is good plaster like the one from Paris or from Spain which is as hard as a stone, and which is found through poor and dry earths, and which looks like white salt. German people use this plaster to make statues for their fountains, even if the statues are varnished they will not be damaged with water. On the contrary harden this plaster with water. When this sand is unmixed it sets much sooner. Oil very lightly your shapes of metal or of other materials otherwise you will not be able to strip plaster from the mold. And dip your mold into hot water in order to open it, if it does not open in hot water, it could open into boiling water.\n",
  id: 222
});
index.addDoc({
  title: "Presses for large moulds",
  author: null,
  layout: "narrative",
  content: "- - - - - 160r - - - - - \n## Presses for large moulds\n\nfigure identifier=”fig_p160r_1” url=”https://drive.google.com/open?id=0B9—oNrvWdlO5ZDNJT25PWjlUbGM”/&gt;  It is made of two sheets of iron, fasten with four small iron pillars, in such a way that the upper sheet is able to move and run freely along the pillars, while the lower one is fixed. A St André cross, made of iron, stops at the end of the pillars; there is a screw in the middle of the cross, which squeezes the sheets against the molds placed between them. For small molds, we make a frame; having put the mold between two metal sheets, we squeeze it in the frame with for small moulds, put the mould between two iron sheets, and squeeze it with wedges. Big wooden presses, with a screw, apart from being heavy to move to the furnace for casting, make it difficult to see when they squeeze too much, and they often break the molds. The screw is fixed to these nuts which are nailed down the upper plate, this way it raises and presses the mould.\n",
  id: 223
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 164v - - - - - \n## Molds\n\nFor molds wherein something must be burned (away), and do not open before being reheated: do not cast before refiring/reheating. For large molds that produce large and wide casts, it is necessary to score it with strong notches so that the pitch of the metal does not run as forcefully. These will not make many burrs if they are pressed. Prior to doing so, place between the mold and the press pieces of thick felt for mittens, which will fill the cavities and protect the mold from cracking. The clamps should be placed prior to heating or drying.\n\n\n  position: top-left\n\n  When the ground from which you are making your earthen base to lay out your animal is too soft, the pins you place come out easily when you cast the sand and so the mold is spoilt and the design is defeated. Therefore when you know that your slab is too tender and soft, spread some hot cinders over it and blow with the bellows.\n\n\n",
  id: 224
});
index.addDoc({
  title: "Reducing a round form into a hollow one",
  author: null,
  layout: "narrative",
  content: "- - - - - 169v - - - - - \n## Reducing a round form into a hollow one\n\nYou must firstly mold it with plaster as has been said before, and in the plaster throw in some wax from which will come a relief that you will repair very neatly, and will shape at your pleasure. Then you will mold this wax relief once more in plaster, or even better with your tempered sand, #, as if for a noyau. And in the latter throw in some lead and from this you will have a very neat relief, and if it is not, repair it on cement or a similar material, and beware that it should always release well. And this one will always serve you as a model for making as many hollow molds as you would like. In this way, place half of your lead figure which you have oiled, and moisten it with spirits as we have seen above, on your clay base, then mold this half with a white plaster. Having taken hold, and having smoothed and flattened the plaster, take your black wax mixed with sulphur as we have seen before, because it leaves nothing in the mold and melts quicker. Dip it in hot urine, and once it is softened enough, make an imprint with it on your half figure in lead. And you will have a very neat hollow mold. Then adapt your wax hollow mold into a square shape, as it pleases you, as long as you have sufficient thickness, and make sure it is well even on all sides, and then mold this hollow wax; and having it imprinted on one side, and having it flat and even on the other, in the same way that you would mold a flat medal in wax or metal in a noyau. And the noyau mold will give you, whether in silver or any other metal you wish, a figure similar to the wax one, which is to say, flat and even on one side, and hollow on the other. And having cleaned this hollow, and having put it in the bleach, if it is made of silver, you can put into it some sugar work\n\n\n  position: left-top\n\n  Having made a hole in your clay base and having placed there your half figure in wax, oil it a bit so that it comes out more easily.\n\n\n\n  position: left-middle\n\n  Transparent wax is not good as opposed to one that has body, for making good imprints.\n  \nposition: left-bottom\n\n  Because you have molded one of your halves with plaster and wax, you can do the same thing to the other half.\n\n- - - - - 170r - - - - - \nperfume and similar things. But be sure that the black wax with which you cast is hard, so it will come off rapidly when dry so you can see if it has been stamped correctly. It can be made harder by adding more melted sulphur in the melted wax, and a bit of resin.\n\n",
  id: 225
});
index.addDoc({
  title: "Common medals",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n## Common medals\n\nRelief awls are made of untempered steel, and then it is tempered. With it we beat on a matrice, not red hot on the fire as some people think, but on some steeled iron, reheated and adoulcy, that is then tempered.\n\n",
  id: 226
});
index.addDoc({
  title: "To preserve oneself",
  author: null,
  layout: "narrative",
  content: "- - - - - 170v - - - - - \n## To preserve oneself\n\nAcetum paratum ex ruta baccis juniperi simul tusis Eoaceto extinguantur lateres igniti. Et vapor excipiatur ore naribus. Rue vinegar together with crushed juniper berries. Pour the vinegar over red hot bricks and inhale the vapor through the mouth and nostrils. This is to preserve oneself when going into noxious air: a garment can be perfumed with this vapor in order to remove infection from a room, house, etc. And if you find yourself in a place where you do not have this preparation, carry rue and berries crushed together, then, if need be, boil them in vinegar and use as described.\n   Ottonis episcopi | Frisigensis | Ab orbe condito Abbatis | Urspergensis | Chronicon Hieronymus | Mercurialis, | Variarum Rerum Scoticarum Historia, Georgio Bucanano authore Rembertus Dodonæus, Mechliniensis medicus, | De stirpium historia De L’Orme, De l’invention de bien bastir, and other works Telesius, De coloribus, Vascosan Marbodius, De lapillis prætiosis \n",
  id: 227
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "Casting wax to mold an animal that one has not got",
  "author": null,
  "layout": "narrative",
  "link": "/texts/139v_1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/169r/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_2/",
}
,{
  "title": "To varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p003v_a1/",
}
,{
  "title": "Lavender spike oil varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004r_1/",
}
,{
  "title": "To remove varnish from an old panel painting that has yellowed and varnish it again",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004r_2/",
}
,{
  "title": "Black varnish for sword guards, metal bands for chests, etc.",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004v_a1/",
}
,{
  "title": "Black varnish without fire, without disassembling harnesses or removing metal bands from chests.",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004v_a2/",
}
,{
  "title": "Iron engravers' varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004v_a3/",
}
,{
  "title": "Steel mirrors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p005r_a1/",
}
,{
  "title": "Concave mirrors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p005r_a2/",
}
,{
  "title": "For bronzing in yellow and white",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p005v_a1/",
}
,{
  "title": "To lay down and set burnished gold and give it a red or green or blue hue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006r_1/",
}
,{
  "title": "For cages",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006v_a1/",
}
,{
  "title": "For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006v_a2/",
}
,{
  "title": "To gild with gold color and tinsel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a1/",
}
,{
  "title": "To color stamped ornaments for trunks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a2/",
}
,{
  "title": "Doublets",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a3/",
}
,{
  "title": "Fish glue or usblac and mouth glue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a4/",
}
,{
  "title": "To give the color of all kind of metals and woods and other things",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_1/",
}
,{
  "title": "Against windy colic",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_2/",
}
,{
  "title": "To relieve the pain of g{out}",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_3/",
}
,{
  "title": "Against gonorrhea",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_4/",
}
,{
  "title": "Gold lettering on paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_1/",
}
,{
  "title": "To explode grenades and give force to fireworks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_2/",
}
,{
  "title": "Tempering bullets to pierce bullet-proof armor",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_3/",
}
,{
  "title": "To make a breach in a wall by night",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_4/",
}
,{
  "title": "To polish a ruby balay",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_1/",
}
,{
  "title": "Ground gold and ground silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_2/",
}
,{
  "title": "Polishing stones",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_3/",
}
,{
  "title": "Pewterers' mixture",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_4/",
}
,{
  "title": "Perfect amalgam",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_5/",
}
,{
  "title": "Plowman",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009r_1/",
}
,{
  "title": "Painters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009r_2/",
}
,{
  "title": "Merchants",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009r_3/",
}
,{
  "title": "Painters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009v_1/",
}
,{
  "title": "Merchant",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009v_2/",
}
,{
  "title": "Waste book",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009v_3/",
}
,{
  "title": "Imitation jasper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_1/",
}
,{
  "title": "Scudegrun",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_2/",
}
,{
  "title": "Roses",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_3/",
}
,{
  "title": "Purple color",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_4/",
}
,{
  "title": "Powder for hourglasses",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_5/",
}
,{
  "title": "For painting in oil on taffeta without the oil running",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_1/",
}
,{
  "title": "Underlayer for gold leaf on parchment or paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_2/",
}
,{
  "title": "For cleaning gold leaf applied to iron",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_3/",
}
,{
  "title": "For whitening ceruse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_4/",
}
,{
  "title": "Painting enamel azure in oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011r_1/",
}
,{
  "title": "Applying the color of Damascene steel on knives",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_1/",
}
,{
  "title": "Getting rid of red eyes or black eyes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_2/",
}
,{
  "title": "Applying unpolished gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_3/",
}
,{
  "title": "Making diamond points for engraving",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_4/",
}
,{
  "title": "Polishing a copper wheel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_5/",
}
,{
  "title": "For molding from sulfur",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012r_1/",
}
,{
  "title": "Paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012r_2/",
}
,{
  "title": "Plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012r_4/",
}
,{
  "title": "Moulding stucco promptly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012v_1/",
}
,{
  "title": "Cleaning yellow pearls",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012v_2/",
}
,{
  "title": "To whiten enilanroc",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012v_3/",
}
,{
  "title": "Flesh color with arsenic",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_1/",
}
,{
  "title": "To dye",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_2/",
}
,{
  "title": "Polishing of stones",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_3/",
}
,{
  "title": "Fine sieves of raw silk",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_4/",
}
,{
  "title": "Candles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_1/",
}
,{
  "title": "Whitening pearls",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_2/",
}
,{
  "title": "Toadstone",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_3/",
}
,{
  "title": "Snakes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_4/",
}
,{
  "title": "For earth walls and rustic construction",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p014r_1/",
}
,{
  "title": "Damask Cloth",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015r_a1/",
}
,{
  "title": "Casting metals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015r_a2/",
}
,{
  "title": "Casting gold and silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015r_a3/",
}
,{
  "title": "Ears",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_1/",
}
,{
  "title": "Making letters easier to read",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_2/",
}
,{
  "title": "Stamping",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_3/",
}
,{
  "title": "Softening horn",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_4/",
}
,{
  "title": "Toothache",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_6/",
}
,{
  "title": "Black color for dyeing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_1/",
}
,{
  "title": "Against nose bleeding and for dyeing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_2/",
}
,{
  "title": "Beautiful artichokes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_3/",
}
,{
  "title": "Planting trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_4/",
}
,{
  "title": "Merchants",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_5/",
}
,{
  "title": "Goldsmith",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039r_1/",
}
,{
  "title": "Dyers’ woad",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039r_2/",
}
,{
  "title": "Enamel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039v_a1/",
}
,{
  "title": "Colors for illumination on glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039v_a2/",
}
,{
  "title": "Tracing a history on glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039v_a3/",
}
,{
  "title": "Aqua fortis",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_1/",
}
,{
  "title": "Vinegar",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_3/",
}
,{
  "title": "Silver gilt buttons",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_4/",
}
,{
  "title": "Grottos",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_5/",
}
,{
  "title": "Latten and calamine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_02/",
}
,{
  "title": "Metal",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_03/",
}
,{
  "title": "Aqua fortis",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_04/",
}
,{
  "title": "Cross of the commanders of Malta",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_1/",
}
,{
  "title": "Garden lily",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_02/",
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_03/",
}
,{
  "title": "Ducks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_04/",
}
,{
  "title": "Casting earth for founders",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_1/",
}
,{
  "title": "Glassmaker's black",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041v_1/",
}
,{
  "title": "Sheared ewes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041v_2/",
}
,{
  "title": "Colors and gilt on glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041v_3/",
}
,{
  "title": "Founder",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042r_1/",
}
,{
  "title": "Wax for seals and impressions",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042r_2/",
}
,{
  "title": "Casting in plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042r_a3/",
}
,{
  "title": "Pounce for scratching satin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a1/",
}
,{
  "title": "Canvas for oil painting without breaking",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a2/",
}
,{
  "title": "Oil painting on taffeta",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a3/",
}
,{
  "title": "Casting sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a4/",
}
,{
  "title": "For decorating a painting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a5/",
}
,{
  "title": "White varnish on plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a6/",
}
,{
  "title": "Mericoton and pavis",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a1/",
}
,{
  "title": "White bronzing on plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a2/",
}
,{
  "title": "Purpurine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a3/",
}
,{
  "title": "White bronzing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a4/",
}
,{
  "title": "Varied and transmuted wine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_1/",
}
,{
  "title": "Pearls",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_2/",
}
,{
  "title": "Arquebusier",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_3/",
}
,{
  "title": "Hail shot for the arquebus",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_4/",
}
,{
  "title": "The reach of an arquebuse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a1/",
}
,{
  "title": "Pewtermaker",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a2/",
}
,{
  "title": "Arquebuse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a3/",
}
,{
  "title": "Lacquer",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a4/",
}
,{
  "title": "Dyes from flowers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a5/",
}
,{
  "title": "Horsehair sieves",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_1/",
}
,{
  "title": "Excellent water against the pest by the Master of Montorsin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_2/",
}
,{
  "title": "White soporific oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_3/",
}
,{
  "title": "Stucco",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_4/",
}
,{
  "title": "Loading a pellet arquebus",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p045r_1/",
}
,{
  "title": "Loading an arquebus",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p045v_1/",
}
,{
  "title": "How to adjust a bent gun barrel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p045v_2/",
}
,{
  "title": "Birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_1/",
}
,{
  "title": "Grain of lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_2/",
}
,{
  "title": "Birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_3/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_mb1/",
}
,{
  "title": "Preserving fruit for the entire year",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_1/",
}
,{
  "title": "Molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_2/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_mb1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050v_mb1/",
}
,{
  "title": "Skin colors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_1/",
}
,{
  "title": "Making things round",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_2/",
}
,{
  "title": "White lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_3/",
}
,{
  "title": "Lights",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_4/",
}
,{
  "title": "To bronze in white",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_1/",
}
,{
  "title": "To make vermillion",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_2/",
}
,{
  "title": "To make varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_3/",
}
,{
  "title": "To make red varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_1/",
}
,{
  "title": "To make yellow varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_2/",
}
,{
  "title": "Recipe for white gum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_3/",
}
,{
  "title": "Green gum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_4/",
}
,{
  "title": "Gilding wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_2/",
}
,{
  "title": "Recipe for coloring all wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_4/",
}
,{
  "title": "Medicine of orientals against all maladies",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p077r_a2/",
}
,{
  "title": "Tin for casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079_3/",
}
,{
  "title": "Fountains",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080r_3/",
}
,{
  "title": "Founders of small tin work",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_a1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_mb1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_mb2/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_mb3/",
}
,{
  "title": "Vine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a1/",
}
,{
  "title": "Mortars",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a2/",
}
,{
  "title": "Varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a3/",
}
,{
  "title": "Grafting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a4/",
}
,{
  "title": "Baker",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a5/",
}
,{
  "title": "Looking-glass tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a6/",
}
,{
  "title": "Sand from pulverised rock salt and sand from a minium finely ground on marble",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088v_a1/",
}
,{
  "title": "Mineral sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088v_a2/",
}
,{
  "title": "Powder of ox bone and rock salt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089r_a1/",
}
,{
  "title": "Reheating or wiping a box mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089r_a2/",
}
,{
  "title": "Natural sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089r_a3/",
}
,{
  "title": "Ammonia salt and alabaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089v_a1/",
}
,{
  "title": "White glassmaker's sand mixed with ammonia salt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089v_a2/",
}
,{
  "title": "Sal ammoniac and iron dross",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090r_a1/",
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090r_a2/",
}
,{
  "title": "Every kind of sand can be made useful",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090r_a3/",
}
,{
  "title": "Potters' clay",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090v_a1/",
}
,{
  "title": "Orange trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090v_a2/",
}
,{
  "title": "Grafting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p091r_1/",
}
,{
  "title": "Molding with cuttlefish bone",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p091r_2/",
}
,{
  "title": "Provisions for the work of Colchos",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_1/",
}
,{
  "title": "For the furnace",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_2/",
}
,{
  "title": "Royal cement",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_3/",
}
,{
  "title": "Turtles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_1/",
}
,{
  "title": "Catching nightingales",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_3/",
}
,{
  "title": "Making gold run for casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106r_a2/",
}
,{
  "title": "Spalt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p108r_a1/",
}
,{
  "title": "A cast of lead or tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p110v_3/",
}
,{
  "title": "Drying animals in an oven",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_1/",
}
,{
  "title": "Reddening lively crayfish which will look as if they were boiled",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_2/",
}
,{
  "title": "Molding a single spider",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_3/",
}
,{
  "title": "Molding a single vine leaf",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_4/",
}
,{
  "title": "Molding a crab",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130v_1/",
}
,{
  "title": "Stag beetle",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130v_2/",
}
,{
  "title": "For molding thinly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130v_3/",
}
,{
  "title": "Casting with lead and tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p139r_1/",
}
,{
  "title": "To cast in sulfur",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_1/",
}
,{
  "title": "Molding and shrinking a large shape",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_2/",
}
,{
  "title": "Casting of lead and tin in plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_3/",
}
,{
  "title": "Casting a crayfish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p141r_1/",
}
,{
  "title": "Molding grasshoppers and things too thin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_1/",
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_2/",
}
,{
  "title": "Lute for luting your molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_3/",
}
,{
  "title": "Moulding turtles and tortoises",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143r_1/",
}
,{
  "title": "Moulders from Foix",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143r_2/",
}
,{
  "title": "Toad",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143r_3/",
}
,{
  "title": "Openwork carcanets",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143v_1/",
}
,{
  "title": "Iron filings",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143v_2/",
}
,{
  "title": "Carnations",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143v_3/",
}
,{
  "title": "Ashes in the moulds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p157v_1/",
}
,{
  "title": "Po{ur} f{air}e h{…} vin f{…}rs [?]",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p157v_3/",
}
,{
  "title": "Mercury in molds, for cleaning",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158r_a1/",
}
,{
  "title": "Colors for green leafs",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_1/",
}
,{
  "title": "Large molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_2/",
}
,{
  "title": "Candle smoke",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_3/",
}
,{
  "title": "casts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_4/",
}
,{
  "title": "Portraits in Wax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a1/",
}
,{
  "title": "Chasing tool",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a2/",
}
,{
  "title": "Fish glue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a3/",
}
,{
  "title": "Tin and lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a4/",
}
,{
  "title": "Cleaning files",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a1/",
}
,{
  "title": "Carnation",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a2/",
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a3/",
}
,{
  "title": "Unmixed plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a4/",
}
,{
  "title": "Presses for large moulds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160r_1/",
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164v_1/",
}
,{
  "title": "Reducing a round form into a hollow one",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p169v_2/",
}
,{
  "title": "Common medals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_1/",
}
,{
  "title": "To preserve oneself",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170v_3/",
}
]

//Query

var qd = {}; //Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="/GR8975-edition'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
