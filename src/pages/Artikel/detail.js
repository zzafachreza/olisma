import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';

export default function DetailArtikel({ route }) {
  const { artikel } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* MyHeader dengan judul artikel */}
      <MyHeader title={artikel.title} />
      
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Image 
            source={artikel.image}
            style={{
              width: '100%',
              height: 200,
              borderRadius: 10,
              marginBottom: 20
            }}
          />
          
          <Text style={{
            fontFamily: fonts.primary[600],
            fontSize: 18,
            color: colors.black,
            marginBottom: 10
          }}>
            {artikel.title}
          </Text>
          
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 12,
            color: colors.gray,
            marginBottom: 20
          }}>
            {artikel.date} • Oleh {artikel.author}
          </Text>
          
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 14,
            color: colors.black,
            lineHeight: 22
          }}>
            {artikel.content}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}