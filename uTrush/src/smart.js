import React, {Component} from 'react';
import {View, Picker, Text,StyleSheet,Image,Button, TouchableOpacity, TextInput, AsyncStorage, TouchableHighlight, ScrollView} from 'react-native';
import styles from './css';
import { StackNavigator } from 'react-navigation';
 
class FirstScreen extends React.Component {
render() {
    return (
      //   <View style={styles._container}>
      //   <View style={styles._header}>
      //     <View style={styles._subHead2}>
      //     </View>
      //     <View style={styles._subHead1}>
      //       <Text style={styles._headText}>uTrash</Text>
      //     </View>
      //     <View style={styles._subHead2}>
      //     </View>
      //   </View>
      //   <View style={styles._teamPage}>
      //       <View style={{flex:1,flexDirection: 'column',backgroundColor : '#87ceeb',}}>
      //               <ScrollView contentContainerStyle={{paddingVertical: 20}}>
      //               <Text style={{fontWeight: 'bold', fontSize: 24 ,alignSelf:'center', color:'#207068',marginBottom:10,}}>General waste</Text>
      //                   <View style={{flex:1,flexDirection: 'column',marginLeft:10,marginRight:10,backgroundColor:'rgba(0,0,0,0)'}}>
      //                       <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#207068',}}>General waste Type</Text>
      //                       <Text style={{fontSize: 13 ,color:'#207068'}}>General waste , material must be free of any actual or apparent contamination (pathological/infectious, radioactive and/ or hazardous chemical). In some cases, after disinfection or decontamination, previously contaminated material may be treated as general waste.</Text>
      //                       <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>Examples of general waste include: Office waste (paper, boxes, folders, plastic, glass), decontaminated labware (see Medical Waste section), animal bedding (not contaminated), etc.</Text>
      //                       <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#207068',}}>Let see the common ways of managing waste</Text>
      //                             <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
      //                                          source={require('../img/Ge1.png')}
      //                                         />
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#207068',}}>1. Incineration method of waste management:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>This simply means burning waste. This method is common in countries with limited landfill space. Incineration chambers can be small for domestic use, but there are large ones for municipal use as well. It is great for treating waste with contamination (like those from hospitals) and hazardous waste from factories, but the method produces too much carbon dioxide. Modern incineration processes are more efficient and release less dioxin than home fireplaces and backyard barbecues. This method is very common in Denmark, Germany and the Netherlands. This method is effective, but expensive.</Text>
      //                             <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
      //                                          source={require('../img/Ge2.png')}
      //                                         />
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#207068',}}>2. Sanitary Landfills as waste disposal:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>Generally, this term means a large piece of land away from living places where all the waste from a town is deposited. But there is more to landfills. Proper landfill management involves sorting out all the waste (waste separation), and sending only the waste that cannot be recycled and composted to the site. </Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>Proper landfills, are also lined at the bottom to minimize the leakage of soil pollutants and other toxins from getting into the water table. This method is effective, but expensive and difficult.</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>In many towns, sorting is not done, and all the waste (paper, food, diapers, glass) is mixed up and deposited. That is a problem because, glass, and plastics take thousands of years to decompose. Additionally, the landfills soon become full, smelly and unsafe for the environment.</Text>
                                    
      //                   </View>
      //                   </ScrollView>
      //           </View>

      //   </View>
      // </View>
       <View style={styles._container}>
        <View style={styles._header}>
          <View style={styles._subHead2}>
          </View>
          <View style={styles._subHead1}>
            <Text style={styles._headText}>uTrash</Text>
          </View>
          <View style={styles._subHead2}>
          </View>
        </View>
        <View style={styles._teamPage}>
            <View style={{flex:1,flexDirection: 'column',backgroundColor : '#87ceeb',}}>
                    <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24 ,alignSelf:'center', color:'#207068',marginBottom:10,}}>ขยะมูลฝอย</Text>
                        <View style={{flex:1,flexDirection: 'column',marginLeft:10,marginRight:10,backgroundColor:'rgba(0,0,0,0)'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#207068',}}>ถังขยะสีน้ำเงิน</Text>
                            <Text style={{fontSize: 13 ,color:'#207068'}}>ถังขยะสีน้ำเงิน (General waste)  ใช้สำหรับรองรับขยะมูลฝอยทั่วไปที่ย่อยสลายไม่ได้ ไม่คุ้มค่าต่อการรีไซเคิล แต่ไม่เป็นพิษ เช่น พลาสติกห่อลูกอม ซองบะหมี่สำเร็จรูป ถุงพลาสติก โฟมและฟอล์ยที่เปื้อนอาหาร  ขยะประเภทนี้สามารถนำไปทำเชื้อเพลิงและสิ่งประดิษฐ์ต่างๆเทคโนโลยีการกำจัดขยะมูลฝอย</Text>
                                  <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
                                               source={require('../img/Ge2.png')}
                                              />
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#207068',}}>๑.การแปรสภาพและการใช้ประโยชน์จากขยะมูลฝอย</Text>
                                    <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>การนำวัสดุเหลือใช้จากขยะมูลฝอยกลับมาใช้ให้เป็นประโยชน์ จะช่วยลดปริมาณขยะมูลฝอยที่จะต้องกำจัด ในขณะเดียวกันก็เป็นการสงวนทรัพยากรธรรมชาติไว้ได้อีกส่วนหนึ่ง ด้วยการใช้ประโยชน์จากสิ่งเหลือใช้ อาจใช้วิธีหมุนเวียนวัสดุ หรือแปรสภาพขยะมูลฝอยให้เป็นพลังงาน</Text>
                                    <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>เราอาจแปรสภาพขยะมูลฝอยเป็นพลังงานได้ ดังนี้คือ</Text>
                                    <View>
                                      <Text style={{fontWeight: 'bold',fontSize: 13 ,color:'#207068',}}>พลังงานความร้อน </Text>
                                      <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>ได้จากการนำเอาขยะมูลฝอยส่วนที่เผาไหม้ได้ มาเป็นเชื้อเพลิงสำหรับทำไอน้ำร้อน แล้วส่งไปให้ความอบอุ่นตามอาคารบ้านเรือน เช่นที่ทำอยู่ในประเทศญี่ปุ่น เป็นต้น </Text>
                                    </View>
                                    <View>
                                      <Text style={{fontWeight: 'bold',fontSize: 13 ,color:'#207068',}}>พลังงานไฟฟ้า </Text>
                                      <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>ได้จากการนำขยะมูลฝอยไปเป็นเชื้อเพลิง สำหรับผลิตไอน้ำ ไปหมุนเครื่องกำเนิดไฟฟ้า เพื่อผลิตกระแสไฟฟ้า บริการแก่ประชาชน ตัวอย่างเช่น การแปรสภาพของการใช้ประโยชน์จากขยะมูลฝอยในบางรัฐของประเทศสหรัฐอเมริกา ซึ่งมีขยะมูลฝอยจำนวนมาก และเป็นชนิดที่เผาไหม้ได้เป็นส่วนมาก  </Text>
                                    </View>
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#207068',}}>๒. การคัดแยกวัสดุเพื่อนำกลับมาใช้ </Text>
                                    <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>วัสดุหลายอย่างในขยะมูลฝอยที่อาจนำกลับมาใช้ประโยชน์ได้อีก เช่น กระดาษ แก้ว ขวด พลาสติก เหล็กและโลหะอื่นๆ การคัดเลือกวัสดุต่างๆ ที่รวมอยู่ในขยะมูลฝอย เพื่อนำกลับไปใช้ให้เป็นประโยชน์ได้อีก นับได้ว่า มีการปฏิบัติกันมาช้านาน จะเห็นได้ว่า ตามกองขยะมูลฝอยทุกแห่ง มีบุคคลกลุ่มหนึ่งไปคอยคุ้ยเขี่ยเก็บวัสดุจากกองขยะมูลฝอยตลอดเวลา เพื่อหารายได้ </Text>
                                      <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center'}}
                                               source={require('../img/Ge4.png')}
                                              />
                                    <Text style={{fontSize: 13 ,color:'#207068',}}>การเก็บวัสดุจากกองขยะมูลฝอยนั้น อาจจะเกิดผลเสีย คือ</Text>
                                      <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>๑. ปัญหาเกี่ยวกับสุขภาพ และความปลอดภัยของผู้แยกวัสดุจากกองขยะมูลฝอย ที่อาจเป็นอันตราย เนื่องมาจากความสกปรกของขยะมูลฝอย ซึ่งมีได้ทั้งเชื้อโรค และสารพิษ รวมทั้งของมีคม วัตถุระเบิด และสารกัมมันตรังสี เป็นต้น </Text>
                                      <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>๒. ปัญหาจากการที่นำเอาวัสดุที่เก็บมาได้เอามากองรวมๆ กัน เพื่อรอจำหน่ายนั้น ทำให้เกิดกองขยะขึ้นมาอีกส่วนหนึ่ง ซึ่งสกปรกรกรุงรัง เป็นที่อาศัยของสัตว์และแมลงนำโรค เป็นภาพที่น่ารังเกียจ ขาดความเป็นระเบียบเรียบร้อยของพื้นที่ และบริเวณใกล้เคียง </Text>
                                      <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',}}>๓. การนำขยะมูลฝอยไปถมที่ดิน เพื่อปรับปรุงสภาพ ขยะมูลฝอยเกือบทุกชนิดสามารถนำไปใช้สำหรับถมที่ดินที่เป็นหลุมเป็นบ่อ เช่น บ่อดินลูกรังที่น้ำท่วม เหมืองร้าง ฯลฯ ทำให้ที่ดังกล่าวกลายเป็นพื้นที่ราบเรียบ ใช้ประโยชน์ได้มากมายหลายประการ เช่น ทำสนามกีฬา สนามกอล์ฟ สวนสาธารณะ สถานที่พักผ่อนหย่อนใจ แม้กระทั่งสร้างเป็นอาคารที่ทำงาน หรือที่อยู่อาศัย ในต่างประเทศมีการใช้พื้นที่ดินที่เกิดจากการถมด้วยขยะมูลฝอย แบบการฝังกลบ และสามารถนำไปใช้ประโยชน์ได้ </Text>
                                        <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center'}}
                                               source={require('../img/Ge3.png')}
                                              />
                                      <Text style={{fontSize: 13 ,paddingBottom:10,color:'#207068',paddingTop:10}}>ประเทศไทยก็ได้ใช้ขยะมูลฝอยไปถมที่ทำประโยชน์ เช่น ที่สวนจตุจักร ซึ่งเดิมเป็นที่ลุ่มน้ำท่วม และเต็มไปด้วยพงหญ้ารกมาก และไม่ได้ใช้ประโยชน์แต่อย่างใด ต่อมาได้มีการนำเอาขยะมูลฝอยจากสถานกำจัดขยะดินแดง มาถมที่บริเวณสวนจตุจักร และปรับปรุงเป็นสถานที่พักผ่อนหย่อนใจ ดังที่ปรากฏอยู่ในขณะนี้</Text>
                               
                        </View>
                        </ScrollView>
                </View>

        </View>
      </View>
    )
}
}


