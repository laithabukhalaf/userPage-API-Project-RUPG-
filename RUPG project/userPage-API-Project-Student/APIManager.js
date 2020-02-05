//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}

    }

    loadData() {
        //you should make all your API requests here
        //each request should update the `data` object accordingly

        $.ajax({
            method: "get",
            url: `https://randomuser.me/api/?results=7`,
            success: data => {

                let users = data.results;
                let user = users.splice(0, 1)[0]


                const mainUser = {
                    firstname: user.name.first,
                    lastname: user.name.last,
                    city: user.location.city,
                    state: user.location.state,
                    picture: user.picture.large,

                }


                const friends = users.map(u => {
                    return {
                        first: u.name.first,
                        last: u.name.last
                    }


                })
                this.data.friends = friends
                this.data.mainUser = mainUser



                /*let user={name:users[0].name.first+" "+ users[0].name.last,
                  picture: users[0].picture.large,
                  city:users[0].location.city,
                  state:users[0].location.state }
                  this.data.user=user
                  
                

               let friends=[]
               for(let i=1;i<users.length;i++)
               {
                friends.push({name:users[i].name.first+""+users[i].name.last})
                this.data.friends=friends
               }*/


            },
            error: (err) => {
                console.log(err)
            }
        })

        $.ajax({
            method: "get",
            url: ` https://api.kanye.rest`,
            success: data => {
                this.data.quote = data
            },
            error: (err) => {
                console.log(err)
            }

        })

        const randomNumber = Math.floor((Math.random() * 964))
        $.ajax({
            method: "get",
            url: `https://pokeapi.co/api/v2/pokemon/${randomNumber}`,
            success: data => {
               
                this.data.pokemon = data;
            },

            error: (err) => {
                console.log(err)
            }


        })

        $.ajax({
            url: 'https://baconipsum.com/api/?type=meat-and-filler',

            success: data => {

                this.data.ipsum = data

            },
            error: (err) => {
                console.log(err)
            }
        });






    }

}
