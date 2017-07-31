import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    span,
    ScrollView,
    Button
} from 'react-native';

export default class GeneralTeam extends Component {

    render() {

        return (
            <View style={styles.container}>
                 <View style={styles.header}>
                     <Button title= 'BACK'color="rgba(0,0,0,0)" />
                     <Text style={styles.teamName}>General waste Team</Text>
                 </View>
                <View style={styles.body}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.teamName}>General waste</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 24 ,alignSelf:'center', color:'#207068',marginBottom:10,}}></Text>
                        <View style={styles.teamInfo}>
                            <Text style={styles.teamTopic}>General waste Type</Text>
                            <Text style={styles.paragraph2}>General waste , material must be free of any actual or apparent contamination (pathological/infectious, radioactive and/ or hazardous chemical). In some cases, after disinfection or decontamination, previously contaminated material may be treated as general waste.</Text>
                            <Text style={styles.paragraph}>Examples of general waste include: Office waste (paper, boxes, folders, plastic, glass), decontaminated labware (see Medical Waste section), animal bedding (not contaminated), etc.</Text>
                            <Text style={styles.teamTopic}>Let see the common ways of managing waste</Text>
                                <Text style={styles.subTopic}>1. Incineration method of waste management:</Text>
                                    <Text style={styles.paragraph}>This simply means burning waste. This method is common in countries with limited landfill space. Incineration chambers can be small for domestic use, but there are large ones for municipal use as well. It is great for treating waste with contamination (like those from hospitals) and hazardous waste from factories, but the method produces too much carbon dioxide. Modern incineration processes are more efficient and release less dioxin than home fireplaces and backyard barbecues. This method is very common in Denmark, Germany and the Netherlands. This method is effective, but expensive.</Text>
                                <Text style={styles.subTopic}>2. Sanitary Landfills as waste disposal:</Text>
                                    <Text style={styles.paragraph}>Generally, this term means a large piece of land away from living places where all the waste from a town is deposited. But there is more to landfills. Proper landfill management involves sorting out all the waste (waste separation), and sending only the waste that cannot be recycled and composted to the site. </Text>
                                    <Text style={styles.paragraph}>Proper landfills, are also lined at the bottom to minimize the leakage of soil pollutants and other toxins from getting into the water table. This method is effective, but expensive and difficult.</Text>
                                    <Text style={styles.paragraph}>In many towns, sorting is not done, and all the waste (paper, food, diapers, glass) is mixed up and deposited. That is a problem because, glass, and plastics take thousands of years to decompose. Additionally, the landfills soon become full, smelly and unsafe for the environment.</Text>
                                    
                        </View>
                        </ScrollView>
                </View>
                <View style={styles.footer}>
                    <Text>xx</Text>
                </View> 
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor : '#ab0b0b',
    },
    header: {
        flex:0.1,
        flexDirection: 'row',
        backgroundColor : '#0197ca',

    },
    body: {
        flex:1,
        flexDirection: 'column',
        backgroundColor : '#87ceeb',
        
    },
    footer: {
        flex:0.1,
        flexDirection: 'row',
        backgroundColor : '#0197ca',
    },
    teamName: {
        fontWeight: 'bold', 
        fontSize: 24 ,
        alignSelf:'center', 
        color:'#207068',
        marginBottom:10,
       
    },
    teamInfo:{
        flex:1,
        flexDirection: 'column',
        marginLeft:10,
        marginRight:10,
        backgroundColor:'rgba(0,0,0,0)'
    },
    teamTopic: {
        fontWeight: 'bold', 
        fontSize: 18 ,
        marginLeft:5,
        color:'#207068',
  
    },
    subTopic:{
        fontWeight: 'bold', 
        fontSize: 14 ,
        paddingTop: 5,
        color:'#207068',
        
        
    },
    paragraph: {
        fontSize: 13 ,
        paddingBottom:10,
        color:'#207068',
    },
    paragraph2: {
        fontSize: 13 ,
        color:'#207068',
        
    },
    contentContainer: {
    paddingVertical: 20
  },
   
}
)