class SecondScreen extends React.Component {
render() {
    return (
      //   <View style={styles._container}>
      //   <View style={styles._header}>
      //     <View style={styles._subHead2}>
      //     </View>
      //     <View style={styles._subHead1}>
      //       <Text style={styles._headText}>uTrash</Text>
      //     </View>
      //     <View style={styles._subHead2}>
      //     </View>
      //   </View>

      //   <View style={styles._teamPage}>
           
      //       <View style={{flex:1,flexDirection: 'column',backgroundColor : '#a0db8e',}}> 
      //               <ScrollView contentContainerStyle={{paddingVertical: 20}}>
      //               <Text style={{fontWeight: 'bold', fontSize: 24 ,alignSelf:'center', color:'#207068',marginBottom:10,}}>Organic waste</Text>
                    
      //                    <View style={{flex:1,marginLeft:10,marginRight:10,backgroundColor:'rgba(0,0,0,0)'}}> 
      //                       <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#207068',}}>Organic type</Text>
      //                       <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Organic waste comes from plants or animals sources. Commonly, they include food waste, fruit and vegetable peels, flower trimmings and even dog poop can be classified as organic waste. They are biodegradable (this means they are easily broken down by other organisms over time and turned into manure).</Text>
      //                       <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#207068',}}>The medthod for disposal organic waste</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#207068',}}>Composting</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>With the right conditions (air and moisture), organic waste such as food and plant materials can be decomposed by bacteria, fungi, worms and organisms. Decayed organic matter is humus. Yard waste such as grass and flower clippings can also be composted.</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Composting comes in two kinds: bin/pile composting and worm composting (vermiculture).</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Bin/pile composting is easier for many households because one does not have to be too careful with what to put into it. Here is what you need:</Text>
      //                                 <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
      //                                          source={require('../img/Or1.png')}
      //                                         />            
                                              
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',marginLeft:20,}}>1. Get an old bin or box (1 cubic yard), or you can buy one from the shop. Ensure that you punch holes around it to help with aeration. </Text> 
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',marginLeft:20,}}>2. Prepare your organic waste matter. Make sure you cut them into pieces (about 1inch in size). Do not throw in big chunks of the waste. Make sure you separate the organic waste into brown and green parts. Brown parts include waste like wood chips, saw-dust, yard waste shreds, straw and hay, dry leaves and shredded paper. Green parts include grass trimmings, fruit and veggie scraps, green leaves and livestock manure.</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',marginLeft:20,}}>3. Put the waste in the box in layers, 50% green, 50% brown.</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',marginLeft:20,}}>4. Mix and add some water every 7 days. </Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>In a couple of weeks, the compost will be ready. It will look dark-brown and smell just like soil.</Text>


      //                    </View> 
      //                   </ScrollView>
      //            </View> 
      //   </View>
      
      // </View>
       <View style={styles._container}>
        <View style={styles._header}>
          <View style={styles._subHead2}>
          </View>
          <View style={styles._subHead1}>
            <Text style={styles._headText}>uTrash</Text>
          </View>
          <View style={styles._subHead2}>
          </View>
        </View>

        <View style={styles._teamPage}>
           
