import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      TextoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      TextoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png'),


    });
  }

  render(){
    return(
      <View style={styles.container}>

      <Image
        source={this.state.img}
        style={styles.img}
      />

      <Text style={styles.TextoFrase}>{this.state.TextoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      </View>
    );
  }
  
}


const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: 20,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#FFFFFF'

},

img:{
width: 250,
height: 250,
},

TextoFrase:{
fontSize: 20,
color: '#dd7b22',
margin: 30,
fontStyle: 'italic',
textAlign: 'center'
},

botao:{
width: 230,
height: 50,
borderWidth: 2,
borderColor: '#dd7b22',
borderRadius: 25
},

btnArea:{
flex: 1,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center'
},

btnTexto:{
fontSize: 18,
fontWeight: 'bold',
color: '#dd7b22'
}
});


export default App;

