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

export default class HarzardousTeam extends Component {

    render() {

        return (
            <View style={styles.container}>
                 <View style={styles.header}>
                     <Button title= 'BACK'color="rgba(0,0,0,0)" />
                     <Text style={styles.teamName}>Harzardous Team</Text>
                 </View>
                <View style={styles.body}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.teamName}>Hazardous waste</Text>
                    
                        <View style={styles.teamInfo}>
                            <Text style={styles.teamTopic}>Hazardous type</Text>
                            <Text style={styles.paragraph}>Toxic waste, also called hazardous waste or poisonous waste is simple any kind of waste that is known to cause deaths and serious health conditions to living things and the environment. The effect may be immediate or long term. Toxic waste may be in the form of solid, liquid and sludge. Examples are lead, and some metals found in computer and technological items. Examples include asbestos, used-up engine oils, batteries, solvents, farming chemicals, cleaning chemicals and parts of refrigerators and computers.</Text>
                            <Text style={styles.teamTopic}>Final disposal of harzardous waste</Text>
                                <Text style={styles.subTopic}>Recycling</Text>
                                    <Text style={styles.paragraph}>Some hazardous wastes can be recycled into new products.Examples may include lead-acid batteries or electronic circuit boards. When heavy metals in these types of ashes go through the proper treatment, they could bind to other pollutants and convert them into easier-to-dispose solids, or they could be used as pavement filling. Such treatments reduce the level of threat of harmful chemicals, like fly and bottom ash, while also recycling the safe product.</Text>
                                <Text style={styles.subTopic}>Portland cement</Text>
                                    <Text style={styles.paragraph}>Another commonly used treatment is cement based solidification and stabilization. Cement is used because it can treat a range of hazardous wastes by improving physical characteristics and decreasing the toxicity and transmission of contaminants. The cement produced is categorized into 5 different divisions, depending on its strength and components. This process of converting sludge into cement might include the addition of pH adjustment agents, phosphates, or sulfur reagents to reduce the settling or curing time, increase the compressive strength, or reduce the leachability of contaminants.</Text>
                                <Text style={styles.subTopic}>Incineration, destruction and waste-to-energy</Text>
                                    <Text style={styles.paragraph}>Hazardous waste may be "destroyed". For example, by incinerating it at a high temperature, flammable wastes can sometimes be burned as energy sources. For example, many cement kilns burn hazardous wastes like used oils or solvents. Today, incineration treatments not only reduce the amount of hazardous waste, but also generate energy from the gases released in the process. It is known that this particular waste treatment releases toxic gases produced by the combustion of byproduct or other materials which can affect the environment. However, current technology has developed more efficient incinerator units that control these emissions to a point where this treatment is considered a more beneficial option. There are different types of incinerators which vary depending on the characteristics of the waste. Starved air incineration is another method used to treat hazardous wastes. Just like in common incineration, burning occurs, however controlling the amount of oxygen allowed proves to be significant to reduce the amount of harmful byproducts produced. Starved air incineration is an improvement of the traditional incinerators in terms of air pollution. Using this technology, it is possible to control the combustion rate of the waste and therefore reduce the air pollutants produced in the process.</Text>
                                <Text style={styles.subTopic}>Hazardous waste landfill (sequestering, isolation, etc.)</Text>
                                    <Text style={styles.paragraph}>Hazardous waste may be sequestered in an hazardous waste landfill or permanent disposal facility. "In terms of hazardous waste, a landfill is defined as a disposal facility or part of a facility where hazardous waste is placed or on land and which is not a pile, a land treatment facility, a surface impoundment, an underground injection well, a salt dome formation, a salt bed formation, an underground mine, a cave, or a corrective action management unit (40 CFR 260.10)."</Text>
                                <Text style={styles.subTopic}>Pyrolysis</Text>
                                    <Text style={styles.paragraph}>Some hazardous waste types may be eliminated using pyrolysis in an ultra high temperature electrical arc, in inert conditions to avoid combustion. This treatment method may be preferable to high temperature incineration in some circumstances such as in the destruction of concentrated organic waste types, including PCBs, pesticides and other persistent organic pollutants</Text>
                                     
                                    
                                    
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
        backgroundColor : '#dc143c',

    },
    body: {
        flex:1,
        flexDirection: 'column',
        backgroundColor : '#f06c6c',
        
    },
    footer: {
        flex:0.1,
        flexDirection: 'row',
        backgroundColor : '#dc143c',
    },
    teamName: {
        fontWeight: 'bold', 
        fontSize: 24 ,
        alignSelf:'center', 
        color:'#3b5998',
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
        color:'#3b5998',
  
    },
    subTopic:{
        fontWeight: 'bold', 
        fontSize: 14 ,
        paddingTop: 5,
        color:'#3b5998',
        
        
    },
    paragraph: {
        fontSize: 13 ,
        paddingBottom:10,
        color:'#003366',
    },
    paragraph2: {
        fontSize: 13 ,
        paddingBottom:10,
        color:'#003366',
        marginLeft:20,
    },
    contentContainer: {
    paddingVertical: 20
  },
   
}
)