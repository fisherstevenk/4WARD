---
layout: post
title:  "2023-07 Meld Bank Manager, ADA Bounties, and 151k Pledge"
---
<br><br>

### Latest News ###

It's been a while since I wrote an update. Between finally getting the Meld Bank Manager NFTs out, getting ADA Bounties to Mainnet, and trying to live life, not much time was left for other things. More projects are on the horizon, but it's important to stop a second, reflect, and recharge. 

Let's take a look back at these past 2 months..

### Meld Bank Manager NFT ###

The [Meld Bank Managers](https://meld.freeloaderz.io){:target="_blank"} were announced over one and a half years ago, maybe longer. In March of 2022, Meld and Freeloaderz got together to put out the Bank Managers. Meld was a big fan of what we were trying to do with Freeloaderz for the Cardano Community, so they wanted to support us.

For various reasons, most of which delt with Meld's bad luck with artists, the NFTs were delayed. Fast forward to Spring of this year and things were finally in order. I had the front end done for the site early on as it was just a build on to SmartClaimz. Initially we were working with Drasil, who we had partnered with for SmartClaimz, but Torben, (the lead dev) took a job with WMT. That didn't leave a lot of time for anything else, we had to move forward. We talked with, and worked with, some others for a little while, but we ultimately decided to build the entire thing ourselves. I ended up writing the back end control server for the off chain handling as well as the back end on chain server, the full stack. Matt Plomin took on the bulk operations Meld needed for the NFTs. It took a little over a month, but everything finally came together, and on June 5th, we launched!

The launch went fairly smooth. I did have to make some changes to the transaction creation. It seemed like every person with a "degen" wallet was trying to claim their Bank Manager. There were a ton of "min Babbage UTXO" errors. Eventually, I changed the logic to run through all four input strategies for the Cardano Serialization Library plus a custom one I wrote. Those changes ended up making the difference and things have been rolling since then.

Part of our partnership with Meld was that Meld would give Freeloaderz a Gold Bank Manager and a couple other random Bank Manager NFTs. Freeloaderz manages load balancers for the Submit API and was running SmartClaimz. Both have (had for SmartClaimz, as we, unfortunately, shut down the site) monthly fees to pay. To raise some money, the Bank Managers were raffled off. We had one lucky winner for the Bank Manager and 5 other winners for one of the random other Bank Manager NFTs:

{:refdef: style="text-align: center;"}
![Meld](/img/meld/2023-07-gold-bm-raffle.jpg){: .md__image id="2023-07-gold-bm-raffle" onclick="openModal(\"2023-07-gold-bm-raffle\")" style="width:334 px;height:195px;"}
{: refdef}


<br><br>

### ADA Bounties is on Mainnet! ###

[ADA Bounties](https://adabounties.io){:target="_blank"} is our funded Catalyst Fund 9 project. This past week, we pushed ADA Bounties to Mainnet! We also submitted our Catalyst Close Out Report. 

I've been working on ADA Bounties since November of 2022. It really hasn't been a long period of time, but I completed a ton of work to push it to Mainnet.

With ADA Bounties, anyone can connect their Cardano Web3 wallet to create an account. They can then create bounties or claim bounties. The goal of the site is to bring people who need work done, together with those who want to get some work done. It's a powerful platform but it needs to be used. I'm hopeful that between superior tech and the ADA Bounties social media presence, that it will get there.

If you are on Twitter, follow the [@ADABounties](https://twitter.com/AdaBounties){:target="_blank"} account to get the latest and greatest information about ADA Bounties.

<br><br>

### 151k Pledge ###

I've been putting the majority of my ADA Bounties Catalyst payments towards my ADA for Warriors pledge. Between the project funds and personal funding, I've been able to increase my pledge from 20k in November 2022, to 151k in June 2023. For the first year and a half in Cardano, I did all my work for free. It was a new community for me, so I felt that I had to establish myself. There are a lot of "developers" in the community, but those that can close out are few and far between. I trusted in myself and my work ethic, and it's been paying off.

I'm more than thankful to have the support of my family and the friends I've made along the way. Without them all, none of this would've happened. So, thank you.

{:refdef: style="display:flex;text-align: center;"}
![Pledge Info](/img/2023-07-08-pledge-info.jpg){: .md__image id="2023-07-08-pledge-info" onclick="openModal(\"2023-07-08-pledge-info\")" style="width:392px;height:247px;"}
{: refdef}


<br><br>

### Mission Donations ###

May and June were good months for ADA for Warriors. The last epoch of the Cardano Foundation delegation is included in there. We also had some really good growth after receiving the CF delegation and are now creating blocks fairly regularly.

For those that joined us this year, I sincerely thank you. You are helping to support some extremely important missions. For those that have been here longer than that, some even going way back to the beginning, you are my rocks. Thank you for that. 

With that growth, we've been adding to our pool pledge, but we haven't changed our 340/0% fee and we won't change it, (unless the parameters change of course). 

If you aren't delegating with us, we sincerely hope that you consider it.

<br><br>
_(The USD donations to the Third Option Foundation and 500 Rising were calculated using the 2023-07-08 price of ~$.2890/₳)_
<br><br>
Below is the amount donated to each mission on July 8th, 2023. Their links are included if you would like to donate directly to their causes.

[Third Option Foundation](https://www.thirdoptionfoundation.org/support-us#support){:target="_blank"} $176.87

{:refdef: style="display:flex;text-align: center;"}
![Donation](/img/tof/2023-07-08-TOF-Donation.jpg){: .md__image id="2023-07-08-TOF" onclick="openModal(\"2023-07-08-TOF\")" style="width:348px;height:180px;"}
{: refdef}

[500 Rising](https://500rising.com/donate-1){:target="_blank"} $58.96

{:refdef: style="display:flex;text-align: center;"}
![Donation](/img/rising/2023-07-08-500-Donation.jpg){: .md__image id="2023-07-08-500" onclick="openModal(\"2023-07-08-500\")" style="width:308px;height:518px;"}
{: refdef}

[Captive Audience](https://www.captiveaudienceptrt.com/support-ukraine-ocv){:target="_blank"} 204 ₳

{:refdef: style="display:flex;text-align: center;"}
![Donation](/img/ca/2023-07-08-CA-Donation.jpg){: .md__image id="2023-07-08-CA" onclick="openModal(\"2023-07-08-CA\")" style="width:373px;height:126px;"}
{: refdef}
<br><br>

### Wrap Up ###

In these past two months, we developed and deployed two gigantic projects for Mainnet, the [Meld Bank Managers](https://meld.freeloaderz.io){:target="_blank"} and [ADA Bounties](https://adabounties.io){:target="_blank"}.  I need a little time for myself and my family, but then it'll be back to the grind. Mehen is the next to get rolled out.