import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";

const NEw = (props) => {
    let storage=[]
    const mob =props.data? props.data:[]
    const mob1= mob.length>4?mob.slice(0,4):mob
    const desk =props.data? props.data:[]
    const desk1= desk.length>4?desk.slice(0,4):desk
    const [appState, setAppState] = useAppContext();
    const router = useRouter()
    const handelrouter=(e,path)=>{
        e.preventDefault() 
        router.push(`product/${path}`)
    }
    const oncart =async(x,y,z)=> {
    const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
         myArray.push({"code":x,"title":y,"img":z})
        localStorage.setItem("mycart", JSON.stringify(myArray))
        setAppState(myArray)
        }  
     useEffect(()=>{
     const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
    setAppState(myArray)    
    return myArrayFromLocalStorage
    },[])
 
  
    return (  
        <div className="mt-3">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div className="row w-100">
    <h4 className="col-12 col-lg-12 title ms-auto">متخصصون في المجالات التالية</h4>

</div>
<div  >

    <div className="">
    <div className="row ">
       
            <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "sht.jpg"} src={"alm.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-info bg-li"  >
            <h5 className=" text-center text-dark"> upvc أعمال الألمونيوم و </h5> 
            <p className="text-center">
            تصنيع و توريد و تركيب نوافذ المنيوم وأبواب المنيوم بكافة الأعمال الداخلية للمباني
             وتشمل النوافذ بمختلف استخداماتها من نوافذ سحاب و قلاب وثابت والفصلي 
            , كما تشمل الأبواب بجميع أنواعها مثل الأبواب السحاب و الأبواب المفصلية 
            و الأبواب المروحية وبكافة القطاعات المختلفة للألمنيوم
</p>

            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=966566642792"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "str.jpg"} src={"str.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-info bg-li"  >
            <h5 className=" text-center text-dark"> استركشر - زجاج الواجهات</h5> 
            <p className="text-center">
            متخصصون في تركيب واجهات المباني بألواح الزجاج المثبتة على قطاعات ألمنيوم
             حيث تتميز واجهات الزجاج الإنشائي استركشر بمقاومة أحمال الرياح و تسلل المياة و أي عوامل جوية وربط كل طوابق
              المبنى بشكل مستمر و إكسابه جمالية إضافية بما يقدمه من أشكال وأنضمة مختلفة
              </p>

            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=966566642792"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "hde.jpg"} src={"hde.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-info bg-li"  >
            <h5 className=" text-center text-dark"> أعمال الحديد -ستانلس ستيل</h5> 
            <p className="text-center">
           ،متخصصون في تركيب وتوريد  الأبواب الحديدية بأحدث التصميمات الحديثة مع مراعاة المتانة والصلابة والقوة في التصميم 
             احصل على درابزين سلم استانلس المقاوم للصدأ المصنوع طبقا للمواصفات العالمية 
، حماية الشبابيك ستانلس ستيل توفر لك الحماية الكامل و تحمي اطفالك ومنزلك              </p>

            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=966566642792"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "alm.jpg"} src={"sht.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-info bg-li"  >
            <h5 className=" text-center text-dark"> نوافذ الشتر</h5> 
            <p className="text-center">نوفر أفضل وأرقى شترات الرول المتحركة اليدوية 
            والكهربائية يتم تصميمها وتركيبها بطرق مبتكرة 
            ورائعة بحيث يكون صندوق المحرك من خارج النافذة أو من الجهة الداخلية بمناظر راقية وحديثة .
            حيث اننا نتميز بتقديم افضل المواصفات والمواد المستخدمة في اعمال الشتر في السوق المحلي والعالمي</p>

            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=966566642792"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
       
    </div>
    </div>

 </div>
 
</div>
    );
}
 
export default NEw;