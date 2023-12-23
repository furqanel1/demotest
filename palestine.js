/* created by furqan*/

var styles=`
         .custom-palestine {
                padding: 6%;
                font-size: 14px;
                letter-spacing: -0.5px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                
         }

         .custom-right-close {
                margin-left: auto;
                font-size: 15px;
                pointer-events: auto;
                z-index: 89;
                display :flex;
                flex-direction:row;
             
            }
            .copyitbro{
                margin-right:12px;
                 font-weight: 800;
                color: rgb(0, 0, 0, 0.6);
                display :flex;
                justify-content:center;
                align-items:center;
            }
          .close_it_banner{
                 font-weight: 800;
                color: rgb(0, 0, 0, 0.6);
                
          }
            .custom-extras-add-bt {
                position: relative;
                background-color:white;
                width: 90%;
                border-radius: 10px;
                border: 0.51px solid #ddd;
            }

            .custom-caption,
            .custom-fancy,
            .custom-bold {
                margin-left: 5px;
            }

            .custom-caption {
                font-size: 10px;
                letter-spacing: -0.3px;
                z-index: 600;
                
            }

            .custom-fancy {
                color: rgb(50, 0, 200);
                font-weight: 800;
                z-index: 80;
                background-color:rgb(20,20,250,0.1);
                
                padding:1px;
                border-radius:10px;
                width:auto;
            }

            .custom-bold {
                font-weight: 800;
                font-size: 15px;
            }

            .custom-caption-container {
                opacity: 1;
                transition: opacity 0.5s ease-in-out;
            }

            .bubble-container {
                overflow: hidden;
                pointer-events: none;
            }

            .custom-bubble {
                position: absolute;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                animation: floatBubble 10s infinite;
                opacity: 0;
            }

            @keyframes floatBubble {
                0% {
                    transform: translateY(0) scale(0);
                    opacity: 0.8;
                }
                50% {
                    opacity: 0.7;
                }
                100% {
                    transform: translateY(-500px) scale(2);
                    opacity: 0.6;
                }
            }
            
            .img_copy_s{
    width:15px;
    height:15px;
}
            
    `,styleElement=document.createElement("style");styleElement.type="text/css",styleElement.styleSheet?styleElement.styleSheet.cssText=styles:styleElement.appendChild(document.createTextNode(styles)),document.head.appendChild(styleElement),document.querySelector(".palestine_support").classList.add("custom-extras-add-bt","bubble-container"),document.querySelector(".custom-extras-add-bt").innerHTML=` <div class="custom-palestine">
                <div class="f-row">
                    <div class="custom-fancy">
                        #PalestinianLivesMatter🇵🇸
                    </div>
                    <div class="custom-caption-container custom-caption">Every life is important, regardless of differences</div>
                </div>
        
                <div class="custom-right-close">
                <div class="copyitbro">
                      <img onerror="this.style.display='none'" class="img_copy_s" src="https://dl.dropboxusercontent.com/scl/fi/2aarn83ziy9moo00meuad/Picsart_23-12-23_16-26-44-557.png?rlkey=msxkspfrxz6ymvkqt8inne4j6&dl=0"></img>       
                  </div>
                <div class="close_it_banner">
                    ✕
                </div>
                
                </div>
            </div>`;const customTexts2=["#SupportPalestine \uD83C\uDDF5\uD83C\uDDF8","#SpreadUnityAndPeace ","#KindnessForAll \uD83D\uDC96","#StandForPalestine \uD83C\uDDF5\uD83C\uDDF8","#StrengthInUnity \uD83E\uDD1D","#LoveOverCruelty \uD83C\uDDF5\uD83C\uDDF8 ","#EmpathyForAll\uD83C\uDDF5\uD83C\uDDF8 ","#TransformCommunities \uD83C\uDF08","#RespectRights \uD83C\uDF10","#EqualRights \uD83C\uDDF5\uD83C\uDDF8","#CreatePositiveChange \uD83C\uDF0A","#InspireWithDeeds \uD83C\uDF1F","#SaveChildren \uD83C\uDDF5\uD83C\uDDF8\uD83D\uDE4F","#StartPositivity \uD83C\uDF1E","#HopeForAll \uD83C\uDDF5\uD83C\uDDF8","#ProveHumanity \uD83D\uDCD6"],customTexts=["Every life matters regardless of differences","Spread peace, create harmony ☮️\uD83D\uDC96","Kindness speaks a universal language \uD83D\uDC96","Healing starts with compassion \uD83C\uDF31","Unity brings strength and resilience \uD83E\uDD1D","Choose love, kindness over cruelty ❤️","Build a world of empathy \uD83C\uDF0F","Positive actions transform communities \uD83C\uDF08","Strive for a future with respected rights \uD83C\uDF10","Human rights are equal for Palestinians \uD83C\uDDF5\uD83C\uDDF8 too \uD83E\uDD17","Create ripples of positive change \uD83C\uDF0A","Inspire through words and deeds \uD83C\uDF1F","Children are pure, they are unaware \uD83D\uDE4F","Start positivity within yourself \uD83C\uDF1E","Hope for everyone to live abundantly \uD83C\uDF08","Prove you're human in life's storybook \uD83D\uDCD6"];function getRandomColor(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function createBubble(){let e=document.createElement("div");e.className="custom-bubble",e.style.top=100*Math.random()+"vh",e.style.left=100*Math.random()+"vw",e.style.borderRadius="50%",e.style.backgroundColor=getRandomColor();let t=["https://dl.dropboxusercontent.com/scl/fi/olb6bhyacvoz6tnov7dl0/images-24.jpeg?rlkey=5anqxkw62uoi5x2rjdtyuvu8v","https://dl.dropboxusercontent.com/scl/fi/b883v7mrjedd7ud9xmku0/images-23.jpeg?rlkey=ygrtzq8i35kv0b6cuw2b26iuq","https://dl.dropboxusercontent.com/scl/fi/7y7tlfjddyj0452kfaodm/images-22.jpeg?rlkey=apgxgk48byg55l0inczwv8kt6","https://dl.dropboxusercontent.com/scl/fi/tii81gr0vv4h2gpyuj3ru/images-21.jpeg?rlkey=axrle96sek2i8hwc6wezqbvsf","https://dl.dropboxusercontent.com/scl/fi/wqif6p2wc5qw3i7rrf0wn/images-20.jpeg?rlkey=v8msazht2ntcuw61uuzwpukuy","https://dl.dropboxusercontent.com/scl/fi/31x2fgnfqfmo4m35vo3th/images-19.jpeg?rlkey=yxwngonlndanf152gvf91bjs0","https://dl.dropboxusercontent.com/scl/fi/2oosfv4efhe3ow1m85w44/images-18.jpeg?rlkey=bdsj69mxq38cptevfls689l0z","https://dl.dropboxusercontent.com/scl/fi/w79qictnsub61kxvpv4yp/images-17.jpeg?rlkey=oqexj9z27j8vqe0u6zastxsp5","https://dl.dropboxusercontent.com/scl/fi/68i4zpm07yqgd4v8hd0ne/images-16.jpeg?rlkey=zsxob5pvfyeoccqsqycd5va2r","https://dl.dropboxusercontent.com/scl/fi/fv4msja4gu18uit3yzaed/images-15.jpeg?rlkey=7iiyjsokaq9p3f7tixc17p8q3","https://dl.dropboxusercontent.com/scl/fi/srgrc9iq3ugoh11vdnlg6/images-14.jpeg?rlkey=j7sr5dq2m3dao2akybb1v8pvc","https://dl.dropboxusercontent.com/scl/fi/v9qwwn11spz2gzv8y048g/images-13.jpeg?rlkey=3sa49y5iosy007xpmtcyie5zb","https://dl.dropboxusercontent.com/scl/fi/elxktt24s3f5b023r9bdf/images-12.jpeg?rlkey=6zzh1sh7lo0pgkdkpoeook5gp","https://dl.dropboxusercontent.com/scl/fi/czkfv0u46cosuk0el3u04/images-11.jpeg?rlkey=wne5xw5pflqci82ldx5lww44c","https://dl.dropboxusercontent.com/scl/fi/19bpqm1stscwpyxxtem26/images-10.jpeg?rlkey=2n1ifdfoldl6bmspabfl8j7hc","https://dl.dropboxusercontent.com/scl/fi/pn2ebp1ecep92pbjadqyk/images-9.jpeg?rlkey=euitu2o24jxsv295jfmxyb5hw","https://dl.dropboxusercontent.com/scl/fi/2tndpzvr768guil8zvhff/images-8.jpeg?rlkey=b8sag4zl1ln9djx2eai76kvz4","https://dl.dropboxusercontent.com/scl/fi/kexw3zbg0ollddo7we09x/images-7.jpeg?rlkey=4qgi6kgi69f6wftwf9rxd8hot","https://dl.dropboxusercontent.com/scl/fi/3e7mzkkz04ztq1p9c00j3/images-5.jpeg?rlkey=1htcd3rwyyhnzel8awwxvew9w"],o=t[Math.floor(Math.random()*t.length)],s=document.createElement("img");s.src=o,s.style.width="100%",s.style.height="100%",s.style.borderRadius="50%",e.appendChild(s),document.querySelector(".bubble-container").appendChild(e),setTimeout(function(){document.querySelector(".bubble-container").removeChild(e)},9e3)}function getRandomColor(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}[...Array(7)].forEach(()=>{createBubble()});var intervalId=setInterval(createBubble,300);const fancy=document.querySelector(".custom-fancy");let currentIndex2=1;function changeText2(){fancy.textContent=customTexts2[currentIndex2],currentIndex2=(currentIndex2+1)%customTexts2.length}function fadeOut2(){fancy.style.opacity=0,setTimeout(()=>{changeText2(),fadeIn2()},500)}function fadeIn2(){fancy.style.opacity=1,setTimeout(fadeOut2,3e3)}setTimeout(fadeOut2,1e3),document.querySelector(".close_it_banner").onclick=function(){clearInterval(intervalId),document.querySelector(".custom-extras-add-bt").style.display="none"},document.querySelector(".copyitbro").onclick=function(){var e=`
&lt;script src="${document.currentScript.src}"&gt;&lt;/script&gt;
`,t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t),document.querySelector(".copyitbro").innerText=`✔`,setTimeout(function(){document.querySelector(".copyitbro").innerHTML=' <img class="img_copy_s" onerror="this.style.display=\'none\'" src="https://dl.dropboxusercontent.com/scl/fi/2aarn83ziy9moo00meuad/Picsart_23-12-23_16-26-44-557.png?rlkey=msxkspfrxz6ymvkqt8inne4j6&dl=0"></img>  '},1e3)};const textElement=document.querySelector(".custom-caption-container");let currentIndex=1;function changeText(){textElement.textContent=customTexts[currentIndex],currentIndex=(currentIndex+1)%customTexts.length}function fadeOut(){textElement.style.opacity=0,setTimeout(()=>{changeText(),fadeIn()},500)}function fadeIn(){textElement.style.opacity=1,setTimeout(fadeOut,3e3)}setTimeout(fadeOut,1e3);
