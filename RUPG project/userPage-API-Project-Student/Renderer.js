// Fill in the functions for your Renderer Class


class Renderer {
    _renderUsers(mainUser) {


        let source = $("#user-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template(mainUser)

        $(".user-container").empty().append(newHTML);
    }




    _renderFriends(friends) {

        //console.log(friends)
        let source = $("#friends-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({ friends })
        $(".friends-container").empty().append(newHTML)


    }

    _renderQuote(quoteInfo) {
        let quote = quoteInfo.quote

        let source = $("#quote-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template({ quote });
        $(".quote-container").empty().append(newHTML);

    }

    _renderPokemon(pokemonInfo) {

        let image = pokemonInfo.sprites.front_default
        let name = pokemonInfo.name


        let source = $("#pokemon-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template({ image, name });
        $(".pokemon-container").empty().append(newHTML);



    }

    _renderMeat(meatText) {
        let text = meatText;

        let source = $("#meat-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template({ text })
        $(".meat-container").empty().append(newHTML);

    }

    render(data) {
        //invokes all the individual _render methods

       
        this._renderUsers(data.mainUser)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.ipsum)
        this._renderFriends(data.friends)
    }
}