            <View style={{flex:1,flexDirection: 'column',backgroundColor : '#a0db8e',}}> 
                    <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24 ,alignSelf:'center', color:'#003366',}}>ขยะย่อยสลายได้</Text>
                        <View style={{flex:1,flexDirection: 'column',marginLeft:10,marginRight:10,backgroundColor:'rgba(0,0,0,0)'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#003366',}}>ถังขยะสีเขียว</Text>
                            <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366'}}> ถังขยะสีเขียว (Organic waste) ใช้สำหรับรองรับขยะที่ย่อยสลายได้ อินทรียวัตถุที่ย่อยสลายเน่าเปื่อยง่าย  ขยะประเภทนี้สามารถนำมาหมักทำปุ๋ยและอาหารสัตว์ได้</Text>
                            <Text style={{fontWeight: 'bold',fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ขยะประเภทนี้สามารถนำมาหมักทำปุ๋ยและอาหารสัตว์ได้ดังนี้</Text>
                            <Text style={{fontWeight: 'bold',fontSize: 13 ,color:'#003366',marginLeft:10}}>1. น้ำจุลินทรีย์ชีวภาพ</Text>
                            <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center'}}
                                               source={require('../img/Or3.png')}
                                              />
                              <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',marginTop:10}}>น้ำจุลินทรีย์ชีวภาพ ทำปุ๋ย ฮอร์โมนพืช สารไล่แมลง เศษผัก เศษอาหาร เปลือกผลไม้ ใบไม้ ใบหญ้า นำไปหมักโดยผสมกับกากน้ำตาลหรือน้ำตาลทรายแดง ใช้เป็นปุ๋ย ฮอร์โมน สารไล่แมลงสำหรับต้นไม้ ใช้ดับกลิ่น ทำให้น้ำใส ย่อยกากตะกอนสิ่งปฏิกูล มีวิธีการง่าย ๆ ดังนี้ - การทำหัวเชื้อน้ำหมักจุลินทรีย์ นำเศษผักหรือผลไม้ 3 กิโลกรัม + กับกากน้ำตาล 1 กิโลกรัม คลุกเคล้าให้เข้ากันดี ใส่ถังพลาสติกปิดฝาเก็บไว้ในที่ร่ม 15 วัน จะได้น้ำชีวภาพพร้อมขยาย หรือนำไปใช้ได้ น้ำหมักชีวภาพสามารถทำฮอร์โมนเร่งใบ เร่งดอก สารป้องกันศัตรูพืชได้ เหมาะสำหรับท่านที่มีมุมต้นไม้เล็ก ๆ ในบ้าน จนถึงท่านที่มีอาชีพเกษตรกร จะช่วยลดต้นทุนได้มาก เพียงเลือกวัสดุหมักตามสูตรง่าย ๆ ดังนี้ - สูตรเร่งใบ ใช้น้ำเอ็นไซมื 1 ลิตร + น้ำ 10 ลิตร + น้ำตาลทรายแดง + ผักบุ้ง + ผักกาดหอม + ใบมันเทศ + เปลือกสับปะรด อย่างละ 1 กก. คลุกเคล้าให้เข้ากัน ปิดฝาถังหมักทิ้งไว้ 7-15 วัน ใช้ฉีดพ่นรดต้นไม้สัปดาห์ละ 2 ครั้ง อัตราส่วน 2 ช้อนโต๊ะฝน้ำ 20 ลิตร - สูตรเร่งดอก ราก ผล น้ำเอนไซม์ 1 ลิตร + น้ำมะพร้าว 5 ลิตร + น้ำตาลทรายแดง + กล้วยสุก + ฟักทองสุก + มะละกอสุก อย่างละ 1 กก. คลุกเคล้าให้เข้ากัน ปิดฝาถังหมักทิ้งไว้ 3-7 วัน นำไปใช้ฉีดพ่นรดต้นไม้สัปดาห์ละ 2 ครั้ง อัตราส่วน 2 ช้อนโต๊ะน้ำ 20 ลิตร</Text>   
                            <Text style={{fontWeight: 'bold',fontSize: 13 ,color:'#003366',marginLeft:10}}>2. การทำปุ๋ยใบไม้แห้ง</Text>
                            <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center'}}
                                               source={require('../img/Or2.png')}
                                              />
                              <Text style={{fontSize: 13 ,paddingBottom:5,color:'#003366',marginTop:10}}>การทำปุ๋ยใบไม้แห้ง ใบไม้แห้งมีประโยชน์มาก ใช้จัดการกับเศษอาหารให้สลายหายไปใน 3-5 วัน ใบไม้แห้งช่วยดูดซับกลิ่น และช่วยดูดซับน้ำจากเศษอาหาร ทำให้ใช้เป็นที่ทิ้งเศษอาหารในบ้านได้เลย วิธีการง่าย ๆ ดังนี้ </Text>
                              <Text style={{fontSize: 13 ,paddingBottom:5,color:'#003366',marginLeft:20}}>1) หาที่เหมาะ ๆ ที่น้ำไม่ไหลท่วมขัง การระบายอากาศดี มีร่มเล็กน้อย แล้วจัดหาวัสดุที่มีอยู่ เช่น วงบ่อ คอกไม้ คอกคอนกรีต หรือถังพลาสติกเจาะรู้รอบ ๆ มาตั้งไว้ ทำฝาปิดกันหนู สุนัขคุ้ยเขี่ย และกันแดดกันฝน </Text>
                              <Text style={{fontSize: 13 ,paddingBottom:5,color:'#003366',marginLeft:20}}>2) เทใบไม้แห้งลงในถังหรือภาชนะที่เตรียมไว้ให้เกินครึ่งกระบะเล็กน้อย เทเศษอาหารบนใบไม้แห้ง แล้วใช้พลั่วคลุกเคล้าให้เศษอาหารกระจายตัว ทิ้งไว้ 3 วัน กลับมาเปิดดูจะเห็นว่าเศษอาหารหายไป ฉะนั้นจึงเติมเศษอาหารได้ทุกวัน </Text>
                              <Text style={{fontSize: 13 ,paddingBottom:5,color:'#003366',marginLeft:20}}>3) เติมใบไม้แห้งทุกสัปดาห์เพราะจะมีการยุบตัวจากการย่อยสลายเศษอาหารและใบไม้ ทิ้งเศษอาหารได้ทุกวันจนเต็ม ทิ้งไว้ 3-4 เดือน ก็นำปุ๋ยไปใช้หรือขายได้ </Text>
                            <Text style={{fontWeight: 'bold',fontSize: 13 ,color:'#003366',marginLeft:10}}>3. อาหารสัตว์ เศษอาหาร เปลือกผลไม้</Text>
                              <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366'}}> อาหารสัตว์ เศษอาหาร เปลือกผลไม้ คัดแยกใส่ถังไว้ต่างหากแล้วนำไปเลี้ยงปลา เลี้ยงหมู เลี้ยงวัว ได้ประหยัดค่าอาหารสำเร็จรูป ปัจจุบันมีเกษตรกรนำถังไปตั้งตามร้านอาหาร ตามห้าง โรงแรมต่าง ๆ แล้วนำไปเลี้ยงสัตว์ทำให้สัตว์โตเร็ว ประหยัดค่าใช้จ่ายได้มาก</Text>
                        </View>
                        </ScrollView>
                 </View> 
        </View>
      
      </View>
    )
}
}


