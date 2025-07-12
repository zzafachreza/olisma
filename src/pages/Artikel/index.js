import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'

export default function Artikel({navigation}) {
  // Data artikel dalam bentuk array dengan konten lengkap
  const artikelData = [
    {
      id: 1,
      title: "SPMB Tangsel 2025 jenjang SD: Jadwal daftar & kouta jalur penerimaan",
      image: require("../../assets/artikeldummy_1.png"),
      content: "Pendaftaran SPMB Tangsel 2025 untuk jenjang SD akan dibuka mulai 1 Maret 2025... [isi lengkap]",
      date: "15 Januari 2025",
      author: "Dinas Pendidikan Tangsel"
    },
    {
      id: 2,
      title: "Jadwal dan cara daftar SPMB TK Negeri Tangerang Selatan 2025/2026",
      image: require("../../assets/artikeldummy_2.png"),
      content: "Berikut adalah jadwal lengkap dan tata cara pendaftaran SPMB untuk TK Negeri... [isi lengkap]",
      date: "10 Januari 2025",
      author: "Dinas Pendidikan Tangsel"
    },
    {
      id: 3,
      title: "Pelindo: Penyesuaian tarif pas dukung keberlanjutan pelabuhan SBP",
      image: require("../../assets/artikeldummy_3.png"),
      content: "PT Pelindo melakukan penyesuaian tarif untuk mendukung operasional pelabuhan... [isi lengkap]",
      date: "5 Januari 2025",
      author: "Tim Pelindo"
    },
    {
      id: 4,
      title: "Pelindo tingkatkan kualitas pelayanan dan infrastruktur pelabuhan SBP",
      image: require("../../assets/artikeldummy_4.png"),
      content: "Berbagai peningkatan infrastruktur dan pelayanan dilakukan di Pelabuhan SBP... [isi lengkap]",
      date: "2 Januari 2025",
      author: "Tim Pelindo"
    }
  ];

  // Fungsi untuk handle navigasi ke detail artikel
const handleArtikelPress = (artikel) => {
  navigation.navigate('DetailArtikel', { 
    artikel,
    title: artikel.title
  });
};
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      <MyHeader title="Artikel"/>

      <ScrollView>
        <View style={{ padding: 20 }}>
          {/* List Artikel menggunakan map */}
          {artikelData.map((artikel) => (
            <TouchableOpacity 
              key={artikel.id} 
              style={{ marginBottom: 20 }}
              onPress={() => handleArtikelPress(artikel)}
              activeOpacity={0.7}
            >
              <View style={{
                padding: 20,
                borderRadius: 20,
                backgroundColor: colors.primary,
                height: 250
              }}>
                <View>
                  <Image 
                    style={{
                      width: "100%",
                      height: 150,
                      borderRadius: 10
                    }} 
                    source={artikel.image}
                  />
                </View> 

                <View>
                  <Text style={{
                    fontFamily: fonts.primary[500],
                    color: colors.white,
                    textAlign: "left",
                    fontSize: 13,
                    marginTop: 20
                  }}>
                    {artikel.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}