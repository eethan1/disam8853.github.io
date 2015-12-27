---
title: 在google code-in 的第一個task
---
<p class="lead">Google Code-in是一個由google舉辦給13到17歲學生的比賽，由許多像是[FOSSASIA](http://fossasia.org)的open source社群出任務，完成一個任務就可以獲得一張電子證書，3個任務可獲得一件google的T-shirt，最後每個社群還可邀請兩個學生前往位於加州的google總部參觀，<p>

## 任務說明
>See https://phabricator.wikimedia.org/T119450

>Go to https://transparency.wikimedia.org/content.html
Scroll down to “Which Wikimedia projects were targeted?” (why don't headers there have an id?)
Select "All"
The third bar is «Not a WMF site» with 4 requests.
The last bar is «Not a WMF site» with 1 request.
Expected: «Not a WMF site» would appear only once, with 5 requests.

>The codebase is under https://gerrit.wikimedia.org/r/#/admin/projects/wikimedia/TransparencyReport - you are expected to check out the codebase and provide a patch in Wikimedia Gerrit to fix this issue.

##過程

翻成中文就是要我在[這個](https://transparency.wikimedia.org/content.html) 網站下面的統計中，合併兩個相同的選項，對於一個寫出這麼漂亮網站的人來說，不可能犯這種小錯誤，所以一定是故意給GCI學生的bug，所以我就二話不說給他cliam了。

結果只是他統計資料中數據的英文字母大小寫不一樣而導致程式判定成兩個不同的選項而已。

##成果
我上傳在gerrit上的patch
<img src="http://screenshot.net/847dzcp.jpg">

##總結

在找bug的過程中，我也順便了解了[d3.v3.min.js](https://gist.github.com/grantmichaels/5237322) 和[jquery.js](https://jquery.com/download/) 這兩個javascript函式庫的一小部份，之後又花了更多時間學怎麼用[Gerrit](https://gerrit.wikimedia.org)，Gerrit比較少人用，大部分的教學都只有英文，對於一個英文不好的高中生來說，要學會真的有點困難，幸好當時段考剛好考完有充份的時間去閱讀，另外我用菜英文問的問題，mentors都很有耐心的幫我找解決辦法，現在回去看當時的流言，我都覺得很丟臉。

總而言之，我還是完成了我再GCI的第一個task，太棒了！