class ThirdScreen extends React.Component {
render() {
    return (
      //   <View style={styles._container}>
      //   <View style={styles._header}>
      //     <View style={styles._subHead2}>
      //     </View>
      //     <View style={styles._subHead1}>
      //       <Text style={styles._headText}>uTrash</Text>
      //     </View>
      //     <View style={styles._subHead2}>
      //     </View>
      //   </View>
      //   <View style={styles._teamPage}>
      //       <View style={{flex:1,flexDirection: 'column',backgroundColor : '#e5ba52',}}>
      //               <ScrollView contentContainerStyle={{paddingVertical: 20}}>
      //               <Text style={{fontWeight: 'bold', fontSize: 24 ,alignSelf:'center', color:'#3b5998',marginBottom:10,}}>Recycle waste</Text>
                    
      //                   <View style={{flex:1,flexDirection: 'column',marginLeft:10,marginRight:10,backgroundColor:'rgba(0,0,0,0)'}}>
      //                       <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#3b5998',}}>Recycle type</Text>
      //                       <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Recycling is processing used materials (waste) into new, useful products. This is done to reduce the use of raw materials that would have been used. Waste that can be potentially recycled is termed "Recyclable waste". Aluminum products (like soda, milk and tomato cans), Plastics (grocery shopping bags, plastic bottles), Glass products (like wine and beer bottles, broken glass), Paper products (used envelopes, newspapers and magazines, cardboard boxes) can be recycled and fall into this category.</Text>
      //                       <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
      //                                          source={require('../img/Re1.png')}
      //                                         />   
      //                       <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#3b5998',}}>Here is how paper waste is recycled:</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Collection, transportation and storage:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>The biggest task for paper recycling companies is probably the collection, transporting and sorting of waste paper. </Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>This is because we always add paper to other waste items and get them contaminated with food, plastics and metals. </Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Sometimes collected paper is sent back to the landfills because they are too contaminated for use. Try to keep waste paper in separate grades at home or in the office —example, do not mix newspapers and corrugated boxes up.</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>All paper recovered is sent to the recycling center, where it is packed, graded, put into bales and sent to the paper mill. At the mill, all the paper is stored in a warehouse until it is needed.</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Preparation:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>At the collection center, a huge magnet is rolled over them as they move on the conveyor belt to pull out all the metal and steel cans. Only the aluminum cans are washed, crushed, condensed into 30-pounds briquettes for other companies for further processing. The rest is also sorted and sent to their appropriate recycling centers.</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Melting:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>The crushed cans are loaded into a burning furnace, where all printing and designs on the cans are removed, melted and blended with new (virgin) aluminum. The molten (liquid) aluminum is poured into moulds and made into bars called ingots.</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Sheets:</Text>
                                    
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>The ingots are then fed into powerful rollers, which flatten them into thin sheets of aluminum of about 25.4 in thickness. These thin sheets are rolled into coils and sold or sent to can-making factories. They use the aluminum coils to prepare cans and containers for other food and drink manufacturers. It is estimated that cans collected at collection points take up to 60 days to be appear in the shops again as new cans containing your favourite soda, juice or food.</Text>
      //                               <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
      //                                          source={require('../img/Re2.png')}
      //                                         /> 
      //                       <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#3b5998',}}>Aluminum recycling</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Collection:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Local councils provide special can recycling containers (bins) that are clearly marked. This helps people to know what to place in them. Cans include soda, fruit and vegetable cans. Trucks come for these at pick up spots to the recycling centers. Cans may also be metallic or steel, but people do not know the difference.</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Preparation:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>At the collection center, a huge magnet is rolled over them as they move on the conveyor belt to pull out all the metal and steel cans. Only the aluminum cans are washed, crushed, condensed into 30-pounds briquettes for other companies for further processing. The rest is also sorted and sent to their appropriate recycling centers.</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Melting:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>The crushed cans are loaded into a burning furnace, where all printing and designs on the cans are removed, melted and blended with new (virgin) aluminum. The molten (liquid) aluminum is poured into moulds and made into bars called ingots.</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Sheets:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>The ingots are then fed into powerful rollers, which flatten them into thin sheets of aluminum of about 25.4 in thickness. These thin sheets are rolled into coils and sold or sent to can-making factories. They use the aluminum coils to prepare cans and containers for other food and drink manufacturers. It is estimated that cans collected at collection points take up to 60 days to be appear in the shops again as new cans containing your favourite soda, juice or food. </Text>
      //                           <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
      //                                          source={require('../img/Re3.png')}
      //                                         /> 
      //                       <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#3b5998',}}>How is glass recycled?</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Collection:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Many cities have collection spots. Trucks may also pick them up from your home, or you may be required to drop them off at a point in your town. In all cases, try to do what the authorities have suggested. So, be sure you know the various glass types that are collected from your home. Always wash and separate them into the required grades for collection.</Text>
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Cleaning and Crushing:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>The glass is transported to the processing plant where contaminants such as metal caps and plastic sleeves are removed. Different grades are treated separately. Clean glass is then crushed into small pieces called cullet. Cullet is in high demand from glass manufacturers. It melts at a lower temperature and it is cheaper than raw glass materials.</Text>    
      //                           <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Ready for use:</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>The cullet is then transported to glass-making factories. Here, it is mixed with sand, soda ash and limestone. It is heated at very high temperature and melted into liquid glass. This liquid is then poured into moulds that give glass its shape.</Text>
                                    
      //                   </View>
      //                   </ScrollView>
      //           </View>
      //   </View>
      // </View>
      <View style={styles._container}>
        <View style={styles._header}>
          <View style={styles._subHead2}>
          </View>
          <View style={styles._subHead1}>
            <Text style={styles._headText}>uTrash</Text>
          </View>
          <View style={styles._subHead2}>
          </View>
        </View>
        <View style={styles._teamPage}>
            <View style={{flex:1,flexDirection: 'column',backgroundColor : '#e5ba52',}}>
                    <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24 ,alignSelf:'center', color:'#3b5998',marginBottom:10,}}>ขยะรีไซเคิล</Text>
                    
