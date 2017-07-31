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

export default class RecycleTeam extends Component {

    render() {

        return (
            <View style={styles.container}>
                 <View style={styles.header}>
                     <Button title= 'BACK'color="rgba(0,0,0,0)" />
                     <Text style={styles.teamName}>Recycle team</Text>
                 </View>
                <View style={styles.body}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.teamName}>Recycle waste</Text>
                    
                        <View style={styles.teamInfo}>
                            <Text style={styles.teamTopic}>Recycle type</Text>
                            <Text style={styles.paragraph}>Recycling is processing used materials (waste) into new, useful products. This is done to reduce the use of raw materials that would have been used. Waste that can be potentially recycled is termed "Recyclable waste". Aluminum products (like soda, milk and tomato cans), Plastics (grocery shopping bags, plastic bottles), Glass products (like wine and beer bottles, broken glass), Paper products (used envelopes, newspapers and magazines, cardboard boxes) can be recycled and fall into this category.</Text>
                            <Text style={styles.teamTopic}>Here is how paper waste is recycled:</Text>
                                <Text style={styles.subTopic}>Collection, transportation and storage:</Text>
                                    <Text style={styles.paragraph}>The biggest task for paper recycling companies is probably the collection, transporting and sorting of waste paper. </Text>
                                    <Text style={styles.paragraph}>This is because we always add paper to other waste items and get them contaminated with food, plastics and metals. </Text>
                                    <Text style={styles.paragraph}>Sometimes collected paper is sent back to the landfills because they are too contaminated for use. Try to keep waste paper in separate grades at home or in the office —example, do not mix newspapers and corrugated boxes up.</Text>
                                    <Text style={styles.paragraph}>All paper recovered is sent to the recycling center, where it is packed, graded, put into bales and sent to the paper mill. At the mill, all the paper is stored in a warehouse until it is needed.</Text>
                                <Text style={styles.subTopic}>Preparation:</Text>
                                    <Text style={styles.paragraph}>At the collection center, a huge magnet is rolled over them as they move on the conveyor belt to pull out all the metal and steel cans. Only the aluminum cans are washed, crushed, condensed into 30-pounds briquettes for other companies for further processing. The rest is also sorted and sent to their appropriate recycling centers.</Text>
                                <Text style={styles.subTopic}>Melting:</Text>
                                    <Text style={styles.paragraph}>The crushed cans are loaded into a burning furnace, where all printing and designs on the cans are removed, melted and blended with new (virgin) aluminum. The molten (liquid) aluminum is poured into moulds and made into bars called ingots.</Text>
                                <Text style={styles.subTopic}>Sheets:</Text>
                                    <Text style={styles.paragraph}>The ingots are then fed into powerful rollers, which flatten them into thin sheets of aluminum of about 25.4 in thickness. These thin sheets are rolled into coils and sold or sent to can-making factories. They use the aluminum coils to prepare cans and containers for other food and drink manufacturers. It is estimated that cans collected at collection points take up to 60 days to be appear in the shops again as new cans containing your favourite soda, juice or food.</Text>
                            <Text style={styles.teamTopic}>Aluminum recycling</Text>
                                <Text style={styles.subTopic}>Collection:</Text>
                                    <Text style={styles.paragraph}>Local councils provide special can recycling containers (bins) that are clearly marked. This helps people to know what to place in them. Cans include soda, fruit and vegetable cans. Trucks come for these at pick up spots to the recycling centers. Cans may also be metallic or steel, but people do not know the difference.</Text>
                                <Text style={styles.subTopic}>Preparation:</Text>
                                    <Text style={styles.paragraph}>At the collection center, a huge magnet is rolled over them as they move on the conveyor belt to pull out all the metal and steel cans. Only the aluminum cans are washed, crushed, condensed into 30-pounds briquettes for other companies for further processing. The rest is also sorted and sent to their appropriate recycling centers.</Text>
                                <Text style={styles.subTopic}>Melting:</Text>
                                    <Text style={styles.paragraph}>The crushed cans are loaded into a burning furnace, where all printing and designs on the cans are removed, melted and blended with new (virgin) aluminum. The molten (liquid) aluminum is poured into moulds and made into bars called ingots.</Text>
                                <Text style={styles.subTopic}>Sheets:</Text>
                                    <Text style={styles.paragraph}>The ingots are then fed into powerful rollers, which flatten them into thin sheets of aluminum of about 25.4 in thickness. These thin sheets are rolled into coils and sold or sent to can-making factories. They use the aluminum coils to prepare cans and containers for other food and drink manufacturers. It is estimated that cans collected at collection points take up to 60 days to be appear in the shops again as new cans containing your favourite soda, juice or food. </Text>
                            <Text style={styles.teamTopic}>How is glass recycled?</Text>
                                <Text style={styles.subTopic}>Collection:</Text>
                                    <Text style={styles.paragraph}>Many cities have collection spots. Trucks may also pick them up from your home, or you may be required to drop them off at a point in your town. In all cases, try to do what the authorities have suggested. So, be sure you know the various glass types that are collected from your home. Always wash and separate them into the required grades for collection.</Text>
                                <Text style={styles.subTopic}>Cleaning and Crushing:</Text>
                                    <Text style={styles.paragraph}>The glass is transported to the processing plant where contaminants such as metal caps and plastic sleeves are removed. Different grades are treated separately. Clean glass is then crushed into small pieces called cullet. Cullet is in high demand from glass manufacturers. It melts at a lower temperature and it is cheaper than raw glass materials.</Text>    
                                <Text style={styles.subTopic}>Ready for use:</Text>
                                    <Text style={styles.paragraph}>The cullet is then transported to glass-making factories. Here, it is mixed with sand, soda ash and limestone. It is heated at very high temperature and melted into liquid glass. This liquid is then poured into moulds that give glass its shape.</Text>
                                    
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
        backgroundColor : '#997c37',

    },
    body: {
        flex:1,
        flexDirection: 'column',
        backgroundColor : '#e5ba52',
        
    },
    footer: {
        flex:0.1,
        flexDirection: 'row',
        backgroundColor : '#b29040',
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
    contentContainer: {
    paddingVertical: 20
  },
   
}
)