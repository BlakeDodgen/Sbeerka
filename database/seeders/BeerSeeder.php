<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Beer;
use DB;

class BeerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beers')->truncate();

        $beers = [
            [
                'brewery_id' => '1',
                'beer_type_id' => '1',
                'name' => 'Sibeeria Taumata',
                'alcohol_volume' => '11',
                'degree' => '4.8',
                'description' => "We love brewing lagers and we love brewing with New Zealand hops. Taumata, or in full Taumatawhakatangihangakoauauotamatea turipukakapikimaungahoronukupokaiwhenuakitanatahu, is named after an actual hill in New Zealand's North Island and is our new Nelson Sauvin hoppy lager. We let it sit for a long time and the result is a crystal clear, slightly malty and refreshing beer. Thanks to light dry-hopping, it smells of gooseberry, lychee and lime. Its brisk bitterness will allow you to enjoy a pint or two, giving you plenty of time to learn the full name and order another in style!",
                'beer_pic_id' => '1'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '2',
                'name' => 'Sibeeria Blackcurrant Sorbet',
                'alcohol_volume' => '11',
                'degree' => '3.9',
                'description' => "Blackcurrant has a distinct, unique taste that is sour, slightly bitter, sweetened in ripe fruits and pleasantly aromatic. It pairs wonderfully with our light wheat Berliner Weisse. Blackcurrant fruits give the resulting beer a purple color, which is very unusual for beer and reveals that we really used a lot of fruit.",
                'beer_pic_id' => '2'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '3',
                'name' => 'Sibeeria Three Suns',
                'alcohol_volume' => '24',
                'degree' => '9.5',
                'description' => "This time we took it big! High alcohol content, high flake content and, most importantly, huge amounts of hops. This is the strongest NEIPA we've brewed yet, and we wanted it to taste like it. We therefore reached for a combination of Cryo Pop, Pacific Sunrise, Motueka and Talus hops to achieve a proper hop character full of papaya, passion fruit, lychee and yellow melon. This creamy and expressive beer aims to attack your senses with its intensity and warm you up nicely.",
                'beer_pic_id' => '3'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '4',
                'name' => 'Sibeeria Mango & Passion Fruit Sorbet',
                'alcohol_volume' => '11',
                'degree' => '4.4',
                'description' => "We brewed a new batch of our SORBET! with a stellar combination of mango and passion fruit. An attractive mango color with an irresistible aroma, it offers everything it promises: the sweet taste of ripe mango is balanced by the refreshing acidity of passion fruit, on a Berliner Weisse base, which we constantly refine to achieve an even finer texture while maintaining a low alcohol content.",
                'beer_pic_id' => '4'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '5',
                'name' => 'Sibeeria PaleCzech',
                'alcohol_volume' => '12',
                'degree' => '5.2',
                'description' => "PaleCzech is our latest beer built on Czech experimental hops from the 2021 harvest. This classic American Pale Ale is built on a simple, dry base with a hint of toasty notes and the distinct, earthy bitterness of Summit hops grown in Žateck. Rich cold hopping with the new Czech variety NŠH90 creates a refreshing fruity, citrus aroma not unlike the legendary California ales that defined this style. With this beer, we redefine it in our own way with the best that the fertile Czech soil has to offer.",
                'beer_pic_id' => '5'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '6',
                'name' => 'Sibeeria Everyday Life',
                'alcohol_volume' => '12',
                'degree' => '5.1',
                'description' => "Traditional. Czech. Pilsen. Classic cooking process with double decoction, long aging time and only the best Czech ingredients. We use humn malt from Mr. Klusáček's Kounice malthouse and Žatecký semi-early red hops to obtain a full malt body, a noble hop aroma and a pleasant bitterness that makes you look forward to every next sip.",
                'beer_pic_id' => '6'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '7',
                'name' => 'Sibeeria Soulmate',
                'alcohol_volume' => '13',
                'degree' => '4.6',
                'description' => "We believe that classic Czech dark lagers deserve attention and should find their way back into the pints and hearts of craft beer lovers. To help them get there, we're reviving Soulmate - a pleasantly full-bodied, roasted lager with a distinctive nutty aroma, with notes of dark chocolate and noble hops. The dark body is crowned by an impressive white crown with a pleasant creamy texture. Soulmate - soul mate.",
                'beer_pic_id' => '7'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '8',
                'name' => 'Sibeeria Grapefruit Lollihop
                ',
                'alcohol_volume' => '15',
                'degree' => '6.6',
                'description' => "A flavored version of our West Coast IPA. The aroma of grapefruit rind goes perfectly with the hops and enhances the experience. A citrus bomb, the bitterness of the grapefruit peel and the juiciness of the grapefruit flesh. You want it! Lollihop to the second.",
                'beer_pic_id' => '8'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '9',
                'name' => 'Sibeeria Make Simcoe Great Again',
                'alcohol_volume' => '17',
                'degree' => '8',
                'description' => "With the onslaught of new tropical hop varieties, people sometimes forget that Simcoe is essentially the perfect hop. Fruity, resinous, complex and fresh. We therefore decided to remind the world why it deserved to be the world's leading IPA hop for years and that it can do it with elegance even in today's 'cloudy' times. We've hopped this bitter, dry NEIPA using only Simcoe on both the hot and cold side of the process, then sprinkled in some Cryo Simcoe for an even richer citrus, pineapple, and pine-laden aroma. Pure and expressive as she always was.",
                'beer_pic_id' => '9'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '10',
                'name' => 'Sibeeria Diplomacy',
                'alcohol_volume' => '13',
                'degree' => '5.6',
                'description' => "New batch! The D-IPL-omatic mission of this beer is to build a bridge between two different brewing traditions. The bottom-fermenting yeasts we normally use for our traditional Czech lager shake hands here with representatives of the modern American aromatic hops, Mosaic and Simcoe, which we used in both whirlpool and dry-hopping. Diplomacy is a dry, pale lager with a full malt body, refreshing bitterness and a fresh hop aroma of citrus and tropical fruit, not covered by upper yeast esters.",
                'beer_pic_id' => '10'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '11',
                'name' => 'Sibeeria Lollihop',
                'alcohol_volume' => '15',
                'degree' => '6.6',
                'description' => "The brewery's flagship. American West Coast IPA packed with Citra and Mosaic, with a fresh fruity sweet aroma of tropical fruit, pineapple, resin and citrus and a hoppy bitterness with a dry finish.",
                'beer_pic_id' => '11'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '12',
                'name' => 'Sibeeria Patronus',
                'alcohol_volume' => '10',
                'degree' => '3.8',
                'description' => "Bright ten. Our brewers love it, our regulars ask for it. This non-traditional top ten with foreign hops has something in it. The body is pretty full for a ten. the cut is just right and the taste is simply excellent.",
                'beer_pic_id' => '12'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '13',
                'name' => 'Sibeeria Zima 2021',
                'alcohol_volume' => '29',
                'degree' => '11.5',
                'description' => "The tradition continues! The extra dense amber body is dominated by fruity esters from two different yeast strains. This time, however, cocoa beans are not among the ingredients, no dark malt was used and the beer is more fermented. Winter 2021 will keep you warm even in winter!",
                'beer_pic_id' => '13'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '14',
                'name' => 'Sibeeria JZP',
                'alcohol_volume' => '20',
                'degree' => '8.5',
                'description' => "Náměstí Jiřího z Poděbrady is the place where our journey to craft beer began. Years ago, we started introducing locals to the world of craft beer here at the BeerGeek pivot and bar. We decided to brew a special beer in Sibeeria as a tribute to Vinohrady and JZP, as the square is called among the locals. Full of hops from around the world, this Double NEIPA is dry, smooth and fruity juicy followed by a significant bitterness that we miss in many NEIPAs.",
                'beer_pic_id' => '14'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '15',
                'name' => 'Sibeeria Big Maple Tree',
                'alcohol_volume' => '30',
                'degree' => '10.8',
                'description' => "The sensory sweetness of delicious Canadian maple syrup has allowed us to push the boundaries of our grand stouts even further. With Big Maple Tree, we increased the bitterness and roast to create the perfect balance of both flavors. Light saturation with a smooth texture creates a captivating avalanche effect that is pleasing to the eye, while the decadent aroma of thick maple syrup mixed with molasses and fruity coffee notes will delight the nose of any lover of quality dark beers.",
                'beer_pic_id' => '15'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '16',
                'name' => 'Sibeeria ESCape',
                'alcohol_volume' => '18',
                'degree' => '7.8',
                'description' => "We've always loved strong and hoppy beers and this was one of the very first we ever brewed. When we decided to revive it after many years, we discovered that some things just don't change - Ekuanot, Simcoe and Columbus are still divine and bitter DIPAs are still a liquid form of joy. To take advantage of what has changed since 2016, we have applied Ekuanot cold hopping in an enhanced version of Lupomax to achieve even more powerful hops with a significant dose of nostalgia. It offers a clear, dry body with noticeable sweetness and high bitterness with a proper fruit-resin aroma, just like DIPAs used to taste.",
                'beer_pic_id' => '16'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '17',
                'name' => 'Sibeeria Fogtown',
                'alcohol_volume' => '12',
                'degree' => '4.9',
                'description' => "We are once again bringing a slightly more pleasant fog to our streets. This cloudy APA has the lovely smooth, full texture we all love, but at a slightly more drinkable 4.9% alcohol. We've used a varied blend of hops in the same amount we add to our stronger beers to delight your senses with the wild exotic aroma of ripe papaya with an intense dose of coconut and a hint of vanilla.",
                'beer_pic_id' => '17'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '18',
                'name' => 'Sibeeria Echoes of Childhood',
                'alcohol_volume' => '11',
                'degree' => '3.5',
                'description' => "New batch! Echoes of Childhood is our most popular beer that we brew regularly every summer. Even at 3.5% alcohol, it's a really thick and cloudy NEIPA with tropical notes of mango, passion fruit and honeydew melon, which we infused with Enigma and Motueka varieties. And we left it pretty hoppy. It's refreshing - and you want to have another one right away!",
                'beer_pic_id' => '18'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '19',
                'name' => 'Sibeeria Yummy Pink Guava, Peach, Passion Fruit & Vanilla',
                'alcohol_volume' => '22',
                'degree' => '5.4',
                'description' => "New batch! Our most exotic Yummy, our low-alcohol multivitamin juice combines passion fruit with pink guava and a touch of peach, accented by Mexican vanilla. The final result is the very definition of summer in a glass, which would not be lost on the breakfast table. Not that we are implying anything, just informing.",
                'beer_pic_id' => '19'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '20',
                'name' => 'Sibeeria Mantra',
                'alcohol_volume' => '29',
                'degree' => '11.8',
                'description' => "Peanut butter is a perfect example of how sweet and salty can work together—and it's also the perfect addition to an imperial stout. To make it a perfect match, we put in less roasted malt and added loads of dark sugar to bring out the caramel and molasses notes that blend beautifully with the flavor of the defatted peanut butter. As it warms in your glass, the peanuts begin to rise above the dark chocolate aroma. This isn't a pastry stout, it's a proper smooth stout with a modern twist.",
                'beer_pic_id' => '20'
            ],
            [
                'brewery_id' => '1',
                'beer_type_id' => '21',
                'name' => 'Sibeeria & Arpus Brewing One Night In Hell',
                'alcohol_volume' => '30',
                'degree' => '11.7',
                'description' => "When we agreed with the guys from Ārpus brewery to brew a strong stout with fruit, it was clear to us that it would not be an easy process, but we did not expect to brew one batch from morning to morning. But sometimes it's worth it - especially when the result is a robust, velvety imperial stout, in which the aromas of molasses, dark chocolate and gingerbread mix with the smoky character of dried plums, which increases in intensity as the beer warms in the glass. It was truly an endless night, but we're always happy to push our limits for a good cause!",
                'beer_pic_id' => '21'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '22',
                'name' => 'All Night Long',
                'alcohol_volume' => '13',
                'degree' => '5.5',
                'description' => "This Hels Bells Indian Pale Ale is already the fifth piece in the Hels Bells Beers series, but the first that we have brewed for you with real hard rock dedication ourselves.",
                'beer_pic_id' => '22'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '23',
                'name' => 'Aniseed',
                'alcohol_volume' => '15',
                'degree' => '6.3',
                'description' => "Aniseed is a strong India Pale Ale with Tasmanian Enigma hops. Get ready for a hop load with the aroma of raspberries and currants. Australian brewer Filip Miller brewed this beer for Tasmanian devils in Pilsen.",
                'beer_pic_id' => '23'
            ],

            [
                'brewery_id' => '2',
                'beer_type_id' => '24',
                'name' => 'Drifters',
                'alcohol_volume' => '15',
                'degree' => '6.3',
                'description' => "The combination of a huge dose of hops with high drinkability is a never-ending battle that we are determined to win. Drifter APA goes into it along with six hops from the USA and Australia.",
                'beer_pic_id' => '24'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '25',
                'name' => 'DBC IPA',
                'alcohol_volume' => '15',
                'degree' => '6.3',
                'description' => "Cooking with Yankee&Kraut definitely means creating a new style, and here you have it. A little bit of Imperial Milk Stout, a little bit of Double IPA, and a little bit of something completely different, anyway with a good load of hops from the USA, Germany and New Zealand.",
                'beer_pic_id' => '25'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '26',
                'name' => 'Gunslinger',
                'alcohol_volume' => '12',
                'degree' => '5.3',
                'description' => "When five-time Danish 'homebrewing gold medal' winner Kim Johansen (KJ Brewing) comes running to us to brew his winning Gunslinger IPA, you can be sure that your hop supply won't stand a chance. Packed with Citra and Amarillo, the Gunslinger takes no prisoners.",
                'beer_pic_id' => '26'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '27',
                'name' => 'Hay-Z-Wave',
                'alcohol_volume' => '20',
                'degree' => '8.7',
                'description' => "Bursting with citrus and tropical fruits, our NEIPA has a heart of haze and isn't afraid to show it.",
                'beer_pic_id' => '27'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '28',
                'name' => 'I Love You Pumpkin',
                'alcohol_volume' => '15',
                'degree' => '6.4',
                'description' => "Our autumn special is as wholesome as American Pumpkin Pie, with 100kg of roasted pumpkins in each batch along with our special spice blend.",
                'beer_pic_id' => '28'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '29',
                'name' => 'Laid To Waste',
                'alcohol_volume' => '15',
                'degree' => '6.1',
                'description' => "An extreme beer brewed especially for Pilsen's most extreme thrash metal band. We've thrown in loads of hops for authentic moshpit aromas of cheap deodorant and puddles of blood and sweat.",
                'beer_pic_id' => '29'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '30',
                'name' => 'Liberation But',
                'alcohol_volume' => '14',
                'degree' => '6',
                'description' => "As part of Pilsen's Liberation Festival celebrations, we've crafted a special golden ale with a combination of Czech and American ingredients. There are 6 hop varieties and 5 malts to mark the special date - 6.5.1945.",
                'beer_pic_id' => '30'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '31',
                'name' => 'Mandarin',
                'alcohol_volume' => '20',
                'degree' => '9',
                'description' => "Deceptively simple, our Mandarin Sour is bursting with the distinctive aroma of freshly peeled mandarins, backed up by a refreshingly tart finish.",
                'beer_pic_id' => '31'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '32',
                'name' => 'New Norway IPA',
                'alcohol_volume' => '14',
                'degree' => '6',
                'description' => "Our Kveik IPA created in collaboration with the KOMA brewery is one of the most interesting we have ever brewed. The combination of Norwegian farm yeast and tons of tropical hops will take you in unexpected directions. Skål!",
                'beer_pic_id' => '32'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '33',
                'name' => 'Pacific IPA',
                'alcohol_volume' => '9',
                'degree' => '3.5',
                'description' => "Australia and New Zealand have much more in common than just being located in the South Pacific, such that both countries grow fantastic hops. Our Pacific IPA uses New Zealand's Taiheke and Australia's Galaxy hops to create a luscious New World ale.",
                'beer_pic_id' => '33'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '34',
                'name' => 'Raven 12',
                'alcohol_volume' => '14',
                'degree' => '6.7',
                'description' => "Even rebels have to try to fit in a bit once in a while. With that in mind, we present our 'Pilsen-style lager': unfiltered and unpasteurised; bright golden; assertively bitter with a generous dose of the finest Saaz. Now on tap at your nearest Raven Pub.",
                'beer_pic_id' => '34'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '35',
                'name' => 'The Revenant',
                'alcohol_volume' => '14',
                'degree' => '6',
                'description' => "Warming and invigorating, our Imperial Stout is a treat for the senses. Settle back by the fireplace and let the rich dark malts caress your soul.",
                'beer_pic_id' => '35'
            ],
            [
                'brewery_id' => '2',
                'beer_type_id' => '36',
                'name' => 'West Boast IPA',
                'alcohol_volume' => '12',
                'degree' => '5.1',
                'description' => "Together with Tanker from Estonia, we have crafted a unique take on a West Coast IPA, with equal measures of American and Bohemian hops. West Boast IPA had its world premiere at Braukunst Live! 2017 in Munich.",
                'beer_pic_id' => '36'
            ],

];

        foreach($beers as $beerex) {
            $beer = new Beer;
            $beer->brewery_id = $beerex['brewery_id'];
            $beer->beer_type_id = $beerex['beer_type_id'];
            $beer->name = $beerex['name'];
            $beer->alcohol_volume = $beerex['alcohol_volume'];
            $beer->degree = $beerex['degree'];
            $beer->description = $beerex['description'];
            $beer->beer_pic_id = $beerex['beer_pic_id'];
            $beer->save();
        }
    }
}