                        <View style={{flex:1,flexDirection: 'column',marginLeft:10,marginRight:10,backgroundColor:'rgba(0,0,0,0)'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#3b5998',}}>ขยะถังสีเหลือง</Text>
                            <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ถังขยะสีเหลือง (Recycle waste) ใช้สำหรับรองรับขยะที่สามารถนำกลับมารีไซเคิล หรือขายได้ เช่น แก้ว กระดาษ พลาสติก โลหะ</Text>  
                            <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#3b5998',paddingBottom:5}}>1. ประเภทพลาสติก</Text>
                            <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
                                               source={require('../img/Re5.png')}
                                              />
                              <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',paddingTop:5}}> ขยะประเภทพลาสติกมีจำนวนเพิ่มขึ้นอย่างรวดเร็ว เพราะสินค้าและบรรจุภัณฑ์ต่างๆ ส่วนมากทำมาจากพลาสติก เช่น ขวดนม กระป่องยา ขวดอาหาร เป็นต้น  ถึงแม้ว่าพลาสติกไม่สามารถย่อยสลายได้โดยธรรมชาติ ดังนั้นจึงทำให้ยากต่อการกำจัดโดยการฝังกลบ แต่การกำจัดขยะพลาสติกโดยการฝังกลบไม่ใช่วิธีการที่ถูกต้อง เนื่องจากขยะพลาสติกสามารถนำกลับมาใช้ใหม่ได้เกือบทุกประเภท พลาสติกที่ไม่สามารถรีไซเคอลได้ ได้แก่ พลาสติกชนิดยูเรีย เมลามีน อีพอกซี่ นอกนั้นสามารถรีไซเคิลได้หมด แต่บางครั้งยังมีข้อจำกัดอีกหลายเรื่องที่ไม่สามารถนำพลาสติกทุกชนิดมารีไซเคิลได้ เช่นด้านความต้องการของโรงงานรีไซเคิล หรือพลาสติกบางประเภทมีน้ำหนักเบาและเก็บรวบรวมได้ยากจึงไม่นิยมนำมารีไซเคิล เช่น ถุงพลาสติก เป็นต้น</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,marginLeft:5,color:'#3b5998',}}>1.1 พลาสติกที่สามารถนำมารีไซเคิล ได้แก่</Text>  
                                  <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}>(1)  โพลีโพรพิลิน (Polypropylene;PP) พลาสติกประเภทนี้เป็นที่นิยมนำมาใช้เป็นถ้วยนมเปรี้ยว กระป๋องมันฝรั่งทอด และถังเนยเทียม</Text>
                                  <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}>(2)  โพลีสไตรีน (Polystyrene;PS) พลาสติกประเภทนี้เป็นที่นิยมนำมาใช้เป็นภาชนะแทนโฟม ถาดสลัด กล่องบรรจุวิดีโอและซีดี</Text>
                                  <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}>(3)  โพลีเอทิลีน (Polyethylene;PE) พลาสติกประเภทนี้เป็นที่นิยมนำมาใช้ทำขวดเครื่องดื่มหรือขวดน้ำอัดลม</Text>
                                  <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}>(4)  โพลิไวนิลคลอไรด์ (Polyvinyl Chloride;PVC) พลาสติกประเภทนี้เป็นที่นิยมนำมาใช้เป็นภาชนะบรรจุอาหาร สายไฟ และท่อน้ำ</Text>
                                  <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}>(5)  โพลิเอทิลีนที่มีความหนาแน่นสูง (High-density Polyethylene;HDPE) พลาสติกประเภทนี้เป็นที่นิยมนำมาใช้เป็นเหยือกน้ำผลไม้ เหยือกนม ของเล่น ขวดน้ำยาซักผ้า</Text>
                                  <Text style={{fontSize: 13,color:'#003366',marginLeft:10,paddingBottom:5}}>(6)  โพลิเอทิลินที่มีความหนาแน่นต่ำ (Low-density Polyethylene;LDPE) พลาสติกประเภทนี้เป็นที่นิยมนำมาใช้เป็นพลาสติกใสสำหรับห่ออาหาร และถุงหิ้ว</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,marginLeft:5,color:'#3b5998',}}>1.2  การคัดแยกพลาสติกเพื่อนำไปรีไซเคิล</Text>
                                  <Text style={{fontSize: 13,color:'#003366',}}>พลาสติกที่ซื้อขายเกันเพื่อนำกลับมารีไซเคิลมีราคาแตกต่างกันตั้งแต่ 3-8 บาท ขึ้นอยู่กับประเภทของพลาสติกก่อนนำไปขายจะมีการจัดการขยะพลาสติกให้ดีก่อน ดังนี้</Text>
                                  <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}>(1)  ขวดให้สิ่งปนเปื้อนออกให้หมด ดึงฉลากและสิ่งต่างๆ ที่ติดกับพลาสติกออกให้หมด</Text>
                                  <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}>(2)  ทำให้แบนเพื่อประหยัดเนื้อที่</Text>
                                  <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}>(3)  คัดแยกพลาสติกออกตามปรเภท อาจจะสังเกตประเภทของพลาสติกจากเครื่องหมายที่ก้อนบรรจุภัณฑ์ก็ได้ เพราะบางทีจะมีเครื่องหมายรีไซเคิลพร้อมทั้งตัวเลขระบุประเภทของพลาสติก หรืออาจนำพลาสติกมาแช่น้ำเพื่อแยกประเภทพลาสติก เพราะพลาสติกแต่ละประเภทมีความหนาแน่นไม่เท่ากัน</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#3b5998',paddingBottom:5}}>2. ประเภทกระดาษ</Text>
                              <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
                                               source={require('../img/Re1.png')}
                                              />
                                  <Text style={{fontSize: 13,color:'#003366',paddingBottom:5,paddingTop:5}}>ขยะมูลฝอยจากบ้านเรือนและสำนักงานจะมีกระดาษเป็นองคืประกอบที่สำคัญตัวหนึ่ง เนื่องจากในชีวิตประจำวันของเราจะต้องเกี่ยวพันกับการใช้กระดาษ ไม่ว่าจะเป็นหนังสือพิมพ์ กระดาษคอมพิวเตอร์ ถุงกระดาษ กระดาษลัง เป้นต้น กระดาษเหล่านี้สามารถนำกลับมารีไซเคิลได้ กระดาษที่ไม่สามารถนำกลับมารีไซเคิลได้ เช่น กระดาษห่อของขวัญ กระดาษกล่องแอปเปิล เพราะกระดาษประเภทนี้มีเยื่อเซลลูโลสน้อยมากไม่เหมาะที่จะนำมารีไซเคิลอีก</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,marginLeft:5,color:'#3b5998',}}>2.1  การจัดการขยะประเภทกระดาษเพื่อนำมารีไซเคิล</Text>
                                  <Text style={{fontSize: 13,color:'#003366'}}>   กระดาษแต่ละประเภทมีราคารับซื้อไม่เท่ากัน ถ้าขายรวมๆ กันก็จะได้ราคารวมเย่างต่ำเพียงกิโลกรัมละ 1 บาท และที่สำคัญกระดาษที่นำมากขายจะต้องไม่เปื้อนคราบน้ำมันต่างๆ ดังนั้นจึงควรมีการแยกประเภทกระดาษก่อนที่จำนำไปขายตามประเภทดังนี้</Text>
                                    <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}> -  กระดาษแข็งกล่องน้ำตาล</Text>
                                    <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}> -  กระดาษย่อยและหนังสือเล่มทั่วไป</Text>
                                    <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}> -  กระดาษขาวสำนักงาน</Text>
                                    <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}> -  กระดาษหนังสือพิมพ์</Text>
                                    <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}> -  สมุดโทรศัพท์</Text>
                                    <Text style={{fontSize: 13,color:'#003366',marginLeft:10}}> -  กระดาษสมุดนักเรียน</Text>
                                    <Text style={{fontSize: 13,color:'#003366',marginLeft:10,paddingBottom:5}}> -  กล่องยูเอชที</Text>
                                    
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,marginLeft:5,color:'#3b5998',}}>2.2  การรีไซเคิลกระดาษ</Text>
                                    
                                  <Text style={{fontSize: 13,color:'#003366'}}>   กระดาษที่รับซื้อจากบ้านเรือนหรือแหล่งต่างๆ จะถูกส่งไปยังโรงงานผลิตกระดาษ เพื่อใช้เป็นวัตถุดิบผสมในการผลิตกระดาษประเภทต่างๆ กระดาษมีหลายชนิดและหลายคุณภาพ กระดาษขาวสำหรับเขียนหรือการะดาษคอมพิวเตอร์จะเป็นกระดาาที่มีคุณภาพสูง จึงถูกนำมาแปรรูปเป็นกระดาษสมุดและหนังสือ ส่วนหนังสือพิมพ์และกระดาษกล่องจะมีคุณภาพต่ำ จึงถูกนำมาแปรรูปเป็นกระดาษกล่องบรรจุเครื่องดื่ม กระดาษห่อของขวัญ กล่องกระดาษแข็ง การรีไซเคิลกระดาษจะเริ่มด้วยกำจัดหมึกออกและตีกระดาษให้เปื่อยยุ่ยเป็นเยื่อกระดาษและเติมเยื่อกระดาษใหม่เข้าไป ซึ่งสัดส่วนเยื่อกระดาษรีไซเคิลกับเยื่อกระดาษใหม่ขึ้นอยู่กับประเภทของกระดาษที่จะผลิตแล้วจะเข้าสู่กระบวนการผลิตกระดาษต่อไป</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#3b5998',}}>3.  ประเภทแก้ว</Text>
                                      <Text style={{fontSize: 13,color:'#003366'}}>แก้วเป็นผลิตภัณฑ์ที่ทำมาจากทรายโดยมีหินปูนและโซดาไฟเป็นส่วนผสม โดยนำมาหลอมและขึ้นรูปเป็นภาชนะต่างๆ เช่น แก้วน้ำ ขวดอาหารและเครื่องดื่ม ฯลฯ แก้วเป็นวัสดุที่ไม่สามารถย่อยสลายได้ ขวดแก้วทุกประเภทสามารถนำมารีไซเคิลได้แต่ขวดแก้วแต่ละประเภทแต่ละสีจะมีาคาต่างๆ คือ ขวดแก้วสีขาวจะมีราคาดีที่สุด รองลงมาคือสีชาและสีเขียว ถ้าเป็นขวดดีไม่แตกก็จะได้ราคาสูงกว่าขวดแตกหรือเศษแก้ว ดังนั้นควรมีการคัดแยกแก้วออกตามสี</Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 14 ,marginLeft:5,color:'#3b5998',}}>   การนำแก้วไปรีไซเคิล</Text>
                                      <Text style={{ fontSize: 14 ,marginLeft:5,color:'#3b5998',paddingBottom:5}}>-  ขวดแก้วดี </Text>
                                          <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
                                               source={require('../img/Re2.png')}
                                              />
                                        <Text style={{fontSize: 13,color:'#003366',paddingTop:10}}> ขวดแก้วที่ไม่แตกจะถูกนำมาคัดแยกตามสีและประเภทที่บรรจุสินค้า เช่น ขวดแม่โขง ขวดเบียร์ ขวดน้ำปลา ขวดซอส ขวดน้ำอัดลมแบบวันเวย์ ฯลฯ  ขวดแก้วเหล่านี้หากไม่แตกบิ่นเสียหายจะถูกส่งแลับเข้าโรงงานเพื่อนำไปล้างและฆ่าเชื้อโรคและนำกลับมาบรรจุสินค้าใหม่ซ้ำอีกอย่างน้อยถึง 30 ครั้ง โดยผู้ผลิตสินค้าเดิม เช่น บริษัทผลิตเบียร์จำนำขวดเบียร์ที่ใช้แล้วมาผ่านกระบวนการล้างและทำความสะอาดด้วยสารเคมีต่างๆ แล้วจึงนำกลับมาบรรจุเบียร์อีกครั้ง</Text>
                                      <Text style={{ fontSize: 14 ,marginLeft:5,color:'#3b5998',paddingBottom:5}}>-  ขวดแก้วแตกหรือเศษแก้ว</Text>
                                          <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
                                               source={require('../img/Re4.png')}
                                              />
                                        <Text style={{fontSize: 13,color:'#003366',paddingTop:10}}> ขวดที่แตกชำรุดเสียหายจะถูกนำมาคัดแยกสี คือ ขวดแก้วขาว ขวดแก้วสีชา ขวดแก้วสีเขียว แมื่อแยกสีแล้วจะถูกส่งเข้าโรงงานหลอมแก้ว เพื่อทุบให้แตกละเอียด ล้างทำความสะอาดด้วยสารเคมีและหลมละลาย เพื่อเป่าเป็นขวดใหม่</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 18 ,marginLeft:5,color:'#3b5998',paddingBottom:5}}>4.  ประเภทโลหะ</Text>
                                  <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
                                               source={require('../img/Re3.png')}
                                              />
                                <Text style={{fontSize: 13,color:'#003366',paddingBottom:5,paddingTop:10}}>โลหะหลากหลายชนิดสามารถนำมารีไซเคิลได้โดยการนำมาหลอมและแปรรูปเป็นผลิตภัณฑ์อื่นๆ สามารถแบ่งโลหะออกได้ 3 กลุ่มใหญ่ คือ</Text>      
                                  <Text style={{fontWeight: 'bold', fontSize: 14 ,marginLeft:5,color:'#3b5998',}}>1. โลหะประเภทเหล็ก</Text>
                                    <Text style={{fontSize: 13,color:'#003366'}}>เหล็กสามารถนำมารีไซเคิลได้ทุกชนิด สามารถแบ่งได้เป็น 3 ประเภท คือ เหล็กหล่อ เหล็กหนา และเหล็กบาง ราคราซื้อขายจะต่างกันตามประเภทของเหล็ก ซึ่งพ่อค้ารับซื้อของเก่าจะทำการตัดเหล็กตามขนาดต่างๆ ตามที่ท่างโรงงานกำหนดเพื่อสะดวกในการเข้าเตาหลอมและการขนส่ง</Text>                                  
                                  <Text style={{fontWeight: 'bold', fontSize: 14 ,marginLeft:5,color:'#3b5998',}}>2. โลหะประเภทอะลูมิเนียม</Text>
                                    <Text style={{fontSize: 13,color:'#003366'}}>โลหะประเภทอะลูมิเนียม  แบ่งออกได้เป็น 2 ประเภทคือ (1) อะลูมินียมหนา เช่น อะไหร่เครื่องยนต์ ลูกสูบ อะลูมิเนียมาอัลลอย ฯลฯ (2) อะลูมิเนียมบาง เช่น หม้อ กะละมังซักผ้า ขันน้ำ กระป๋องเครื่องดื่ม ฯลฯ ราคาซื้อขายโลหะประเภทอะลูมิเนียมมีราคาตั้งแต่ 10 บาท ถึง 45 บาท แล้วแต่ประเภท อะลูมิเนียมหนาจะมีราคาแพงกว่าอะลูมิเนียมบาง แต่ขยะอะลูมิเนียมที่พบมากในกองขยะส่วนใหญ่จะเป็นพวกกระป๋องเครื่องดื่ม เช่น กระป๋องน้ำอัดลม กระป๋องเบียร์  โดยเฉพาะกระป๋องน้ำอัดลมจะเป็นขยะที่มีปริมาตรมาก ดังนั้นก่อนนำไปขายควรจะอัดกระป๋องให้มีปริมาตรเล็กลงเพื่อที่จะได้ประหยัดพื้นที่ในการขนส่ง สำหรับการรีไซเคิลกระป๋องอะลูมิเนียมนั้นพ่อค้ารับซื้อของเก่าจะทำการอัดกระป๋องอะลูมิเนียมให้มีขนาดตามที่ทางโรงงานกำหนดมา กระป๋องอะลูมิเนียมสามารถนำกลับมารีไซเคิลซื้กได้หลายๆ ครั้ง ไม่มีการกำจัดจำนวนครั้งของการผลิต เมื่อกระป๋องอะลูมิเนียมถูกส่งเข้าโรงงานแล้วจะถูกบดเป็นชิ้นเล็กๆ แล้วหลอมให้เป็นแท่งแข็ง จากนั้นนำไปรีดให้เป็นแผ่นบางเพื่อส่งต่ไปยังโรงงานผลิตกระป๋องเพื่อผลิตกระป่องใหม่</Text>
                                  <Text style={{fontWeight: 'bold', fontSize: 14 ,marginLeft:5,color:'#3b5998',}}>3. โหละประเภททองเหลือง ทองแดง และสแตนเลส</Text>
                                    <Text style={{fontSize: 13,color:'#003366'}}>โลหะประเภทนี้มีราคาสูงประมาณ 30-60 บาท โดยทองเหลืองสามารถนำมากลับมาหลอมใหม่ โดยทำเป็นพระ ระฆัง อุปกรณ์สุขภัณฑ์ต่างๆ ส่วนทองแดงก็นำกลับมาหลอมทำสายไฟได้ใหม่</Text>
                                <Text style={{fontSize: 13,color:'#003366',paddingTop:10}}>ปัจจัยสำคัญในการรีไซเคิลวัสดุประเภทต่างๆ ไม่ว่าจะเป็นโลหะ พลาสติก กระดาษ แก้ว ก็คือจะต้องแยกประเภทของขยะรีไซเคิลแต่ละชนิดออกจากกันไม่ให้ปนกัน และทำความสะอาดวัสดุก่อนที่จะนำไปขาย ถ้าเป็นกระป่องก็ควรจะทำการอัดเพื่อลดปริมาตรของชขยะก่อนที่จำนำไปขาย</Text>
                        </View>
                        </ScrollView>
                </View>
        </View>
      </View>
    )
}
}


