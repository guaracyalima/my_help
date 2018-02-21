import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class ListaItems extends Component {
  render() {
    return (
      <View style={ estilos.item }>
        <View style={ estilos.foto }>
          <Image source={ { uri: this.props.item.foto } } style={{ height: 100, width: 100}}></Image>
        </View>
        <View style={ estilos.detalhesItem }>
          <Text style={ estilos.titulo }>{ this.props.item.titulo }</Text>
          <Text style={ estilos.valor }>R$ { this.props.item.valor }</Text>
          <Text style={ estilos.detalhes }>{ this.props.item.local_anuncio }</Text>
          <Text>{ this.props.item.data_publicacao }</Text>
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  foto: {
    width: 102,
    height: 102
  },
  detalhesItem: {
    marginLeft: 20,
    flex: 1
  },
  titulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detalhes: {
    fontSize: 16
  }
})
