<template lang="">
  <div class="">
    <AboutSection :themeRight="true" :index="0">
        <!-- About -->
        <div slot="left" class="contentWrapper left">
            
            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/index__pageLogo.svg"/>
                <h1>關於學院</h1>
                <h4>ABOUT</h4>
            </div>

            <div class="subjectSection">
                <p>D-School積極的與各院討論合作，讓不同系所的老師共同腦力激盪，一同架構學院課程的主幹。</p>
                <p>學生在D-School不僅可以學會解決問題的方法，更可利用學校提供的資源與設備，在實作中心把想法實踐！</p>
            </div>
            
            <div class="button">了解更多！</div>
            
        </div>
        <div slot="right">
            <img class="bigD" src="assets/about_sectionAbout_BigD.png"/>
        </div>
    </AboutSection>
    <AboutSection :index="1">
        <!-- Media -->
        <div slot="left" class="contentWrapper left noOverflow">
            
            <img class="titleIconBig" src="assets/about_sectionMedias_titleIconBig.svg"/>

            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/about_sectionMedias_titleIcon.svg"/>
                <h1>學院影音</h1>
                <h4>MEDIA</h4>
            </div>

            <div class="subjectSection">
                <p>在創新創業風氣興盛後，臺大覺察學校創新教育的不足，遂於2014年成立創新設計學院，並於2015年秋季正式授課。</p>
                <p>為全台大共有的學院—D-School。使創新概念最終成為現實可行的方案，確實實現。</p>
            </div>
            
            

        </div>
        <div slot="right" class="row">
            
                <div class="col" :style="{flex: '1'}">
                    <div class="colContentWrapper">
                        <div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/-DhG1NnmPLs?rel=0&amp;showinfo=0?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>
                    </div>
                    <div class="colContentWrapper inverted padded">
                        <h2>影片相關敘述</h2>
                        <p>在創新創業風氣興盛後,臺大覺察學校創新教育的不足，遂於2014年成立創新設計學院，並於2015年秋季正式授課。為全台大共有的學院—D-School Structure 改設計。使創新概念最終成為現實可行的方案，確實實現。</p>
                    </div>
                </div>

                <div class="col" :style="{flex: '1'}">
                    <div class="colContentWrapper padded">
                        <div class="titularSectionSmall">
                            <h2>其他的介紹在這</h2>
                            <h3>Structure</h3>
                        </div>
                        <p>創新設計學院為台大的一級性功能單位*，也是臺灣第一個具有實體空間的虛擬學院，由校長任命學術副校長為執行長，統籌各院的需求成立跨領域的教學與研究的環境，在執行長之上有由台大的11個學院的院長組成的諮詢委員會，也任命副執行長(現為工學院院長、管理學院院長、社科學院院長)協助管理與規劃，在執行面有負責整體行政事務的行政組，負責課程規劃與執行的教學組，以及負責人文社會議題的人社組。</p>
                        <p>為免於創意流於空想，將想像落實於生活，學院內部建置實作中心，提供應有的資源與設備；開設工作坊課程，協助學生執行創新構想時所需的技術技能。透過多元的製造設備能迅速打造設計的原型、反覆測試並修改設計。使創新概念最終成為現實可行的方案，確實實現。</p>
                    </div>
                </div>
            
        </div>
    </AboutSection>
    <AboutSection :index="2" :layer="section2Layer" :totalLayers="1">
        <!-- // Q&A -->
        <div slot="left" class="contentWrapper left noOverflow">
            

            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/about-03.svg"/>
                <h1>學院大哉問</h1>
                <h2>Q&A</h2>
            </div>

            <div class="subjectSection">
                <p>D-School積極的與各院討論合作，讓不同系所的老師共同腦力激盪，一同架構學院課程的主幹。</p>
                <p>學生在D-School不僅可以學會解決問題的方法，更可利用學校提供的資源與設備，在實作中心把想法實踐！</p>
            </div>
            
            <div @click="toggleQALayer()" class="button">了解更多！</div>

        </div>
        <div slot="right" class="contentWrapper" :style="{padding:0}">

            <div id="desktop-qa" :class="{layer2: (this.section2Layer === 1)}">
                <div class="questionSection">
                    <div class="col">
                        <div class="note">ONE</div>
                        <div class="dialogue" @click="toggleQALayer()">
                            
                            <img class="bubble" src="assets/about_sectionQa_dialogBlueL.svg"/>
                            <div class="dialogueInner">
                                <h3>咦~台大創新設計學院是什麼地方啊?平常都在幹嘛呢~?</h3>
                            </div>
                        </div>
                        <div class="description" :class="{show: (section2Layer == 1)}">
                            <p>創新設計學院以創造跨領域合作為目標，邀請不同系所、不同專業的師生來到學院。</p>
                            <p>開設校內學分課程、舉辦工作坊及講座活動等。並設計優質的討論空間及休息室，讓大家在舒適的環境中發揮想像和創意。</p>
                            <p>同時，學院為了鼓勵同學們將想法落實，提倡動手做的精神，我們也建置了「實作中心」!實作中心內設有雷射切割機、3D印表機、CNC等等機械設備。所以~只要你走近學院，就會發現有人在上課、在為了某個理想激烈討論、在放空思索人生、在把玩機械或是模型、或是在吃東西</p>
                        </div>
                    </div>
                    <div class="col">
                    </div>
                </div>
                <div class="questionSection R">
                    <div class="col">
                    </div>
                    <div class="col">
                        <div class="note">TWO</div>
                        <div class="dialogue">
                            <img class="bubble" src="assets/about_sectionQa_dialogBlueR.svg"/>
                            <div class="dialogueInner">
                                <h3>哇~創新設計學院好有趣喔~我可以報考嗎?</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="questionSection">
                    <div class="note">THREE</div>
                    <div class="dialogue">
                        <img class="bubble" src="assets/about_sectionQa_dialogBlueL.svg"/>
                        <div class="dialogueInner">
                            <h3>為什麼台大會建立創新設計學院呢?學院是怎麼運作的呢?</h3>
                        </div>
                    </div>
                </div>
                <div class="questionSection R">
                    <div class="note">FOUR</div>
                    <div class="dialogue">
                        <img class="bubble" src="assets/about_sectionQa_dialogBlueR.svg"/>
                        <div class="dialogueInner">
                            <h3>那麼~我要如何參與學院大小事呢?</h3>
                        </div>
                    </div>
                </div>
                <div class="questionSection">
                    <div class="note">FIVE</div>
                    <div class="dialogue">
                        <img class="bubble" src="assets/about_sectionQa_dialogBlueL.svg"/>
                        <div class="dialogueInner">
                            <h3>我需要具備什麼樣的能力才能參與嗎?</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
                
            
        </div>
    </AboutSection>
    <AboutSection :index="3" :flipLeft="true" :flipRight="true">
        <!-- Chronology -->
        <div slot="left" class="contentWrapper flipped left noOverflow">
            <img class="titleIconMedium" src="assets/about_sectionChronology_titleIconBig.svg"/>

            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/about_sectionChronology_titleIcon.svg"/>
                <h1>學院年表</h1>
                <h4>Chronology</h4>
            </div>

            <div class="subjectSection">
                <p>一年中,會發生哪些事情呢?</p>
                <p>從熱呼呼的七八月,夏天催著滿身的汗水, 到九月十月,開學再次踏入令人懷念的校園</p>
            </div>
        </div>
        <div slot="right" class="contentWrapper noPadding">
            <div id="calendarWrapper">
                <svg ref="bgSvg" class="bgSvg">
                    <line x1="0" :x2="800" y1="(n - 1)  * 30" y2="(n - 1)  * 30" v-for="n in 30" />
                </svg>
                <div class="months">
                    <div class="month">
                        <div class="content">
                            <img class="icon" src="assets/about_sectionChronology_monthIcon9.svg"/>
                            <h1>9月</h1>
                            <h4>上學期開學</h4>
                            <h4>課程說明會/選課</h4>
                        </div>
                        <svg class="border right">
                            <line x1="1" x2="1" :y1="(n - 1) * 20" :y2="((n - 1) * 20) + 15" v-for="n in 30" />
                        </svg>
                        <svg class="border left">
                            <line x1="1" x2="1" :y1="(n - 1) * 20" :y2="((n - 1) * 20) + 15" v-for="n in 30" />
                        </svg>
                    </div>
                    <div class="month">
                        <div class="content">
                            <img class="icon" src="assets/about_sectionChronology_monthIcon9.svg"/>
                            <h1>10月</h1>
                            <h4>21%跨領域教師交流會</h4>
                            <h4>實作中心工作坊</h4>
                        </div>
                        <svg class="border right">
                            <line x1="1" x2="1" :y1="(n - 1) * 20" :y2="((n - 1) * 20) + 15" v-for="n in 30" />
                        </svg>
                        <svg class="border left">
                            <line x1="1" x2="1" :y1="(n - 1) * 20" :y2="((n - 1) * 20) + 15" v-for="n in 30" />
                        </svg>
                    </div>
                    <div class="month">
                        <div class="content">
                            <img class="icon" src="assets/about_sectionChronology_monthIcon9.svg"/>
                            <h1>11月</h1>
                            <h4>大型講座活動</h4>
                            <h4>實作中心工作坊</h4>
                        </div>
                        <svg class="border right">
                            <line x1="1" x2="1" :y1="(n - 1) * 20" :y2="((n - 1) * 20) + 15" v-for="n in 30" />
                        </svg>
                        <svg class="border left">
                            <line x1="1" x2="1" :y1="(n - 1) * 20" :y2="((n - 1) * 20) + 15" v-for="n in 30" />
                        </svg>
                    </div>
                </div>
                
            </div>
            <div id="calenderScroller">

            </div>
        </div>
    </AboutSection>
    <AboutSection :index="4" :flipLeft="true" :flipRight="true">
        <!-- Members -->
        <div slot="left" class="contentWrapper flipped left noOverflow">
            <img class="titleIconMedHeight" src="assets/about_sectionMembers_titleIconBig.svg"/>

            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/about_sectionMembers_titleIcon.svg"/>
                <h1>成員介紹</h1>
                <h4>Members</h4>
            </div>

            <div class="subjectSection">
                <p>一年中,會發生哪些事情呢?</p>
                <p>從熱呼呼的七八月,夏天催著滿身的汗水, 到九月十月,開學再次踏入令人懷念的校園</p>
            </div>
        </div>
        <div slot="right" class="contentWrapper">

        </div>
    </AboutSection>
    <AboutSection :index="5" :flipLeft="true" :flipRight="true">
        <!-- Members -->
        <div slot="left" class="contentWrapper flipped left noOverflow">
            

            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/about_sectionMembers_titleIcon.svg"/>
                <h1>空間介紹</h1>
                <h2>Space</h2>
            </div>

            <div class="subjectSection">
                <p>D-School積極的與各院討論合作，讓不同系所的老師共同腦力激盪，一同架構學院課程的主幹。</p>
                <p>學生在D-School不僅可以學會解決問題的方法，更可利用學校提供的資源與設備，在實作中心把想法實踐</p>
            </div>

            <div class="button">了解更多！</div>

        </div>
        <div slot="right" class="" :style="{padding:0,position:'absolute',top:0,left:0,height:'100vh'}">
                
                <img class="spaceMap" src="assets/about_sectionMembers_spaceMap.svg"/>
                <div class="spaceBottomInfo">
                    <div>
                        <img src="assets/last.png" :style="{marginBottom:'-5px',width:'240px'}"/>
                    </div>
                    <div class="description">
                        <div>
                            <div class="titleBlock">實作中心</div>
                            <br/><br/>
                            <p>小小的可是很多奇妙的工具和機械,就不用再說它有多熱門和受大家喜愛了!</p>
                            <br/>
                            <div class="buttonWrapper">
                                <div class="button">了解更多</div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    </AboutSection>

    <IndicatorGroup :sections="6" :left="indicatorLeft" top="calc(50vh - 70px)"></IndicatorGroup>
  </div>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex';