class FourthScreen extends React.Component {
render() {
    return (
        <View style={styles._container}>
        <View style={styles._header}>
          <View style={styles._subHead2}>
          </View>
          <View style={styles._subHead1}>
            <Text style={styles._headText}>uTrash</Text>
          </View>
          <View style={styles._subHead2}>
          </View>
        </View>
        <View style={styles._teamPage}>
            <View style={{flex:1,flexDirection: 'column',backgroundColor : '#f06c6c',}}>
                    <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24 ,alignSelf:'center', color:'#3b5998',marginBottom:10,}}>Hazardous waste</Text>
                    
                        <View style={{flex:1,flexDirection: 'column',marginLeft:10,marginRight:10,backgroundColor:'rgba(0,0,0,0)'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18 , marginLeft:5,color:'#3b5998',}}>Hazardous type</Text>
                            <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Toxic waste, also called hazardous waste or poisonous waste is simple any kind of waste that is known to cause deaths and serious health conditions to living things and the environment. The effect may be immediate or long term. Toxic waste may be in the form of solid, liquid and sludge. Examples are lead, and some metals found in computer and technological items. Examples include asbestos, used-up engine oils, batteries, solvents, farming chemicals, cleaning chemicals and parts of refrigerators and computers.</Text>
                              <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
                                               source={require('../img/Ha2.png')}
                                              /> 
                            <Text style={{fontWeight: 'bold', fontSize: 18 , marginLeft:5,color:'#3b5998',}}>Final disposal of harzardous waste</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Recycling</Text>
                                    <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Some hazardous wastes can be recycled into new products.Examples may include lead-acid batteries or electronic circuit boards. When heavy metals in these types of ashes go through the proper treatment, they could bind to other pollutants and convert them into easier-to-dispose solids, or they could be used as pavement filling. Such treatments reduce the level of threat of harmful chemicals, like fly and bottom ash, while also recycling the safe product.</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Portland cement</Text>
                                    <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Another commonly used treatment is cement based solidification and stabilization. Cement is used because it can treat a range of hazardous wastes by improving physical characteristics and decreasing the toxicity and transmission of contaminants. The cement produced is categorized into 5 different divisions, depending on its strength and components. This process of converting sludge into cement might include the addition of pH adjustment agents, phosphates, or sulfur reagents to reduce the settling or curing time, increase the compressive strength, or reduce the leachability of contaminants.</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Incineration, destruction and waste-to-energy</Text>
                                    <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Hazardous waste may be "destroyed". For example, by incinerating it at a high temperature, flammable wastes can sometimes be burned as energy sources. For example, many cement kilns burn hazardous wastes like used oils or solvents. Today, incineration treatments not only reduce the amount of hazardous waste, but also generate energy from the gases released in the process. It is known that this particular waste treatment releases toxic gases produced by the combustion of byproduct or other materials which can affect the environment. However, current technology has developed more efficient incinerator units that control these emissions to a point where this treatment is considered a more beneficial option. There are different types of incinerators which vary depending on the characteristics of the waste. Starved air incineration is another method used to treat hazardous wastes. Just like in common incineration, burning occurs, however controlling the amount of oxygen allowed proves to be significant to reduce the amount of harmful byproducts produced. Starved air incineration is an improvement of the traditional incinerators in terms of air pollution. Using this technology, it is possible to control the combustion rate of the waste and therefore reduce the air pollutants produced in the process.</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Hazardous waste landfill (sequestering, isolation, etc.)</Text>
                                      <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
                                               source={require('../img/Ha4.png')}
                                              />
                                    <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Hazardous waste may be sequestered in an hazardous waste landfill or permanent disposal facility. "In terms of hazardous waste, a landfill is defined as a disposal facility or part of a facility where hazardous waste is placed or on land and which is not a pile, a land treatment facility, a surface impoundment, an underground injection well, a salt dome formation, a salt bed formation, an underground mine, a cave, or a corrective action management unit (40 CFR 260.10)."</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>Pyrolysis</Text>
                                    <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>Some hazardous waste types may be eliminated using pyrolysis in an ultra high temperature electrical arc, in inert conditions to avoid combustion. This treatment method may be preferable to high temperature incineration in some circumstances such as in the destruction of concentrated organic waste types, including PCBs, pesticides and other persistent organic pollutants</Text>
                                     
                                    
                                    
