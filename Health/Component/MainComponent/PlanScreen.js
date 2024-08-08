import { View, Text, ScrollView, StyleSheet, Pressable,Image } from 'react-native';
import React,{useState,useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PlanScreen = () => {
  const [user,setUser] = useState();
useEffect(()=>{ 
  try {
    
    async function fetchUser(){
     const data = await AsyncStorage.getItem('name')
     setUser(data);
    }
    fetchUser();
  } catch (error) {
    console.log(error)
  }

},[]);
  return (
   <SafeAreaView style={styles.SafeAreaView}>
    <ScrollView>
      <View style = {styles.container}>
      <Card style={styles.CardContainer}>
      <Card.Cover source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAEKAZ4DASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAECAwQFBgf/xABOEAACAQMCAwUEBwQHBAcJAQABAgMABBEFEgYhMRMUIkFRMmFxkRUjUnKBkqEHQmKxFjOTosHR4SRTVfBDY6Oys8LxJSY0NWVzdYKk4v/EABsBAAIDAQEBAAAAAAAAAAAAAAABAgMEBQYH/8QANBEAAgIBAwIEAwUJAQEAAAAAAAECEQMEEiExUQUTIkFhcYEUIzKR8AYVM0JSsdHh8aHB/9oADAMBAAIRAxEAPwDnyTRk0Gkrtnz4XJoyaTIoyKQ6FyaMmkyKMigKFyaMmkyKMigKFyaMmkyKMigBcmjJpMijIoChcmjJpMijIoChcmjJpMijIoAXJoyaTIoyKAoXJoyaTIoyKAoXJoyaTIoyKAoXJoyaTIoyKAoXJoyaTIoyKAoXJoyaTIoyKAFyaMmkyKMigKFyaMmkyKMigKFyaMmkyKMigKFyaMmkyKMigKFyaMmkyKMigKFyaMmkyKMigBcmjJpMijIoChcmjJpMijIoChcmjJpMijIoChcmjJpMijIoAXJoyaTIoyKAoXJoyaTIoyKAoDUTvipT51UlPiX7wpSZZijbHbm9aNz+optFFFw7c/rRuf1ptFIB25/Wje/rTaWgQu5vWjc/rSUUALuf1o3P60UUwDc3rS5f1FFFFCDL+oo8fqPlS0tFBYnj9RR4/UfKlpcUUKxuH+0P1pcP9ofrTsUtKhWM2v8AaHyNG1/tD5VJijFAtxHtk+0PlS7JPtD5VJilxRQbiLZJ9ofKjZJ9ofI1LijFMW5kWyT7Q+Ro2SfaHyNTYpMUUG5kWyT7Q+Ro2yfaHyNS4pMUh7mR7X+0PkaTbJ9ofKpcUlAbiPD/AGh8jRh/tD9afSUDsZ4/tD5UeP1Hyp1JQOxuX9R8qMv6ilooGJl/UUm5/UUtJQMNz+tG5/WikoAXc/qKNz+opKKBi7n9aNz+opKSgB25/UUbn9RTaKAHbn9RRuf1FNooAduf1FG96bRQBbPnVSX2l+8KtnzqpL7S/eFEivD1CiiimWC0c6OfX1qa3hmnlhhhQyTzypFEi4DM7nAGW5Vnz5fKhu9zteC+GfvLVrA3UUm2+yXUYkTuyoqu7sSAkQZ2bHPwhQTTpIJomAkjliJG4LPGyEjpkBgDXf8ACPD2v6Zq7XV/ZiKAWU8Qft4JDvd4yBiNifI1f410bVtVbSW061ExgW7Ex7SKMjf2ZUfWEehrmedma3XyfQ/sfg0M60axpwa/Hu5uu/8As8tIIoq5fWV5YXElpeRGG5jVGdCytyYbgQykgg1TrpabN5sLfVHg/H/Co+G6jbiluhJXF/D/AEFLSUtaTzgUtFLQAUClpaCIUtFLigQlLilxS4oI2GKMU7FLigjY3FLinYpcUCsbijFOxS4oFYzFGKdijFAWMxRin4pMUDsZikxT8UhB6+VA7GU00/FJSJDMUlPNNoJDaSnUlBISmkgDJIA99KzKqlm5BRkmsq5u2YnBwPL1x7hVGbMsfC6nR0ejeodviKLr3MakgAsfeQP061H32IMFkUjPmvP9DWWJCxPX9M1JGkkokOCWRcr8xWLz53dncXh+Cq2mmbuHliOTHmxwPkKlR0kGUOR+o+NY6SkZV1PP16inrK0bZU4Pv5g/Gpw1Mk/VyirN4bjlH7vhmvRUcMqzIGHIjky+hqSuhFpq0ednCUJOMuqE50UU/s5Nu/advXPu9akQ6dRlFFFIYUUUUAWz51Ul9pfvCrZ86qS+0v3hRIqw9QoooplgtXdLulsr3TrxlLi0uY52RTtLBG5gE1S5mlU4rNqcTyQqPVHo/wBnfEMWg1e7N+CacX8E/c9f0bjDTtc1A2Fva3cUgt5bgvMYtpWNkXHgYnzqzr/Etjw93EXNtcz97ExTu/Z+Hstmc9oy+teSaPq17ol9361jieTsZIHWdXZGSRlf9wg/ujzqxrvEOo8QPZNdxW0a2qyiJbZZFU9qVLFi7E+Q865W6VU1ye7fhumlnWTHJeTXXcN4g1WLW9Vl1CKGSGN44YkSQgviMAZbZy51mUirjr1p1dPS4nCNy6s8R+0mvw6rPHFpvwY1tT792FFFLWs8sLRRS0ERRS0UuKBAKUCgU4CggGKXFKKcBQRsQClApwFLigjYmKXFLilxQKxuKXFOxRigVjcUmKfijFAWMxSYp+KFHiAPrk/Ac6AsiKkEg9RTmH1cfxbP41IylmJHmoc0jDI2+hjHzFMN3QrkU2pnTDMFBIHP8KjIpFidjDTTTzTTSLBlIacaSgkijqEpQLGDzbxEfyJpuk6Dfaw5kLGK1z4pWGWf7gP86RLZ77UorXnmaY5/hiTm1ej2tt3eONI02xoAAAOVcHU5XuddT3mh08Y4Y9qKNlwdoEKgSQdu3mZmY5rW+gNISMRw2kUSrzARQPnVuFiCKuocjw1kTb6m6XHQ801vhpoWaSEeEkkD9cVycsbxkq2eXLn5V7bcwpKGjZVJxzXlu+XWvOuJdKEG64jXlnxY/mathkae1kJwUo7kc7ZS7JlQnk+V/wAq1q54HBBHUEEe4it9WDKjA5DKDn4iuxpZcOJ5bxTHUozXuWbcoC2cbjjH+QqVndVfcMDxYzzyDyAGKpUuSRgk495rbZw5Y7diUUUUiwKKKKBFs+dVJfaX7wq2fOqkvtL94USKsPUKKKKCYvQ1fttH167iS4tdMvJoJNxjlijBjfaxQkHPuNZ9ex8FD/3X0r1xfDn696mqnLNwVo3aPAs03GXY8ktrW8vZOws7ea4nCNIEhXc+xSAWx+Ip93ZahYvHHe2s1tK6GRUnGGKAldw93I13fCXC2v6RrC3t9HbLALK4gzFP2jb5GjI5bR6GoONbC71PiTRbG0VTPPpwwXyEjRJpS0kjAdB/z1qHnLfS6Fz0clh3O7vocFS16En7P9Gj7C3utauO+zKzRIjWsXabRzMcLqzkD71c/qXCt5p2qabp8tzELfUpuxtr1kbarbsbXjU53cwOuOfX7Nsc0JdDPPRZoq2jnqkhimuJoLeFN808qQxICBudztAy3L9a7qPgrhnt+4PxC76htcmCKayWXK9fqNrPgemay5dBudB4k4bhklE8FxqNo9vOqlC22ZQyOvPmOXn5/KKzRfQHoskKclxdGPfaLremRxS6jZtAksnZRlpYH3NjcR9U7VAtjqbRdutjfNb9mZe2W2nMPZgZ39pt2499eh/tBUSWehx7tok1NYieXhV0KlufLlXQW+n20ehppaXBaAac1mLnMe7szEY+0yPD051X9oaim11Nf7vjLLKEXwkeQ6fpeqao8yWFq07wrG8oV4k2hyQD9Yw9DTLq0u7G4ktLuLsriLZ2kZKNt3qHHNCR0I8673hGyg07XeKLKCczwwW+nKkpKkuGDvnMfh86vajwbbapqN/qNzfXKd4MPZxWyxKFEcSxeNpFYnp7ql56UqfQp/d8p4k4fivntweXil5KMkgAdSeQrT1vSZNFv3s2k7VDGk8MhG0tG5ZRuA5ZGCDXQcC6TbXM15qdwiv3SRLe0VhkJNtEjy4PnzAH41bLIlHcc/Fpp5M3kvhnPR6LxBKgkj0q+KEZUmLYSPUK+G/SqjxSwyPFNFJFKhw6SqUdfirc69B1PjMWOpS2cNkJ4raTsrlzLsdnA8QjG3HLpz648upx+INV07X7vTbW1jWECeOL6QuVYMBKduzYvPbn1PX0/eqhkm3yuDRn02CKahO5J1Xc5bFKBXapwfoCSpZza6xv3HhgSSzjkbAzygYM/wCtZGq8PT6Ve6fbvP2tvfTxQxTBQrgtIkbKy8xkZBFWRzRk6Rly6HPjjua4+ZhgUuK7o8B2+6HbqNxsBJmBji3lcchGQMD38jWXacKy32oapBHcPDYWNy1qJ3VXnmdQCVQcl5eZ/T7KWaDXUk/DdQquPX4nNYoxXbPwZp8sc30fqjvPC7RsJGgljWQdUk7FVIP/ADiuQmgmt5poJkKSwu0cinyZTg86lDJGfQz6jS5dPTyLhkGKTFSYpMVYZbGYoZnOck8+tOIpCKBiHkikdc4/Kc0i+JnJ9Q3yNBFIDt3e9SvzoAYWbAA5YJOfM1GxZsZOcDAp5phFBaqGGm080w0i1DTTacaaaCaJtHUNrV2wl7Fo9LuZO227zEAYQXAblnFVJryzM7ta6tfRygkh5SWRseecg1ocOKJdZ1hGUMBpzIQRyw80SYPxxWoOGLR5omaDEUMhkiiHZmJCTuIAxnHu515/NJLI7Pf6OMvIhXZE+g6jc3BFrcTrLcK2VYAgsmPMNzqvr17fQSPu1OW1tyFxHb7u0IHL90jrWpY6ba2upQSW8SxiGGVDsZ2BZ23E+MmrV1pUN6Ybhdq3EMgdH2glHHRhWZPng3NccnH2WpcKnYs8uovOxGJ5pijbieoMe3/GukvbdbnTp0d3l3QOvaSY7R8DILY5Zp1pwtp0Lh2hibEvb4C+Ay9N2MYz6VoXgjghfIAVV6eXPliib90EE+jPGWjeNjkeHcRW6mwpGU9gou33DHSrN5orx6fd3mV8IaVlbkFiMmFbJ8z0xWfZtmHaf3GIHwPMV1dHkUpM894vgcYJ9ixRRRXUPMBRRRQAUUUUAWz51Ul9pfvCrZ86qS+0v3hRIqw9QooooRMK9i4KOOF9JI8hekfHvUxrx6ui02Tj8WVuukrqn0eN4t+wSLssFzu2l+eM5qjNHckrOhocvlzbpvj2Oh4S4n1/VtYWzvZ4ntzZXMxVYI423o0YByoB8zW1c3Ntb8b6YJmVTd6BLawMxABmN0ZQuT6hWx/rXAWek8cafN3iy03Ubefs2jMkaxbuzYglfEfcKfeabx3qMsU19YanPLEgSN3WIFVDFgAVYefOqpYouVpqjZDUZFjqUW3dnp97HP3/AE+SHRbS7YeFr+aaGOWzAYnkHjaQjnywfPy61jaz2eqaxw9o2q2lukJuJ78dld9o04ggcCJ0MaOFJOffs+XMxzftThjESpq+0ch2kdvI/p/WSAt+tZj6Nxq9wbuTT9Va7LrIJ2YGXevstv7TOR5VGOJe8kW5NU5KlB9ebR6i8N3BqNhDZaTp407Y8lzdlkjlhkAcKsUKJ16c8/vH08WVxXA5vuCrvcojg1yCBh0JadkKn0x4D865Sc/tNuYe7zxauYsAEKsUbEA58TxEOfnUd7D+0TUYooL611KeKORJkVordcOgIDFo8HP40Rx073IJ6pOLiov8jteL9HvdYsbRbVoQbWaW5kExYEoIXGE2qef+dSaNC15wfYWyMga50TuylvZVpISnix6edccZf2oNEISmrbMbchIBIRjHOQeP9aisY/2i6bCbeytdShgySI+zt3VSeZ2iTOPwo8v01uRD7QvMc9kuVT4N/hHS7nR9Z16xuHR5EstNkDxAiNlcynKhufqPwqzbSTPx9qqNK7JHpSpGhY7VTbavgDp1Yn8a5hI/2iR3E90kGrC4nSOOWT6slkjLMqkE9BlsfGmpa8fJdy362uqLeyx9jLPti3vH4BtPPb5D5VLZbbbXKKVm2RjGMJUnfT25L3HnPWbX/wDGw/8AjTVPwNqcFvNeabMwXvciz2zMcbpQoRo8nzIUEfA1j3Wm8ZX8qzXthqM8qxiJWlWLcIwSwXwn3moRoPEnL/2Te8unhj5e/wBurEouGxsxPJljqXmhB9ex1mrcGT32pT3VvdxQ291L2twHRmkjdubmMDkc9eeMZ8/Kvc8KaTaavo0LXm61vJ3VrS4YmVxHE8gCumDtJABz64555ZMuocb6bDGl1PqNvExMcZuBG5JUdBIcn9ayZJ7qaY3Ms8sk5ZX7WR2Mm5eYIYnPLypRhNr8XA82o00Xaxvdduz1WSC4gu9OistMsjaFme6uGZI3h29OzjVclj6/8nN4tgd14fnG3bb6xZqwOcntZUUY+VcXLrvEM8Jt5dRuDEy7TgqjMp+06AP+tE+s63dRwxXF5JIkMsU0YZY9yyxHcr7gu7I+NQjgkmnZdl8UwzhKCi+fkdrxnJLHpMAjkkTfexI+xiu5OzkJViPKjgyeF9JECsO1t55+2GfFmWRpFY/HP6VxNzqerXsaxXd5LNEriRVfbgMARnwj3mobe4urWQTW00sMoGN8TFSR6HHlUvJezaZX4pFarzknVVR6Zai9h76ItFs7XEmU2XMai6xnxnsYcj8RXnms3HfNTv7js0QtIqFY5BKmYkERKuAAQcdcVLPrmvXMbRTX85jYEMECR7gfJjGoNZuKlixODtlWv8QjqIqELpd6/wDgzFGKfikxWg49jCKaRUhFNIoJJkZFMIqU0wigmiMimEVIaYaCxEZphp5FMNMsQ00w080w0i2JY4du4rbV9dVs75IIihzy2xy8+X4iuvOpwrGWLDGOePM+leZd67nrEtw39WJpI5cf7p/Afl1/Cuqkjlkti9lKiXCGNlZgJEPPrg8uded1EfXfc+jaJrykuxqWusdhMFnhILkhnZhhsnORWtbz3M6zv2RgTmYXEqy9p6blUYH5jXJWzahMxa/uhHIgbklvBNGSBkDaSuM/Ctg3F/HHF2Gp3Tbm2qpitIt3IY2Rpvf7Xp/lRso37G/Y27XU0dXR8LIhKuvmCKoatco0UjucQRAyyt6Ig3tVSC0vYZjNfXUlzLJbsWMixqUYyeCMGMAchWTxXerDp3dFP114wjOPKFMSOT8eQ/GopOUlErlUE5Gbc8XxXeiz6ebDbdzHsjJ4DbrEX3CRQfEJMcvxz7qy7E8pF9wP64rJVfEvxFatoCsgHrGT/jXUwJQmqOFrnLLhlu7F2iiiuueQCiiigAooooAtnzqpL7S/eFWz51Ul9pfvCiRVh6hRRRTJi1rwajxZZafFNBdahBpYdooZEci3DZclFY9OYNZFdbwbLDeTXvDt9F2+n6lGbnYx5JLblGOPjhc/d99VZeFdGrSpue1OmzPm1vjO2Fu1zqGpwi4iWeDtXKmSI9HAI6Gof6ScUf8AGL/+1NbrXFpqFrxBxRd6YdTnTUotNsbFu0aK1tAE2+CPPiO4jO3qffzfqeg6VaxcdC2sy0lrZaRcWKANLNZyXTPvjjxk+XyqlTguGja8WV8wm6+vx/wYH9JOKP8AjF9/a0+PiDi2WSKKLVNQkmlcRxRo+Wd25AAYro10bRIdba1udMiNtBwj3+a3GVPeUkG9wQchzzGa5rS5YZ+ItGmit47aOTVrR47eHPZxAuvhXPPFSTg02kUyWWDW6b5de5ZGrccNLdwreaoZbJHku0DeKBI/aMg93nUA4j4n/wCL339p/pXWINB+kf2g90OpnUPo3VTdi47v3XOWz2Aj+s69M1Fp+icNx2nDsF1bxTy6pp/ep5+yvpb0ySRB/wDZmt42jCr6E/8A+ob4+8S54MzdRyd/f40cz/SPif8A4tff2v8ApUy61xg0Bulv9SNsJhbGYMTH2zDIjBHnW/ouj6IsGhR3thbzS6nPdFJJY7u4nuIE3bZMxKscS4wcEn59IrWOCz054hCJobfjyO3jjnJIZQEhQkjnkciPeKblD2RBYcypym+fi/gZKavxlI1zGt5qpe2ieW6TJDwxrzLShgCMVGOIOJf+LXv9r/pXUCW1/pBxqZbCMQW+i3InRC8ZvVVtzO5PPLezkelc/rUFgLbhu+s7OO0+kdPNxNBCWaMSBl5ru+9TjKLdNFObHlhByWR8fF96IRxBxJ/xW9/tKcNf4j/4re/2lZYpwq/y49jlvU5v6n+bLlzqGp3ojW8u57hY2LIJWyFY8iQBUAFNFPAqaSXQzznKTuTsUCngUgFOApFLFApcUooxQQsMUYpcUtMQ3FJTqDQAw00in4pDSJIiNMNSGmGgsRGaaEdyQoJPup5p0L7Sy5A3YwSOWR60Fl0VmVh1BHPByPOozV2WQCNkOCxBHXJBz1NUjTZbF2MNNNONNNIuiYF+n+03B9Zm/wA609C1V7aeO2nBa3OQrdTGOuD7vSql6M3Mvp2p/RRUNipa45fug/M1wslO7Pe6duMY12R6B3LT7hxKG9rnuQ4JHxFbFlY6dBh4ipc9STub5muE7xdxhOxdl6ZHl+tatkbuRcTSsQ3LavIHPkcc6xv0o6m9yW03ru8jmkMdrtbYSDJ1QN0J99cFxNJu1COHJIhtkyTzJkkYuSf0ru4oFjQYAHLyrz/iVGj1RiRykhiZfftJSnhdzKc/4ODKhXdMvoGBPwHOtJfDdqp8o4lPxdCT/OqVou6Q+8gfM7aneTF6X8i4b+8BW5OpJnPnHdBx7mjRSsMEj0NJXaPFvhhRRRQRCiiigC2fOqkvtL94VbPnVSX2l+8KJFWHqFFFFMmLWhYHWrNZ9X0/tY47Ui3mu07MiMzFfBtfnz8PlWfXV6JHHNwxrUMkUssUvEGjxyw2/wDXTRmS33pHzHMjpzqqcqRp00N86uuGYVjqmraa8slheS25lwJezKlXx03IwI+HKrel3fFMt9dPpM19LqFym+5aHEjOg5BpWl8H3ST8K6XiXS9J+iLq80+ys4DYXsMUrJZz2M8UchWPsnWQbZDlgSfl783QxO3CvF62Aka/NzamZYAWnNnhOSBPER/W/rVTmpR3JGrypwyLG5PhXx/8M29veKbS8lOoTXUN9JZGykM6xl3syclN2CCpPnn8azIJpraWGeB+zmgdJYnABKMvMEbq7uCATQ/sytNXiEl489/2sF8m6TuoilKCZJOflHjI8vdVJNJgisbV7nTkjkuOOYLZO3g2PJYGTZ2Y3Lnszg4HSiOVJVQT005O1L8/bozmk1LUklv7hbpxNqEcsd64CZmSU5YNy862rGD9oKafHHp8epDTpohJAIpIADFIN+YyzdoAfQYqpxI1kNVvLSzsbWzt7GWa3At1CtM27cXkI5Zznb6DlXQzT6NaWvAN5f3GqRy2ul2s8MNgIzFKEEZIlZ2B6+/pRKXCaXUjix+uUZTfp+Ne/JzUOtcQ6fF3OK+uraK2dvqThTGytkrh13deoou5tetgbW+aeLvM6av2bmIF5pDyn3R+Z+NbV1d6fcaFrmuSaXaSXl9rV1bwNcIrNbxyWwCtlcEkAcvec1oPpmmtqcshsY7lrHhezvbax2ZS5uPrAWdB1xhRj+KhTS5aB4JtUp30rr0d/wCDlpNZ1qZ5ZZb2R5JrVrKViIsvbMS3Znw9OZpG+lbuyinkEslhppWyjkPZhIC+3ESgePn4fKurtdN0u41DhKe40q3tn1TT9Rkv9P7PbCrRIu2QQv0zuP8A6iqNtLZTaZqOopp1jH2fEGlJBbiPMCwhYI9hGfxPvp+YvZFUtNO6nPrffsn+kc7JFNBI0U8bxSpjfHIpV1yM4IPOkFdrfx299xHq+mXFjaxtd2DQ2F00BWRrlIlkWUu3UjmMj7AFc9rcVrbXq2NskYXT7a3tJnjUDt7hV3SSMfM5JH4VOGXdwY9RpPKTknwnX1M4U8U0U8Vcc1jhTxTRThQVsWnUlLQQCloooEJSU6kNAxtNNPppoJIYajNSGmGkWIjNRmpDUZ+B64wBkknlgCgtiRmk7OZhlYpiPURuR/Ku00Lhbkl9qkYLDbJb2j/ugc983v8AdXYkgDA8umOQrPLOk6R3dP4ZPJHdN0eL7JS20RSlvQRvn5Yq9Do90sZu9SxYWEZDSyXXhd/SKJDzLt+7XqE0kUMc9xMJDHEjOViTfK4HILGo/ePQViR6deao/f8AUCscy7lgiVt8dlE3WK3I8/8AeP1J/hwq1yzyfC4N+PwuMHc3Z5BdpdgvJJa3EQZndDKhTAY5zh+fp5VLpKJ9W3mWIYnzbOK7XXdF72qLZxL291ewWsbyk7YYQkkjSSPzIHg8R99Yml6JdR6fazyxFWkeCVRkEsrOH8vjWDUxWNUd7TNzfyHGEbl5cq2LGIZBxyAwPjTrqwZGVQObHw1p29mY1QeQHOuY5XwdOqJUTcOfpXLcUaTJdoJoELS26lm6AbANxHPzrsQgUY6CrMNhFJFLc3QxZwwzTshyDKsaM7Z91dLTaSvvMnCObn1V/dwVs8SsnxMB5sr7TjkSozyp0wIlLejH5da9F4T4es9R4XsZ7iFS1zeXt0hYeziYxKUI5j2Kzdc4NvbcyS2n1kSjK+RA67JB/I/P1pyVOyMXfBhq3aRQSfaiTP3k8B/lRUcEc0KPBNG8c0LkGOVSrgNzz4vKpK62GW6CZ5HVw8vNKPxCiiirTIFFFFAFs+dVJfaX7wq2fOqkvtL94USKsPUKKKKZMWrEd3exW8trHcTJbTSJNJEjkI8ibSrkDzG1cfCq9a1rolxeWne47mERLZ3d4wMcruvdX7OWLan7wzGR6iQelQbS6luOMpOoFa51TV72NIry/u7iJCGVJ5ndQQMZIJxmo7a7vbKTtrO4mt5cFd8DsjFT5Er5VevtA1awjup3jSS2tiFmniddoIIichSc7VbMefUelFroOqXL2wPdreOZVeSSeeNjbI8D3KNPFG3aKWUEoCvOluhXwLNmZz6OynJe6hNcLeTXdw90jKyTvI5lQrzBRycjHlVibWNbuNnb6jeSCOeO6jEkrNsmiHhkXPQjyq5d8M6tA92tvsvYrXwTTQ9mgMqAdqqIzliI8jd/LlVMaTeCXVoJJLSOXTLU3NwpuInBxKsZiRkONwJ58+vLqaSlBg4ZounZVlmmuJJZ55GkmlYvI7nLOx5ksT51JLdXdwlsk88sqW0Yht1kYsIoxy2JnoK0peGtaS7ltYI47hUkuFE0c0Ii+pkSIiTDna2WTkefP3coLfR765W+C9mlzaXtvYPb3EkULPNKJfAjyOAWyuAPPNPfHqVPFlumnyVO8XRtu5maTunambsM/VGUjbv29M1YGo6obiK675c95ijWGKYSMJEiUYEYYc8e6p14f19lt3NkUE+WUyyRR9kvZGb67J5EjmKBpU4bRQ81vnVbp7VFidZXhKXPdSzhDzGefI0bokXDMvZ/r/pH9I6oboXpvbk3gjMQnMrGURkYKhj5UxLi5W3ktVmkFvJIsskQYiN5F5ByPUVdXh/W3lkiit0lCqHEkU8DRSZkkjCo4bG7KsMe75omkah2BuJkSKA2V3eRszI2828azGJgDyJB/wCcUboEHjze6ZNa6xOl3DeX6SajNaoBZG5nkXu8gOQ/hHP4GqLySTSyyyndJLJJLIx82Y7ia0ZtBv4VvCktvO9rcyQOkUi5cR2yXZMYY5JwTkAZ5e+o49H1SS4W1RIDcYJaJbq3Z4yCqlJAj8mycYP+FCcFyiOSGeSUZJspCnirsGjaxP2Rit1btIY7hR2sW9Y5SVjMg3ci3PAPofs0trplzcwXkyvGskE4tVhcorNIEMshd3dVCqASTz6e6m5x7mb7PlbrayoPKnip5NPvoYmmmWFIVkjiVzPERIZESUNFg81wwORU40nVMlTFGmJXhzLPFGpkWUwBQXbq5yE9ce6nuXcq8nJdbWUqdUslpdwrI0qbBGtsz7mG5e8qzxgjr5HPpUNO76FMouLpqhaKKKZAKSlpKQxKaadTTTGhhphp5phpFqGNXS8N6EsxtNUu2ZY+032Ma+yzo3KSU+/yFcvK7oqbGKks2cY5gAetJPqnFd0NP0qw1K7WS7uIra3RLgwLkAkKXXoOVLLCXluSZ1fDo45ZoqavsewcyQCD4s/Oo+YABzy5fLlXlL6P+2MEf7Xqb7TkGPXIzz92ZhUlrbftYiubY39xrsdmJA0zRXsNwzAAssahJSdznCj4+6uVdHtaPR5Ue8mFspZbeBle5dTgySD2YVI8h+//AKVYnCxWs4QAKsLgAcsDGK4catxxaqFbQNbVRzxCJ5V5nJ9m6NQzcRcVmRTJZcSR24QLLb/RTOknXcTNLFJKM+5/KkppMHB0at6XaGSBHZDcAWpeM4cJKCZMEfwBx+NLgKsSkDbEAAPLw9MVgNrxZ0322tJIu8optXOMoqnlJZ46D/nNY2qcT6xZ3Kdnc2UkUsMUkStAnbRI43dncBVQCQZIPL5dAarZmXHUlpnLC+eh2xR5n3AZYcs/uoPSriJtUbjuPr5V5zHx/rCAKYNJZR5dnKn/AHZK0dN49u5ru0jm0zTJUeVVfE1zEBnoScv0+4aemw48dN8yIanUZJ37RR6NZ2IkxNOv1fWNG/f/AImHp6VFxVdCy4b4kuckMNPlgQ+jXOLdR/eNV7LiUXd5ZWrWcAN1MYVe3vu32YjeTe0bQoccvWqPHzPPpemacgAXVtd06yb2t5XduPuxzWr8ymn6zLp8uPIrxu0bPD9sbTQtBtMYaHTrMNj7bxiRz8ya0uxjJyck+7nShVGVUYROQx6DpUqjH/P6VSajBvuFNEvg25biFixYG3lICk+iPlfwFec63pU2jX8tk79ouxZYJMY3xP0JHr5GvZq84/aApGo6Y+OTWG0H1KzPmtGnk09vsczxDFFw8yuTjaKKK2nngooooAtnzqpL7S/eFWz51Ul9pfvCiRVh6hTiMbfeM0MMEYH7vP4jrTmGdoHkD+lSJWMrU0+/4hsIU+j++JBJexyxtFbvJHLdKrIFDFSCcZyPPb05csut7TuJJtOtba1isLdhBJFL2heVS7RXBuFZ1U4zzIJ+H2edcrrhWaMDSlblRHCeKb2P6EWK7ZCymWOe1ZHiWVmuAJ5pI94QnLDJxUSatrvY24UyGNIZArraoWliihNkTJII9zdmHKgknGat2vE11bJYI9rHOLEWxgLz3SOZYYZLcySFGGch+h/9YdP1l9N08w25LXY1GK6hMkamOGBGjmeMNu3ntGSPcMD2ffyrp9jRuhxU3+ugrajxQrXUEi3SyXF0s8qSWW2Vbi5YOOzDR7h2m3OB1xTLRdfnvSIIHN1rizqe8W6iK5SR+8SSDtk2bQQGyBy8qtR8StGbcDTbdoLWW3uLaOW5u3aK4hmmn7RpWfe2TK3InA5enOmNXuBf2V8Ixm0s1soYu0kKiNbRrPIbOejZ+NCT7EZShae9stLqHFEMzBFuHe4uL2YBbIyRXMsrpJM6IY8MMorDw8vdnmlk/EkUsywxNHNdTx3TNf2iqXuVmW2WWJrmM4ZDJ1GMZpf6RT9xisks4YxHbSwCWOWZWUyWTWLSIudoJHP4/HlIeJ71muXNvETNOk675JW7Mr3PCrk9PqF+ZpVLsG+F3vZE+o8RI8UUpd2s9uO0tIpVfLd3R3ZozuzjbGT6cqUT8Q3c9jvjm7WG8lvLaWa1EeyYz9q7NJ2fTeeh5ZPvpt7qsd1p8dpGjxvJeXF1ccuUcbSPLDbxyEl2VS8jjOObe6rjcU6g3cc21qDbXEVwzLvDTlMsVlOejOTIff8ACnT9kVuULac3XAkb8W21uWSKYQrbwHaLdJcR3PbXSTBNh6Zk8XlnH3Y11biC4hIXtJ4Il7CVlsklj+tiFttmdYyCSMDmfIUQ69cQixMduge2Om73Es/14sYZLeMOM4wQ3PHmKhtNUltbQ2ywxswF4tvMXlUxd7jWKUmNDsc4A2ZHL+RtfZEZZI8JTdE3f9emYt2czOhuXZksgCGMPcpnYpH1wNhP+NTx6nxJGDcpFMA8SztKNOTEyoRKJ3fsuZ89xqWLie+jkkcW1vh0iIUFl2zxtJI0+V55YuzMPU/mZa6/cQSGRraKVu72dsvaPIAq28LQYGD0YMxI9adP+lEN8E/4jFe64gsSbl5I0Di3tCAsDrlIVu4vq9mMgOCDjzxUMUus2iyqkN2m1zezB7WQ9Y3iLyCRD4SC4OeRpLjUzcwRwtaxoyTW1x2iSS85IYI7YnbnzCp8McutXl4gZZJJBp9tulVVdjJMZG8MqsXkJyc7z8vPzVOuhU5Qcv4jr26iS2vEN44tJofEJQ4jZY41iDWykMNgwECqAMemMZpX1DWGuYjDBOheC3htoWge4Lx2uSkidsh3Eczvx5++ojrMrJKot0Vpk2SOJZSxPc2sNy5PLlz+Iqc667RpC1lCIhG8TpHJNHuR0jUqjIcjminl/jSqXYHPFzU2mMlbW5LNVuFItmiWYNLEqyyLbyi3XLhe0LAkDBPQ1T7te73j7rd9pGAzp3ebegYEgsNvxq7FrMsXZOlvF2kQkWNpJZ5PA12t4AVkY9CuM5z8qcutzRmERQLHFDJayRp207sRA8ku2SRyWIJc/IVL1LojPPyJtOU3/czKKVmVmJVAgIXwgk8wME5PPn1ptXHPaCiikoADTTSmmmgkhpphp4V3ZURWd3IWNEGWZj5KK6Wx4f0+CNJtWlV5m8Xd0YmKMejtH1PrzqEpKJu02lyZ3UPz9jkJ1O2FtpCuHZGIwGGQMil0cbuJeE1/+ol/yQyNWvxRJbve2K27RtDFZIq9lgKn1snhwOlZegDPFnCq/wDW37/ks5jVmR/cWzpaTF5WsWO7r/B61imyQpKjRtna2OakhgQQ4ZSPMHBFSUtcc9aVO73flqN1n+JLQ/P6qpE74Cd0ysPLMarj3+DFT4oxRQFfbqgPK9i+DWo/8sgqSOMpGkZO/BdmLAc3dzITj4k1LRRQEElrZyf1ttbSf/cgib/vLXB8dWVhbScJG3s7WB5b2+aRre3ihZ1jhjIDFFGcV6A5wCa8U1e+vLzii/Wa5nlih1XUhbRyyu8cK7nTESMSoHIdPSrsP44/Mz6p1hn8n/Y6PhoZ1zSf4WuW+VvJW1xaTJq/7OrZSAX1qa45jIzEI8ZFY/C//wA7sT6JeN/2DD/GtfXj2vGHAEJ5rAL29YDy2pK2f7la9f8AxF8jl+CKsL+f+DrQwULuHiwpIHPxt5VIpY+XPz58h8agjJkIfmAQOvUZHT41YUDp5enr8awHcFJ9OfqRyFcB+0LHa6J69ldA/DclegHyArzv9oBzeaQPLu1xj+1xVuH8Zh1/8B/Q4qiiit55kKKKKALZ86qS+0p/iFWz51Ul9pfvCiRVh6kgbC5892PwPOgHws38R/XBqOlycEeRIPyppk6Hb/cMdBy6fCtay0ZbnTjqU1zdRx9tdRbLXTLi9Ci2RXZpZIXAUHPmPI+lY9altqsMdhFpk9h3lBPdSRGO8vLeRmuQqMhS2YA9BjIP61XPd7F+BQt7x8fDnEcixOth4ZRA65ubMYWcZjZwZcjd0XPU8qg+iNY7KaY2jqkJugyu8KzsLRik7RwF+0ZUOQ5Cnp7q0Wvtbc3LfQt3/tD6DI2La9OPojaIwPB+9+9VqXWuJJbe6hOkX6vI1+YZIotRQQx3sjSsrRxgI2MkIT5HzqvdP4GrycPx/X0Mw8O8RCV4GsCsqLE0itcWihTMxSNWJkxuf9wZyfSoW0jWES4drRgLd7tHBkgEjG0OJ+xi39o4j/fKqf0rctrqS8n1aTVtMu44rzULLU1g+jdTmRZ7cFA8ckBVs45YIwfUY8S3Gta/KmoQxaRqYSWfVGs5DBfxPBFfyNIRJHCBGzDJ2knz86W+d0D0+Gr5/X0MaTQtfiEG+xfdPNDbxLHLbySGSZTJGCkbkgEAkE46Uk2j6xAA0lruBe1jBhmgnDvcu0UQUwuerAr8RWomrcQx3d5eRaLcrLc3GnzsptLxlAtLdrUR4K5wyk5/SpNLuHsLm9uoNEu7KNdPaK3s47HULrvV4snaxSyzTg4MbYIOPPHlT3yRDyMTdK/19DMtNFvrv6ajTaLnS2t0khLwqrPJM0L5mZxGNmPXnUf0TrAS5YWb5ge6jZGkhWWR7UZmEMRfe+3z2qakt11iC11S1+ir6QagbIyyPaXm5Tazm4GMJ5nrWw+t8RyR3SHSL5DJJey27xRajF3c3ZJfKxqA+CSVz6+dNyknwVxxYmvUmn/szn0LUu8XFvaKtytulg8sxkgt0DXcKzIn10g588Dn/OlXR5lt4ZpXkWR7fWp5IOxG6A6bKsTI7Fh18z5ehrR7801re984du5pppNIzCYdSWOXuUckaylkHL90Y6Hn1qN9T1qaOYS6LcNNLHq8XbLbX67YtTIeRQm3byOMfD8y3SJSwYVzzz8+/wDgpSaJrsDQpJYOJJ5xbRokkDt2pjM2HCOdvIFueOQqvPbXNq0SzoAJUEsLJJHLFKhJG5JImKEdR1rZTVuIEubu7TSLkSXN/HfuDaXhUbLZrRogNucEE885qnqD6vqEluzabqKRwRdlEjRX055kszM8qk7j59KlGUr5MubBi2twu/18DPFOFR4ZWZGDK68mVwVYfEHnTxVxzWvYkFPBqIGnA0iDRKDS5pgNLmmQofmim5ozQKh1JSZozQFBTSaCaciPLIkcRw7nCnllT9rn6dai2krZZCDnJRXVmtovdbV5bm4EjTlezt4YYmklCNzMjZwoz5ZYVqy3iyI+bW7UYPNhC36RyE1Vt7aO1gigjLsI1G55CXkkdvbkkY8yx6k1KzMo5An3AZrz8/EZ77iuD6bpPCseDEoN8nGX0qzXDspyB4ejA5BOQQedWOFwW4t0L/q7bVZf/wCZ4/8AGqd2Ujur1rgXKKbiQRKkQ7STLHBUSsBj59a1OEkzxPp8gS5VW0jVJALqDsWwWjjyF3n/AAru5M0ZYUr5aR53BpZx1jnXpTfJ6hS03NLmuad4dRSZopgLRRRQA1zgZ9CDivGdX0e80vX4pLiSJ/pI6jqEQiDjYjTOu193nXs5rzbjls8SaJH/ALvQ5X/PdSj/AMtW4OckfmZNa6wT+TJOFVB1a1b7NtqDf3Yl/wAauaie98d6VaPFIDbaU/PcFDxkXEpcFCeR3hTnHn+MPCYB1GNvSwv2+c8EddHaW0L8QcSaiygypDpelQHHNI4rdbmXB95dc/crVrn959DD4Oq0/wBWbKjAAFSjA5mmIM8/L+dS4A+P8qwnZEAPNj+FeccenN5pJ8u7SgfAS16LIWKkDkDyNebceSKdTsYAecFim4ehkdmxV2H8Zg17+5ZyNFFFbjzQUUUUAWz51Ul9pfvCrZ86qS+0v3hRIqw9QooooJi16Pwvpy6bw5ea9BCk2qz2V7Pbs6hjGke8Rxp8cZb1/CvOByNd/wAHcU6fZ2iaVqUohEUjG0uHz2RSRi7RyMOmCTg9Of8AD4qM6bjwdDROCyet1xw/idRwjc6ne6HZXeoTxzzTmWSOWMgsYSx2iTaoG4cweXlS63qOpRXmiaTpht47vVHuXNzcxmWO2t7ZBI7CIMMsei8/9Oav9M0tmmXReMbPTLK6n7zPaJdxGJJs7t8HZzIR64z/ACwNfUDot4mjTQ8U2MGp6VuFvfPNZTNJ2kYil7aIsqnf1OMVjrmzsqb27e1e657lb+kmud27kEsjrf8ASE8Pdtsfuvhj7Y3PZ7s+z5bv8qni1biotrmkxw2N3rOnXGnxpcYMNubW8Xf3iWIvnKc8gN/LxVRp/DYsRD/SixOpjVfpv6SaeyLG/Ph39jv27CPDtzTHstOa11RRxrZrqerXMEt/fpLaxmSCGNokt44o5htXn5PT47Ed0vd/+r9Wa+g6pqlzqOu6VezW14dLNsBfWcRijd5lJaF13Mu9fPDVX4o4g1DT91tpKI09q1nLqMzrvjtormUQxRbTy7R+ZHoBn94UaFJpWjxvbvxJoctoFUQQW0djZiNwTvkYxysSW5Zz6VW1nS+BdVF1JFqek219czxTS3a3ccjNtZSylDMF8Q5UJLdyuCbk3jqL5+f/AEv8U65eaZbTw6YiPqK2kt/K0gDRWlnEQDLIDy3McIg8+Z/dqnq+uazBNocFrNJGbrS2vZjb6XJqEsko2YVYkdQBjcT4v503UtK4AvrWWOK/0m2uu6RWdtdLeLIYI4VCR+AzAHaBjnTzDplrDp0WjcW2enCzt3tmi7W1ubWYs3aNKYJZcB8knO7zoSSXQUpNt8qvg/8AhuaJem+0q2uhex30jiXMyQG1DyB28DREsVI9k9emfOsC213X49c07TLu50u4nupplvrG0t50+jo1i7ZWS6lYBz03eEVoaQ3DOkacNPi1yylLNPLNcNe26yyTTsWeTKtyPPlWbHZ6e91pUl/xlbX1rpdyLuzhmeyWYyqCEM9yH3tj4ClXL4G58Rp8+/P+/wDIt3rvEVnq9jazT6U013qEFumkwQzs6WMrsouHvXIXfgZxt/CrGqcQ36avpdnpyRmyXV7XS9SuXAYPcTDe1vD70Xm59TjqKqT2VhcyRQ3XGsE2mx38eoLbTSWbXG6KTtEjN4X37Qf4aNQ0PgK8lt5Yr7S4P9u73fBbtX75G24vESZhjcTnIqVL3RW5yp0117/9NXirSra90y6utiC6sYnnilAAYoniaNj5gj9f18yBruOJeJdPNjLpemyrM86CKaWIkxRQjAKK/Qk9Pga4UGtWnUlHk4Pirxyyp4+3JIDTgajBpwNaDjNEgNOzUYNLmgjRJmjNMzRmkKh+aTNNzRmgKFzWrpMaDfcHm5yi+5fM1kE1pQP2aQlW6L099c7xDI44tq9z0f7PaZZdTul/Kr+pstJjoB76gNyVPPpVXvsZAyRmozMzHwYYeh615tn0VI1BNbTLsmVHU9RIoZT+DcqLG00yxvxqNrbolx3eS15M4jMTsrkCMHYOYHMCsgzqM5BBHUdKet4F6Ofxqccko9GQniUup20eo2rY3hoz7/EvzHP9KsLPbP7EsZ924A/I1xCajyHiBqZdQjbkSPjWiOrkuqM0tLF9DtcEeR/DnRzrklvihBDHH8JI/lU41NvOaTH3z/nVq1i7FT0j7nT86Mkcz09awEvgcYmIJ6eIjNJLcSuCDKT6ZfI+VT+1LsQ+zPubT3NugPjBI8k5/wClcZr+lxavq0Gpd97utvYJYGAwdo5KzSTdpvLjrnpitJZXB2sy55459cf40yddJvYit51jOAUlkik5+jREGlHVTTUouib0mOcXDIrTDQ9PtLCeORLqSZntntNroqgF5e3zlT+Fa1i8JSW4d0Vbq5uLjJIG9S2xSB8AK56C0srHDaffX0ZDb8XDm6Qnrz7Tx/36ItVgmubiGK0m7W2cwXTW/ZLaiZfaFuJXV9v4Vqx6nzW/Nl9TPPRxwRSwR47HZLdWnIdugHwf/Kp0aKQeB0YfwkH9K5iO5gYhW3RueQWZSmfgfZPzqyMg5GQR5jIIrcsUJq4sxvJKLqSN048IP2sV45xBdSXmtavM5z/tUkSe6OI9mo/SvULa8k7eGKVyykjaW6hgeQzXkN22+7vZPt3M7/OQmp4oOEnZzPEp7oRSIcE9AfwFJV9TGqgBl2geRHpmkVImUMY1G7n861UcDze6KNFPkUI7KOgPKmVEtTvktnzqpL7S/eFWz51Ul9pfvCiRVh6hRRRQTClpKWmAUvKkruuEuGbe9je51CBZElHgV/JfdioSmoK2WQg8klGPVnDU4cyoAyzEAAdSTV3U4LO21W+t7dybWK5eONvaO0HHWrhOi2qIyuJZCAwRBkqfeTSlNroiEri6ZCdC1lLOW+e0ZbeNQz7vaCnzxWb4a6PVeLtR1G0FhHGlvbGNI5dp3SShccixqPReFNY1uA3UTw21qSyxy3AZmmI5Eoi+XvzUVNxVzLvK8ySjhtmCMUtaeraBrOitm9gzbk4S5gy9ufTLYyD7iBWZViafKKJ45Qe2SpjhinDqPU8gMZJplXNNvBYXttdmJZOxfdtYAj44NNulaIxjukk3RAQVJDKQR1BGCPwNKK3uJdY0PU2tRZWyre7Q9xMPCDn/AKPaOWa58H1BBHUHqKoxaiGRuK6o6Or8J1OlxRzyVwl0a6fXsSg04Gowar3FwykxRf1h5Ej933CrMuSOKO6Ri0eiza3MsOFW2bFjY3WoTLDApOSAzY5CpNS0+50u5a0uNpcKrgr0Kt0NT8K66dEa4huY2nRo3kjxjfHL5KW9DVO/v7nUrqa7uXBlkPID2UXyQe4VRp8zz+r2Oj4x4XDwxrTyd5OG/wBexDmlzUeadmtZ5yh+aXNR5pc0BQ/NJmm5pM0CodmmsZsEJKVB8iNw/nmjNNzVeTFDKqmjXptVm0st+GVMiLXieSyDOfC3P5GnpfuhAZWRv4gRn50pNVru3W4WAO7Iu/aHXOF3eZIrl6nQ44x3RPV+G+M6jNlWLIk790a0d7FMMOAf51MO7H97l76y4dAnTaw1CRx7gD8ia0k0GaRAV1KVW890MT/zriyhFdGeuU3XKHMlqejgH3HFQtEnVJP71Q3PD+rJgw6kHJ/ckg2A/Axhv5VX+heIl9rJ96uCP0qUcafSRF5Gv5S5vlj6SyAfdLr+lTRy3EgynYXKj2hDKEm/s3qgNI1r/eEfFyKjfR9UBDbssOhB5/OpeR8Svzl2NgzGNesifwyDp7s9KVb0jwuUJ/d3AjPwK1hyWnEK+c8nu9vPzpIbTiZvALXEZ69s8ap8djZP92k8aXVk1k3ex0aXoDLmNWGee2QZHvw2DV/6U0YR4kX6/JBQJ2j494HOsG00PUCUN5ffVg57GCMMv55cn5KK6GG2t41RSS2wABpDluXqRUNyXQlXcy5JtDCFodIupB+72VtcDcfxwKu6XYraRuREIjNLJOYlO4Rdod3Zg+6tEKnr+BOakAHQUnJvgLSDAZSGAIPUMMg/gayr7UbnRgJ1Q3WnggXEGcTwL9u3d+oHmh/AitVmVBzrA1uZe6XGRuzG4C8uZxyHOrcGWeOa2lOXHCcHv6I3LW+stRigurOYSwyYGcFWVlPNJFPMMPMV5vcr2dzdJ9ieZfkxqrpV5r2kzdpaNsVihnhmIa3mC/7xM/IjnViaUzTTzEYMsskpHXBY5xXqccnJco8Vr5QdKLsfFIhGyQDl7LHyxzwTSmVFA2szOBjPRfhg1Xoq2zj7Fdikkkk8yTk0lFFImWz51Ul9pfvCrZ86qS+0v3hRIqw9QoooplgUUUUCJYYjM6oOnVj6Cusi1a90KxZIZDuuInjVHJPZ7lwHHvFc1Y3MVvIzSJuU4zj1HOl1C+e+naXbsQco0HRRVDg5T56BukpJxdUVGJOWY8ySzE+p55poki+2hPuYH+VdtwNo+mXfetS1GJJ+zl7C0ilXfErIoZ5GU8t3Pln/ABr0tIbRBmKKFRy5oqD+QqE9Qoukjq4fD5ZYKblVngPMhmAbaoJZgpKgepOMV6Hw3xHax21lZRyqGggijaKQrtyBjkR0rupHh2spKYIIZTggjoQQeVeDa/HHpms6rBZMY+63Ui27L0EbHeEPqMHGKx6jU3XB6HwrwhNzalyl0rr9bPbLrVtLi0+7u7sgW8Mf18TgMX3eARqp5HcfCK8a1C4inupp7ewhsreRiUgt3keNR8WPX1wAPcKqT8QX9/ZWllPuMdvK08wUkgttCIwPXlz+dNgumUA/1kZ6jGTj3isObPlxyTxuken8M8K0Gqxyjq1uk/zXy+JKCDzBpwqYRadPDPNFdpBNEAVhfJMjHySiwliWe3edTsJww9M8s866Wk13n+mSqR439of2bl4UvPxS3Y2656p9afs/oVniV+Y5OPP/ADqZS/V23NgLn3D41e1K2ET9rGMo/MFR1U/DzqhmtMceOU99cnnl4lqfsz0ym9j9h2RnnSKuyQyIFyc+0M4yMZFWbaa1RXWeIvnoynBFbmjW3Cc7XTX9ysO7asSSZGPU5FZs8pTl5c4NruHh+tz6PNv0zqTVe1f+nPIAgwPiSepNPzVjU00+K+uY9PlMtqpAjk54Y454zVQGt+NJRSSow6jJky5JTyu5N8vuSZpc1HmlzUzPRJmjNMzRmgKH5ozTM0ZoCh2aTNTW5jActjII6jOBUgSGTcdoGScYOOQ5ZAoojdFQmpEbswkjlHi3Ylj3eJeXI7fSoW5FgDnBI+RpkiQvGN00kEqsSJEQSJtx7Lg+VY9ZFvE6O74JKMNUt3un7mrHc20bEW8ngIDAczjywM1fg1AjG4BhnntyD8q5xNrod0yts5eDluHXNIDMp3RSyA+5mBrzrifQdx1vf0J5NgDn4jjFPbUrfC7ZAc8+XlXJLNM7gSmSTlyGOYP4VZYqFziQe7Y2ai4MkpJm898jdDQNQTkCRiuYad1zgOPvAimd4c9DUdjDcjqu/QH40d7TyxXLCeTyJp4nuPIml5Q1NHS95z50C4c+YFc+s9z5sB8TUouGTmZM49KjsZK0dDHK+ebGrkc4HVq5ZdSK8qv2t5HIRucYp00LhmvNIApc+fSuV1q53MsIPXxN/gK2767toYGdmB5eEZ9o1x00jTSPI3ViT/pXT0GBynvfRHD8Z1axYfKi+Zf2/wBkdJSnI/nSsMbPuivQniLG0UUUhhRRRQBbPnVSX2l+8KtnzqpL7S/eFEirD1CiiimWBRRRSEFLSUtMDoOHNdn0lp4NrvBM3a/V+0j7dhOPQ8q6K64zO3EcFwTj3AVw9tIEVumS3OrJuAeuKzTwqUrOng1s8WPYadxxbqUu4JEqZ+2S1ctcQtdz3NzczyySzytLKQQgJY58v860mdD6VQkUB5NuQNxxg0eTBdY2TWv1HOybXy4EihggBEaBQep5kn4k86jlgCkyRMEPUofZJ93pUgLY58/TNLjPM8zRkxwnHa0Q0mrz4M3mxm0/f4/Mijmk6GFgftEDHzq3nPU5PnTADgk4pRVOm00cUm11Oj4v4xn1+KOOb4T6fE7XhF9IvTJZXqg3aZNo0reArjmFB5ZrB12zisNTureJ1ZVIbwHIQt1QkVkqzKQQSCOhBwR+IpckkkkknqSck1rUKk5I87KUXBRrle47NLTaM1YUUPzS5pmaXNBGh+aXNMzS5oFQ/NGaZmlzQKh2aM03NGaAoekjI25fx9CPQ05pichVC5JOerfOoc0maA2pjs0yTnHMPWOQfMYpc0h5gjyIINBOPDTMnu8q80Z1+6xH8q63hLRxqNhf3Fy7s8epTWylyThY4omwD8WNYhjT3/pUto+uWzPFp2t6hYxO8lw0UDnsQ7c2YRg4yeVZNRii1cUeh0Ove7bOXXod19AxpyjwPgMUn0I3v+dcd9PcXRyCBeLbpnPRZrNZOfXmcPU44i46jOBrmmS48prO3X5kwD/vVi8tM7jyNdTp30VvKqkuitzzEjfFRWYnFPHnRV0C6P8ABHBn/sZ0/lUw4r42X+t4e0+UDqYotQH96OR1o8mxeel1YSaNF5w4+4WX+VVm0gDO15l+TD9RUp441BP/AInhqADz2XlxF/40ZoXjiwf+t4duff2GoW7/AKNCKi9O/wCkktUl/MVRpE5KjvHUgc4z5/A1zcepPK6qkQAMioCzE9TjPIV2q8ZcO8y+k61HgNt2x20w3FSBnEimuM0SzR7nTVuCIo2uo+1d2WMIgb2mZ+WKni0qb9SK8+tcY+mRs6bbRXccrzBiVubiJdrFRtjbaOlbMWj2kiuIu1SUqezftZCFbyJGcVDpNuBDEqgeNpXOBj25GbJro7e2K4NHlxT6EvMlKPLPPbhbmOWSK53dpGxVwxJwR8ajCkjPLrjmQK7TifRzPbDUYF+ut1AuQBzeEdH+I/56VxNdLHJOPB5XVY5wyNSd/EkIDefkQPwOBRgE8+g3j+QFMz4ce/NLnwH13D/OrrMdBtPu5DmM8xTaKKiMKKKKALZ86qzDmD5Ag1bNROganJWU45bWVe1j9T8jR20fqfkal7AelHYD0qPqNO7GRdtF6n5Gjto/U/I1L3celHdx6UvUG7GRdtF6n5Gk7aP1PyNTd3HpR3celHqC8ZGJ0HQn5Gl7ynqfkaf3celHdx6UeoN2MZ3lPU/I03tovMn8pqXu49KOwHpR6g3QI+3h9T+U0dtF6n8pqTu49KO7j0oqQ90Bnbxep/KaXvEPqfymnd3HpR2A9KPULdjY3vEPqfymjvEPq35TTuwHpR2A9KfqF92J3iH1b8ppe8QerflNHdx6Ud3HpS9Qfdh3mD1b8ppe9QerflNJ3celHdx6UeoX3QveYPVvymjvVv6t+U0ndx6Ud3HpR6grEO71b/ab8po71b/ab8ppvdx6Ud3HpR6hViHd6t/VvymjvVv9pvymm93HpR3celHqCsQ7vdv9pvymk71b+rflNJ3celHdx6UeodYhe9QerflNJ3qD1b8po7uPSju49KPUH3Qd4g9W/KangvbSJbl2ZjIYwkSbDgknJJNQd3HpR3celKUXJUyzHkhimprqhLSSzWSWS4dwzclIR268yeVXhPozMS1w4HL/AKCQ5+VUu7j0o7uPSqXp03Z0f3pL4GxHLwntUS3sgPni1nP/AJasK/AmPHqN1v5YxZzgfotc/wB3HpR3celH2dB+85HVC74FGANa1kDlyVbsD5YxUF5d8JSIVt9WmLcud5p0kzAfFkNc53celHdx6ULBQn4lfVI1k/oqyHtdRQSA8iumXAUj/wDXBpsMnDQeXN/JDujMaTRW120iZ80z+tZfdx6Ud3HpU/Ll3ZX9vXXavyNqx1jTbJwwuHkHSQGKXDgeYJXOfSujj4q4UAXN3ODgZHc5zj3chXBd3HpR3celOePfyxx8RlHoei/0u4Q2Mpup2BBUqbOfDA8iDkV57fTacLy6Nk7NaGZmgJR1IjJyBh+fLpTO7j0o7uPSlDG4dCrPrFnSUl0Iu2i9T8jR20Xqfkal7AelHYD0qz1GXdjIu2j9T8jR20fqfkal7AelHYD0o9QbsZF20fqfkaBLGfM/I1L2A9KBAB5U/UG7GWjSVI/tv95v502rDE+GNop1FArG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igLG0U6igdjaKdRQKxtFOooCxtFOooCxtFOooCxtFOooCz/9k=' }} />
          </Card>
<View style={{backgroundColor:'#FFFFFF',padding:10}}>
<Text style={{color:'black',fontSize: 25,padding: 10, fontWeight:'600'}}>Recommended plans for {user}</Text>
<Text style={{color:'black',fontSize: 18,padding: 10, fontWeight:'400'}} >Based on your fitness and goals</Text>


<Card  style={styles.CardContainer}>
  
      <Card.Cover source={{uri: "https://media1.popsugar-assets.com/files/thumbor/Uqk0AaSwRiQ4FffM_ADqluc44kM/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/02/06/537/n/38922805/tmp_mv0ceg_4c4c2a5267b558a1_how-long-should-you-work-out-on-treadmill-to-lose-weight.jpg"}} />
      <Card.Content style={{ position: 'absolute', bottom: 0, padding: 20}}>
        <Text style={{ color: 'white', fontSize: 30, marginBottom: 5, fontWeight:'bold'}}>HealthifyPro 🌱✨</Text>
        <Text  style =  {{ color: 'white', fontSize: 20, marginBottom: 100, fontWeight:'bold'}}>Start at  &#8377;1000/m</Text>
      </Card.Content>
      
      <Text style={{color:'black',fontSize:18,fontWeight:'600'}}> Not Just Weight Loss. Smart Weight Loss. </Text>
      <Pressable style={{flexDirection:'row',paddingTop:10}}>
        <Icon name='person-circle' color ="black" size={20}/>
        <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingLeft:10,paddingBottom:10}}>2 Pro Coaches</Text>
      </Pressable>
      <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Know more</Text>
              </Pressable>
    </Card>
    </View>
      </View>
    </ScrollView>
    <Pressable style={styles.iconContainer} >
        <Icon name="chatbox" size={30} color="white" />
      </Pressable>
   </SafeAreaView>
  )
}
 const styles = StyleSheet.create({
  SafeAreaView:{
    flex:1,
    backgroundColor:'#E0DFDE'
    
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    gap:10
  },
  CardContainer: {
margin:10,padding:10
   
  },
  button: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#2196F3',
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor:'#009658',
   padding:14,
    alignItems:'center',justifyContent:'center',
    borderRadius:40,
    elevation: 5, // Shadow elevation
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4,
  },
 })
export default PlanScreen