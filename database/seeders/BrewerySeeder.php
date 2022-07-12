<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Brewery;
use DB;

class BrewerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('breweries')->truncate();

        $breweries = [
            [
                'user_id' => "5",
                'city' => "Prague",
                'country' => "Czech Republic",
                'website' => "https://sibeeria.cz/",
                'size' => "",
                'history' => "Sibeeria Brewery is a Czech microbrewery that has been brewing since 2014. Fresh ingredients, quality technology and excellent brewer are the main reasons why Sibeeria regularly ranks among the TOP 10 Czech breweries and why it takes away prizes from competitions. Sibeeria offers mostly top-fermented beers - the brewery's flagship is Lollihop IPA - and it's producing a diverse range of beers from the American IPA, through the Belgian Saison and German Weizenbock to the dark English Stout and Porter beers. Sibeeria is not afraid to inspire abroad. In the Czech Republic it was the first brewery to start brewing light and sour Berliner Weisse, as well as one of the first to age strong beers in wooden barrels.",
                'brewery_pic_id' => "1",
            ], 
            [
                'user_id' => "6",
                'city' => "Pilsen",
                'country' => "Czech Republic",
                'website' => "https://www.pivovar-raven.cz/",
                'size' => "",
                'history' => "Madhouse. That would describe our first year. In October 2015, we sent you our first beers. The logo was being finalized the night before the first shipment and we were nervously waiting for the first reactions. Like a proper startup, we rented two garages and filled them with beer. In retrospect, we're not entirely sure how it happened, but suddenly we were sold out. The brewery began to grow rapidly, and the three of us spent around 15 hours a day there.

                After classic beers such as APA, IPA and Stout, we started doing what we founded the brewery for - experimenting. We brewed the first Czech White IPA, Cream porter and later added the first Czech sour 'Pilsener Weisse', which started an avalanche of Czech sours and finally answered the question of whether the Czechs are ready for these styles - definitely. The biggest surprise for us was when, after 6 months, we rose to fifth place in the Czech Republic on Untappd.com and immediately became one of the top Czechs in Forbes magazine.",
                'brewery_pic_id' => "2"
            ],
            [
                'user_id' => "7",
                'city' => "Portland",
                'country' => "United States",
                'website' => "https://www.rogue.com/",
                'size' => "",
                'history' => "Rogue Ales was founded in Ashland, Oregon in 1988 by three Nike, Inc. executives: Jack Joyce, Rob Strasser, and Bob Woodell.

                In 1987, Jack Joyce, Bob Woodell, past University of Oregon fraternity brothers, and another friend, Rob Strasser, were approached by Jeff Schultz, Woodell's accountant and avid home brewer, with an idea to open a brewpub.
                
                Brewmaster John C. Maier joined the company in 1989 from Alaskan Brewing. Rogue has produced more than 60 different ales. The company uses a proprietary yeast known as 'Pacman'.",
                'brewery_pic_id' => "3"
            ],
            [
                'user_id' => "8",
                'city' => "Milwaukee",
                'country' => "United States",
                'website' => "https://www.mobcraftbeer.com/",
                'size' => "",
                'history' => "At MobCraft we turn ideas into beer. Submit your idea, vote on what's next. In 2011, MobCraft founders Henry Schwartz and Andrew Gierczak dreamt up an idea for a crowdsourced brewery where the people decide what's brewed. We quickly outgrew our space in Madison and made our move to Milwaukee, WI in 2016! We love being a part of the Walker's Point Community!
                
                Several times throughout the year we leverage the power of the crowd to generate ideas for unique craft beers. Beer fans across the US submit ideas ranging from a couple flavors to tried and true homebrew recipes. The ideas go up for vote on our website. Votes are cast by placing a pre-order for the beer you would like to see brewed. The beer with the most pre-orders wins and is brewed, packaged and available for pickup at the brewery.",
                'brewery_pic_id' => "4"
            ],
        ];

        foreach($breweries as $breweryex) {
            $brewery = new Brewery;
            
            $brewery->user_id = $breweryex['user_id'];
            $brewery->city = $breweryex['city'];
            $brewery->country = $breweryex['country'];
            $brewery->website = $breweryex['website'];
            $brewery->size = $breweryex['size'];
            $brewery->history = $breweryex['history'];
            $brewery->brewery_pic_id = $breweryex['brewery_pic_id'];

            $brewery->save();
        }
    }
}