                        </View>
                        </ScrollView>
                </View>
            

        </View>
      </View>

     
      
      // <View style={styles._container}>
      //   <View style={styles._header}>
      //     <View style={styles._subHead2}>
      //     </View>
      //     <View style={styles._subHead1}>
      //       <Text style={styles._headText}>uTrash</Text>
      //     </View>
      //     <View style={styles._subHead2}>
      //     </View>
      //   </View>
      //   <View style={styles._teamPage}>
      //       <View style={{flex:1,flexDirection: 'column',backgroundColor : '#f06c6c',}}>
      //               <ScrollView contentContainerStyle={{paddingVertical: 20}}>
      //               <Text style={{fontWeight: 'bold', fontSize: 24 ,alignSelf:'center', color:'#3b5998',marginBottom:10,}}>ขยะอันตราย</Text>
                    
      //                   <View style={{flex:1,flexDirection: 'column',marginLeft:10,marginRight:10,backgroundColor:'rgba(0,0,0,0)'}}>
      //                       <Text style={{fontWeight: 'bold', fontSize: 18 , marginLeft:5,color:'#3b5998',}}>ถังขยะสีแดง</Text>
      //                       <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ถังขยะสีแดง (Hazardous waste)  ใช้สำหรับรองรับขยะที่มีอันตราย ขยะที่มีพิษต่อสิ่งมีชีวิตและสิ่งแวดล้อม เช่น หลอดฟลูออเรสเซนต์ ขวดยา ถ่านไฟฉาย กระป๋องสีสเปรย์ กระป๋องยาฆ่าแมลง ภาชนะบรรจุสารอันตรายต่าง ๆ และเวลาผ่านไป สารเคมีที่เสื่อมสภาพภายในจะไหลออกสู่สิ่งแวดล้อม สารพิษนี้ก็จะเข้าสู่ระบบนิเวศและระบบห่วงโซ่อาหารผ่านทางเดิน น้ำ และอากาศ และก่อให้เกิดอันตรายต่าง ๆ ได้ดังนี้ </Text>
      //                       <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
      //                                          source={require('../img/Ha3.png')}
      //                                         /> 

      //                           <Text style={{ fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>ความเป็นพิษของตะกั่ว</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>เป็นส่วนประกอบของการบัดกรีร่วมกับดีบุกในแผงวงจร มีผลทำลายระบบประสาทส่วนกลางและระบบโลหิต การทำงานของไตและการสืบพันธุ์ มีผลต่อการพัฒนาสมองของเด็ก  นอกจากนี้ยังสามารถสะสมในบรรยากาศ และเกิดผลแบบเฉียบพลันหรือเรื้อรังกับพืช สัตว์ และจุลินทรีย์</Text>
      //                           <Text style={{ fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>ความเป็นพิษของแคดเมียม</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ซึ่งเป็นส่วนประกอบของแบตเตอรี่บางประเภท สามารถสะสมในร่างกาย โดยเฉพาะที่ไต ทำลายระบบประสาท ส่งผลเสียต่อพัฒนาการของเด็กและภาวะตั้งครรภ์ และยังอาจมีผลต่อพันธุกรรม</Text>
      //                           <Text style={{ fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>ความเป็นพิษของสารทนไฟซึ่งทำจากโบรมีน</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ซึ่งใช้ในกล่อยสายไฟ แผงวงจรและตัวเชื่อมต่ออาจเป็นพิษ และสะสมในสิ่งมีชีวิต ถ้ามีทองแดงร่วมด้วย จะเพิ่มความเสี่ยงในการเกิดไดอ๊อกซิน และฟิวแรนระหว่างการเผา ซึ่งเป็นสารก่อมะเร็งที่ร้ายแรงประเภทหนึ่งส่งผลเสียต่อระบบการย่อย และน้ำเหลือง ทำลายการทำงานของตับ มีผลต่อระบบประสาทและภูมิต้านทาน</Text>
      //                           <Text style={{ fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>ความเป็นพิษของเบริลเรียม</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ใช้ในสปิงและตัวเชื่อม เป็นสารก่อมะเร็ง โดยเฉพาะปอดซึ่งเป็นอวัยวะที่ได้รับสาร ผู้ได้รับสารนี้อย่างต่อเนื่องจากการสูดดมจะกลายเป็นโรค Berylicosis ซึ่งมีผลกับปอด หากสัมผัสจะทำให้เกิดแผลที่ผวหนังอย่างรุนแรง ทำให้ระบบการทำงานของต่อมไทรอยด์และต่อมไร้ท่อผิดปกติ สะสมในน้ำนม กระแสเลือดและถ่ายทอดในห่วงโซ่อาหาร</Text>
      //                           <Text style={{ fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>ความเป็นพิษของสารหนู</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ซึ่งใช้ในแผงวงจร จะมีผลทำลายระบบประสาท ผิวหนัง และระบบการย่อยอาหาร หากได้รับในปริมาณมาก อาจทำให้ถึงตายได้</Text>
      //                           <Text style={{ fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>ความเป็นพิษของนิกเกิล</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ซึ่งเป็นองค์ประกอบของแบตเตอรี่ ฝุ่นนิกเกิลถูกจัดว่าเป็นสารก่อมะเร็งในสัตว์ทดลองและอาจเป็นสาเหตุให้เกิดมะเร็งปอดในสัตว์ทดลอง และอาจมีผลต่อระบบสืบพันธุ์ด้วย นอกจากนี้ ผลเรื้อรังจากการสัมผัสนิกเกิล ได้แก่ การแพ้ของผิวหนัง ซึ่งประกอบด้วย การมีแผลไหม้ คัน เป็นผื่นแดง มีอาการแพ้คล้ายการเป็นหืดหอบ และแน่นหน้าอก</Text>
      //                           <Text style={{ fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>ความเป็นพิษของลิเทียม</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ซึ่งเป็นองค์ประกอบของแบตเตอรี่ เป็นอันตรายเมื่อกลืนกินสูดดม หรือถูกดูดซึมผ่านผิวหนัง สารนี้ทำลายเนื้อเยื่อของเยื่อบุเมือกและทางเดินหายใจ รวมทั้งดวงตาและผิวหนังอย่างรุนแรง การสูดดมอาจก่อให้เกิดอาการชัก กล่องเสียงและหลอดลมใหญ่อักเสบ โรคปอดอักเสบจากสารเคมี และน้ำท่วมปอด อาการต่าง ๆ ของการได้รับสารประกอบด้วยความรู้สึกปวดแสบปวดร้อน ไอ หายใจ มีเสียงหวีด การอัเสบที่ตอนบนของหลอดลม หายใจถี่ ปวดศรีษะ คลื่นเหียน และอาเจียน</Text>
      //                           <Text style={{ fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}> ความเป็นพิษของโคบอลท์</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',}}>ถูกจัดว่าเป็นสารก่อมะเร็งในสัตว์ทดลอง การหายใจเข้าไปจะก่อให้เกิดการระคายเคืองต่อเยื่อเมือกและทางเดินหายใจ ก่อให้เกิดอาการไอ และหายใจติดขัด และหายใจถ่รัว ผลกระทบของการสัมผัสสารนี้เป็นระยะเวลานานหรือการสัมผัสซ้ำ ๆ จะก่อให้เกิดการอักเสบของผิวหนัง ทำให้เกิดผื่นแดง ทำให้เกิดผลกระทบต่อระบบเลือด หัวใจ และต่อมไทรอยด์ และอาจทำให้เกิดความผิดปกติของปอด</Text>

