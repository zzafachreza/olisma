import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'
import Icon from 'react-native-vector-icons/Ionicons'

export default function DetailTransaksi({ route, navigation }) {
  // Get transaction data from route params
  const { transaction } = route.params || {
    transaction: {
      id: 'ORD-374133',
      date: '2025-07-12T04:14:35.357Z',
      status: 'Menunggu Konfirmasi',
      product: {
        name: 'Paket Pendirian CV',
        price: 3500000,
        quantity: 1,
        total: 3500000,
        image: require('../../assets/product_placeholder.jpg')
      },
      payment: {
        method: 'bank',
        bank: 'BCA',
        proof: null
      },
      tracking: [
        { 
          time: '12 Jul 2025, 11:14',
          status: 'Menunggu Konfirmasi',
          note: 'Pembayaran sedang diverifikasi admin'
        }
      ]
    }
  };

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Menunggu Konfirmasi': return colors.warning;
      case 'Sedang Diproses': return colors.primary;
      case 'Dikirim': return colors.info;
      case 'Selesai': return colors.success;
      case 'Batal': return colors.danger;
      default: return colors.gray;
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Menunggu Konfirmasi': return 'time-outline';
      case 'Sedang Diproses': return 'refresh-outline';
      case 'Dikirim': return 'car-outline';
      case 'Selesai': return 'checkmark-done-outline';
      case 'Batal': return 'close-outline';
      default: return 'help-outline';
    }
  };

  return (
    <View style={styles.container}>
      <MyHeader title="Detail Transaksi" onPress={() => navigation.goBack()} />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
       
       

        {/* Tracking Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Status Transaksi</Text>
          {transaction.tracking.map((item, index) => (
            <View key={index} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={[
                  styles.timelineDot,
                  { backgroundColor: getStatusColor(item.status) }
                ]}>
                  <Icon 
                    name={getStatusIcon(item.status)} 
                    size={16} 
                    color={colors.white} 
                  />
                </View>
                {index !== transaction.tracking.length - 1 && (
                  <View style={styles.timelineLine} />
                )}
              </View>
              
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTime}>{item.time}</Text>
                <Text style={[
                  styles.timelineStatus,
                  { color: getStatusColor(item.status) }
                ]}>
                  {item.status}
                </Text>
                <Text style={styles.timelineNote}>{item.note}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    color: colors.dark,
    marginBottom: 15,
  },
  productInfo: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 15,
  },
  productName: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.dark,
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.dark,
  },
  totalText: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.primary,
  },
  paymentInfo: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.dark,
  },
  infoValue: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.dark,
  },
  proofImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineLeft: {
    width: 40,
    alignItems: 'center',
  },
  timelineDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: colors.border,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  timelineTime: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.gray,
    marginBottom: 3,
  },
  timelineStatus: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginBottom: 5,
  },
  timelineNote: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.dark,
    lineHeight: 20,
  },
})