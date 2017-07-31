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

export default class OrganicTeam extends Component {

    render() {

        return (
            <View style={styles.container}>
                 <View style={styles.header}>
                     <Button title= 'BACK'color="rgba(0,0,0,0)" />
                     <Text style={styles.teamName}>Organic team</Text>
                 </View>
                <View style={styles.body}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.teamName}>Organic waste</Text>
                    
                        <View style={styles.teamInfo}>
                            <Text style={styles.teamTopic}>Organic type</Text>
                            <Text style={styles.paragraph}>Organic waste comes from plants or animals sources. Commonly, they include food waste, fruit and vegetable peels, flower trimmings and even dog poop can be classified as organic waste. They are biodegradable (this means they are easily broken down by other organisms over time and turned into manure).</Text>
                            <Text style={styles.teamTopic}>The medthod for disposal organic waste</Text>
                                <Text style={styles.subTopic}>Composting</Text>
                                    <Text style={styles.paragraph}>With the right conditions (air and moisture), organic waste such as food and plant materials can be decomposed by bacteria, fungi, worms and organisms. Decayed organic matter is humus. Yard waste such as grass and flower clippings can also be composted.</Text>
                                    <Text style={styles.paragraph}>Composting comes in two kinds: bin/pile composting and worm composting (vermiculture).</Text>
                                    <Text style={styles.paragraph}>Bin/pile composting is easier for many households because one does not have to be too careful with what to put into it. Here is what you need:</Text>
                                    <Text>ใส่รูป</Text>
                                    <Text style={styles.paragraph2}>1. Get an old bin or box (1 cubic yard), or you can buy one from the shop. Ensure that you punch holes around it to help with aeration. </Text>
                                    <Text style={styles.paragraph2}>2. Prepare your organic waste matter. Make sure you cut them into pieces (about 1inch in size). Do not throw in big chunks of the waste. Make sure you separate the organic waste into brown and green parts. Brown parts include waste like wood chips, saw-dust, yard waste shreds, straw and hay, dry leaves and shredded paper. Green parts include grass trimmings, fruit and veggie scraps, green leaves and livestock manure.</Text>
                                    <Text style={styles.paragraph2}>3. Put the waste in the box in layers, 50% green, 50% brown.</Text>
                                    <Text style={styles.paragraph2}>4. Mix and add some water every 7 days. </Text>
                                    <Text style={styles.paragraph}>In a couple of weeks, the compost will be ready. It will look dark-brown and smell just like soil.</Text>

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
        backgroundColor : '#6dc066',

    },
    body: {
        flex:1,
        flexDirection: 'column',
        backgroundColor : '#a0db8e',
        
    },
    footer: {
        flex:0.1,
        flexDirection: 'row',
        backgroundColor : '#6dc066',
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