      //                           <Text style={{ fontWeight: 'bold',fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>แนวทางการจัดการซากโทรศัพท์มือถือและแบตเตอรี่ในประเทศไทย</Text> 
      //                             <Image style={{width:"90%",height:200,/*opacity:0.2,*/alignSelf:'center',}}
      //                                          source={require('../img/Ha1.png')}
      //                                         /> 
      //                             <Text style={{ fontWeight: 'bold',fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>๑.  การป้องกันและลดการเกิดซากฯ</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:15}}>  - ผู้ผลิต พัฒนาผลิตภัณฑ์ให้ใช้สารอันตรายน้อยที่สุดและออกแบบให้สามารถรีไซเคิลได้ง่าย</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:15}}>  - เลือกซื้อ เลือกใช้ผลิตภัณฑ์ที่มีคุณภาพ ได้มาตรฐาน เพื่อยืดอายุการใช้งาน ลดการกลายเป็นซากฯ เลี่ยงการใช้ผลิตภัณฑ์ที่มีสารอันตรายเป็นส่วนประกอบ</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',marginLeft:15}}>  - ใช้อย่างคุ้มค่า เลือกซื้อรุ่นที่เหมาะสมกับการใช้งาน ใช้อย่างระมัดระวัง ดูแลรักษาตามคู่มือการใช้งาน ซ่อมแซม หรือให้ผู้อื่นใช้ต่อก่อนจะทิ้งเป็นซากฯ</Text>
      //                             <Text style={{ fontWeight: 'bold',fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>๒.  การแยกทิ้ง</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:15}}>  - ไม่ทิ้งซากฯ ปะปนกับขยะทั่วไป ไม่นำซากฯ ไปเผา ฝังดิน หรือทิ้งในแหล่งน้ำ</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',marginLeft:15}}>  - ทิ้งซากฯ ตามสถานที่ หรือ ตามเวลาที่กำหนด นำซากฯ ไปทิ้งยังสถานที่ หรือ จุดรับทิ้งที่หน่วยงานท้องถิ่น ผู้ผลิต หรือผู้ให้บริการแครือข่ายโทรศัพท์มือถือจัดไว้ให้ หรือ ทิ้งให้กับหน่วยงานท้องถิ่นในเขตของท่าน ตามวัน เวลาที่กำหนดสำหรับการทิ้งของเสียอันตรายจากชุมชน</Text>
      //                             <Text style={{ fontWeight: 'bold',fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>๓.  การรีไซเคิล</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:5}}>  การหมุนเวียนซากแบตเตอรี่กลับมาแปรรุปใช้ใหม่ เนื่องจากแบตเตอรี่ของโทรศัพท์มือถือนี้มีโลหะมีค่าเป็นส่วนประกอบจึงมีความคุ้มค่าที่จะสามารถนำมารีไซเคิลได้ การรีไซเคิลในต่างประเทศมีกระบวนการ ดังนี้</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:15}}>  - นำแบตเตอรี่ไปบดและใส่ลงไปในสารละลายเฉพาะ</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:15}}>  - น้ำเสียที่เกิดขึ้น นำไปปรับสภาพให้เป็นกลาง</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:15}}>  - แยกโลหะหนักที่มีออก โดยการใช้ไฟฟ้าหรือวิธีอื่น</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:15}}>  - นำโลหะหนักที่ได้ไปใช้ใหม่</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:15}}>  - ส่วนที่เหลือนำไปฝังกลบ ตามวิธีที่กล่าวในข้างต้น</Text>
      //                               <Text style={{fontSize: 13 ,paddingBottom:10,color:'#003366',marginLeft:15}}>  - หรือนำแบตเตอรี่ผ่านกระบวนการถลุงในเตาหลอมเพื่อแยกโลหะมีค่ากลับมาใช้ใหม่</Text>
      //                             <Text style={{ fontWeight: 'bold',fontSize: 14 ,paddingTop: 5,color:'#3b5998',}}>๔.  การบำบัดและกำจัดซากแบตเตอรี่</Text>
      //                               <Text style={{fontSize: 13 ,color:'#003366',marginLeft:5}}>      ในขั้นต้น รวบรวมวากแบตเตอรี่แล้วให้ดำเนินการคัดแยกส่วนที่นำกลับมาใช้ใหม่ได้ออกจากส่วนที่ต้องนำไปกำจัด และนำส่วนที่ต้องกำจัดไปดำเนินการปรับเสถียรก่อน เพื่อให้สารพิษมีความเสถียรเพิ่มขึ้น ไม่เกิดปฏิกิริยาหรือรั่วไหลปนเปื้อน และไม่ละลายเมื่อถูกชะล้าง ก่อนจะนำไปฝังในสถานที่ฝังกลบแบบปลอดภัย (Secured Landfill) ซึ่งออกแบบให้สามารถป้องกันมิให้มีการรั่วไหลของสารพิษออกสู่สิ่งแวดล้อม โดยใช้วัสดุสังเคราะห์กันซึมหลายชั้น พร้อมระบบเก็บรวบรวมน้ำชะ (Leachate) และระบบการตรวจสอบการรั่วซึมภายใต้กำระเบียบและมาตรฐานที่กำหนด ปัจจุบันผู้ประกอบการรับซากโทรสัพท์มือถือและซากแบตเตอรี่มาผ่านกระบวนการรีไซเคิลที่มีการควบคุมมลพิษอย่างถูกต้องเพื่อนำโลหะมีค่ากลับมาใช้ใหม่อีกครั้ง โดยส่งออกไปดำเนินการในต่างประเทศทีมีเทคโนโลยีชั้นสูง</Text>
                                    


      //                   </View>
      //                   </ScrollView>
      //           </View>
            

      //   </View>
      // </View>


    )
}
}
 
 
const teamPage = StackNavigator({
    Fourth: { screen: FourthScreen },

  First: { screen: FirstScreen },
  Second: { screen: SecondScreen },
  Third: { screen: ThirdScreen },
  Fourth: { screen: FourthScreen },
  
  
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
  });
 
 
 
export default teamPage