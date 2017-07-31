import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    containerCol: {
        flex: 1,
        backgroundColor:'red'  
    },
    _intro:{
        flex:1,
        backgroundColor:'white'
    },
    _centerScreen:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    _input:{
        height: '6%',
        width:'80%',
        backgroundColor:'#ffffff',
        borderRadius:2.5,
        marginBottom:'2.5%'
    },
    _loginButton:{
        backgroundColor:'#1565c0',
        height: '6%',
        width:'80%',
        borderRadius:2.5,
        marginTop:'2.5%',
        paddingVertical:'2%'
    },
    _loginText:{
        color:'white',
        textAlign:'center',
        fontWeight:'500'
    },
    _errorMsg:{
        color:'red',
        textAlign:'center',
    },
    _IMGcontainer: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'stretch',
       
    },
    _subBgLogin: {
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.7)',
    },
    _container: {
        flex: 1,
        flexDirection: 'column',
    },
    _header:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#784212'  
    },
        _subHead1:{
            flex:8.5,
            backgroundColor:'#460000',
            alignItems:'center',
            justifyContent:'center'  
        },
        _subHead2:{
            flex:1.5,
            backgroundColor:'#460000',
            alignItems:'center',
            justifyContent:'center'  
        },
    _console:{
      flex:3,  
      backgroundColor:'#EDBB99'
    },
    _console2:{
      flex:1,  
      backgroundColor:'#e0e0e0'
    },
    _team:{
      flex:1.25,  
      backgroundColor:'#c23838',
      alignItems:'center',
      justifyContent:'center',
    },
    _body:{
      flex:3.5,  
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center',
     
 
    },
    _footer:{
      flex:1.25,
      backgroundColor:'#460000',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',  
    },
    _langButton:{
        backgroundColor:'white',
        height: '50%',
        width:'60%',
        borderRadius:2.5,
        marginTop:'0.5%',
        paddingVertical:'7.5%'
    },
    _langText:{
        color:'#402a2d',
        textAlign:'center',
        fontWeight:'500'
    },
    _headText:{
        color:'white',
        textAlign:'center',
        fontWeight:'300',
        fontSize:22
    },
    _centerConsole:{
        flex:1,
        height:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    _subText:{
        color:'#bdbdbd',
        fontSize:12
    },
    _mainText:{
        color:'white',
        fontSize:18,
        fontWeight:'200',
    },
    _trashButton:{
        backgroundColor:'#e0e0e0',
        height:'55%',
        width:'55%',
        borderRadius:20,
        paddingVertical:'1.5%'
    },
 
    _trashText:{
        color:'#460000',
        textAlign:'center',
        fontWeight:'500',
        fontSize:20
    },
    _containerRow:{
      flex:1,
      flexDirection:'row',
    },
    _egde:{
      flex:0.25,
    },
    _subConsole2:{
      flex:3,
      alignItems:'center',
      justifyContent:'center'
    },
    _subText2:{
        color:'#616161',
        fontSize:12
    },
    _mainText2:{
        color:'#af1e23',
        fontSize:18,
        fontWeight:'200',
    },
    _teamPage:{
      flex:10,  
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center',
    }
 
   
})