import IndicatorGroup from '@/components/reused/IndicatorGroup';
import AboutSection from '@/components/page-sections/AboutSection';

import AboutSection1 from '@/components/page-sections/AboutSection1';

export default {
    name: 'AboutPage',
    components: {
        AboutSection,
        IndicatorGroup
    },
    data () {
        return {
            section2Layer: 0
        }
    },

    props: {
        contents: {
            required: false,
            type: Object
        }
    },
    methods: {
        getTranslation (name) {
            if (name.indexOf('.') != -1) {
                // Process object tree
                let ns = name.split('.');
                let ref = LANG[ns[0]];
                for (let i = 1; i < ns.length; ++i ) {
                    // Tree into the object
                    ref = ref[ns[i]];
                }
                return ref;
            }
            return LANG[name];
        },
        toggleQALayer () {
            if (this.section2Layer === 0) {
                this.section2Layer = 1;
                // Allow free scrolling
                this.toggleControlledScrolling(false);
            } else {
                // Disable free scrolling and go back
                this.toggleControlledScrolling(true);
                this.section2Layer = 0;
            }
        },
        ...mapActions({
            changePageLogoState: 'changePageLogoState',
            setMenuStyle: 'setMenuStyle',
            changePageLogoState: 'changePageLogoState',
            toggleControlledScrolling: 'toggleControlledScrolling'
        })
    },
    mounted () {
        window.scrollTop = 0;
        document.body.scrollTop = 0;
    },
    computed: {
        indicatorLeft () {
            if (this.pageSectionIndex >= 3) {
                return '20px';
            } else {
                return 'calc(37.5vw + 10px)';
            }
        },
        ...mapGetters({
            pageSectionIndex: 'pageSectionIndex'
        })
    },
    watch: {
        pageSectionIndex (newVal) {
            if (newVal >= 3) {
                this.setMenuStyle(1);
                this.changePageLogoState(2);
            } else {
                this.setMenuStyle(0);
                this.changePageLogoState(1);
            }
        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../shared'

// =scaleHeaderType ($scale: 1)
//     font-size: $scale * 16px
.contentWrapper.noPadding
    padding: 0
.contentWrapper
    position: relative
    padding: 0 64px

    h1, h2, h3, h4, h5
        color: $theme1
    // h1
    //     +scaleHeaderType (3)
    
    .titleIconBig
        position: fixed
        bottom: -8vw
        left: -5vw
        max-width: 48vw
        pointer-events: none
    .titleIconMedium
        position: fixed
        bottom: -8vw
        left: 0vw
        max-width: 37.5vw
    .titleIconMedHeight
        position: fixed
        bottom: 0vw
        left: 6vw
        max-width: 24vw
    

    .titularSection
        margin: 4px 0 30px 0
        padding: 10px 0
        max-width: 240px

        .iconSmall
            width: 60px
            margin-bottom: 15px
            margin-top: -15px

    .titularSection::after
        content: ' '
        display: block
        position: relative
        bottom: -10px
        left: 0
        width: 30%
        border-bottom: 6px solid $theme1

    .subjectSection
        p
            padding: 8px 0

    .button
        position: relative
        display: inline-block
        padding: 8px 30px 6px 30px
        background: $theme1
        color: white
        font-weight: 700
        font-size: 16px

// Flipped version
.contentWrapper.flipped
    position: relative
    padding: 0 64px
    color: white

    h1, h2, h3, h4, h5
        color: white
    // h1
    //     +scaleHeaderType (3)
    
    .titularSection::after
        border-bottom: 6px solid white

    .button
        position: relative
        display: inline-block
        padding: 8px 30px 6px 30px
        background: white
        color: $theme1
        font-weight: 700
        font-size: 16px


// Multi-Column Typesetting
.row
    position: relative
    width: 100%
    height: calc(100% - 64px)
    padding: $pagePadding 0

// for elements under .col
.colContentWrapper
    margin: $pagePadding
    background: white
    min-height: 100px
    min-width: 200px
    
.colContentWrapper.inverted
    background: none
    outline: 2px solid white
    color: white

.colContentWrapper.padded
    padding: $pagePadding


.contentWrapper.left
    text-align: left

// Smaller titularSection
.titularSectionSmall
    margin: 4px 0 30px 0
    padding: 10px 0
    // max-width: 240px

    h1, h2, h3, h4, h5
        color: $theme1

    .iconSmall
        width: 40px

.titularSectionSmall::after
    content: ' '
    display: block
    position: relative
    bottom: -5px
    left: 0
    width: 30%
    border-bottom: 3px solid $theme1


// TODO: Responsive layout



// Exclusive ones

// Q&A
#desktop-qa
    // position: absolute
    
    .description
        +homePageTransitionFast
        max-height: 0
        overflow: hidden
        color: $theme1
    .description.show
        max-height: 240px
        max-width: 40vw

.questionSection
    position: relative
    display: flex
    width: calc(62.5vw - 48px)
    .col
        flex: 1
    .dialogue
        position: relative
        display: inline-block
        .bubble
            height: calc(18vh - 20px)
        .dialogueInner
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            +flexCentre
            display: flex
        h3
            position: absolute
            width: 70%
    .note
        position: absolute
        top: -36px
        color: white
        font-size: 48px

.questionSection.R
    text-align: right
    .note
        right: 0
// Right-side layer 2:
.layer2

    .questionSection
        
        width: calc(100vw - 64px)
        .dialogue
            
            
            .bubble
                height: auto
                width: 50vw
            .dialogueInner
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                +flexCentre
                display: flex
            h2
                position: absolute
                width: 70%
        .note
            position: absolute
            top: -36px
            color: white
            font-size: 48px

    .questionSection.R
        text-align: right
        .note
            right: 0


// Chronology
#calendarWrapper
    position: relative
    overflow-y: hidden
    width: 62.5vw
    min-height: 100px

    svg.bgSvg
        overflow: hidden
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%

        line
            stroke: $theme1
        
    .months
        display: flex
        flex-direction: row
        width: 62.5vw
        overflow: hidden
        .month
            position: relative
            display: flex
            min-width: 360px
            max-width: 360px
            padding: 120px 0
            border: none
            +flexCentre
            .content
                .icon
                    width: 100px
                h1
                    color: black
                    margin: 14px 0

            line
                stroke: $theme1
            .border
                position: absolute
                top: 0
                width: 1px
                height: 100%
                overflow: hidden
            .border.right
                right: 0
            .border.left
                left: -1px

#calenderScroller
    position: absolute

// Graphics
.bigD
    max-height: 80vh

.spaceMap
    position: absolute
    bottom: 50vh
    width: 80vw
    left: -9.25vw

.spaceBottomInfo
    position: absolute
    bottom: 0
    
    width: 62.5vw
    background: rgb(245,245,245)
    display: flex
    
    .description
        display: flex
        +flexCentre
        padding: $pagePadding

        .titleBlock
            display: inline-block
            font-weight: 600
            padding: 4px 24px 6px 24px
            background: $theme1
            color: white
        p
            font-size: 12px
        .buttonWrapper
            text-align: right
            .button
                font-size: 12px
                font-weight: 600
                display: inline-block
                border: 2px solid black
                padding: 3px 12px

</style>
