const mongoose = require('mongoose');
const { Schema } = mongoose;

const activitySchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  activityLevel: {
    type: String,
    default: 'Intermediate'
  },
  swimming: {
    time: {
      type: String,
       default: "7:00 AM",
      required: false
    },
    title:{type:String,default:"Dive into the Pool!"},
    message:{type:String, default:"Get ready to make a splash! Enjoy your swimming session and stay healthy."}
  , largeIcon:{type:String, default:"https://th.bing.com/th/id/OIG2.qvyb5PIn7oZXEViND822?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn&cb=1718175183337"},
  picture:{type:String,default:'https://th.bing.com/th/id/OIG2.qvyb5PIn7oZXEViND822?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn&cb=1718175183337'}
  },
  running: {
    time: {
      type: String,
      default: "6:00 AM",
      required: false
    },
    title:{type:String,default:"Time to Hit the Track!"},
    message:{type:String, default:"Lace up your running shoes and hit the track. Let's get those endorphins flowing!"},
    largeIcon:{type:String, default:"https://th.bing.com/th/id/OIG3.boEaZaIL5nYubPn_8z3o?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"},
    picture:{type:String,default:'https://th.bing.com/th/id/OIG3.boEaZaIL5nYubPn_8z3o?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn'}
  },
  bicycling: {
    time: {
      type: String,
      default: "6:00 PM",
      required: false
    },
    title:{type:String,default:"Get Ready to Cycle!"},
   
    message:{type:String, default:"It's the perfect time for a refreshing bike ride. Enjoy your ride and stay fit!"}
    ,largeIcon:{type:String, default:"https://th.bing.com/th/id/OIG4.Wwugqbz5ZqsDim1f8AMi?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"},
    picture:{type:String,default:'https://th.bing.com/th/id/OIG4.Wwugqbz5ZqsDim1f8AMi?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn'}
  },
  walking: {
    time: {
      type: String,
      default: "7:00 PM",
      required: false
    },
    title:{type:String,default:"Time for a Walk!"},
     message:{type:String, default:"It's time for a relaxing walk. Stretch your legs and enjoy the fresh air."}
  , largeIcon:{type:String, default:"https://th.bing.com/th/id/OIG4.A0LhrL5ZJdIRPzFbRzia?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"},
  picture:{type:String,default:'https://th.bing.com/th/id/OIG4.A0LhrL5ZJdIRPzFbRzia?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn'}
    },
    waterIntake:{
      time: {
        type: String,
        default: "5:00 AM",
        required: false
      },
      title:{type:String,default:"Hydration Reminder!"},
       message:{type:String, default:"Stay hydrated! Drink some water now."}
    , largeIcon:{type:String, default:"https://th.bing.com/th/id/OIP.OQzYQi-6a7opYVqKA3baqwHaFo?w=257&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"},
    picture:{type:String,default:'https://th.bing.com/th/id/OIP.OQzYQi-6a7opYVqKA3baqwHaFo?w=257&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7'}
      },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
