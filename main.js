window.addEventListener("load", initialize);
var id = 0;

function initialize() {
    document.body.innerHTML = "<div id=\"console\"></div>";
    delayed_type("Hi I'm lib-Pluton, you should try the 'help' command to get information.", 20, take_input);

}

function delayed_type(text, delay, callback) {
    var j = 0;

    function type() {
        if (j < text.length) {
            document.getElementById('console').innerHTML += text[j];
            j++;
            setTimeout(type, delay);
        } else {
            document.getElementById('console').innerHTML += "<br>";
            callback();
        }
    }
    type();
}

function take_input() {
    document.getElementById('console').innerHTML += "> ";
    document.getElementById('console').innerHTML += "<input type=\"text\" id=\"" + id + "\" maxlength=\"20\" />";
    document.getElementById(id).focus();
    document.getElementById(id).onkeypress = function (event) {
        if (event.keyCode == 13 || event.which == 13) {
            var input = document.getElementById(id).value;
            document.getElementById(id).remove();
            document.getElementById('console').innerHTML += input + "<br>";
            id++;
            process_input(input);
        }
    };
}

function process_input(input) {
    if (input == "help") {
        document.getElementById('console').innerHTML += "Try one of these commands :<br>";
        let arr = new Array("<span class=\"highlight\">about<br></span>", "<span class=\"highlight\">discord-server<br></span>",
            "<span class=\"highlight\">twitch<br></span>", "<span class=\"highlight\">github<br></span>",
            "<span class=\"highlight\">contact<br></span>", "<span class=\"highlight\">reddit<br></span>",
            "<span class=\"highlight\">forum<br></span>", "<span class=\"highlight\">clear</span>");
        delayed_type(arr, 200, take_input);

    }

    else if (input == "discord") {
        var server = "<span class=\"highlight\">My Server: </span>";

        server += "<span class=\"text\">https://discord.gg/F5BkwBSJXh<br></span>";

        var id = "<span class=\"highlight\">My User ID: </span>";

        id += "<span class=\"text\">694655257757614111<br></span>";

        var tag = "<span class=\"highlight\">My User Tag: </span>";

        tag += "<span class=\"text\">'plü#0851<br></span>";

        let arr = new Array(server, id, tag);
        delayed_type(arr, 500, take_input);
    }

    else if (input == "about") {
        var about = "I'm developer and Samurai Penguin.<br>";
        about += "I usually code projects, scripts, useful websites and game cheats.<br>"
        about += "I love anime, my fav anime is Naruto.<br>"
        about += "https://naruto.fandom.com/en/wiki/Naruto_Uzumaki"
        about += "I will share this project on my GitHub Profile.<br>"
        about += "If you want to join my organization, write on Email or Discord.<br>"
        about += "Oh btw i am a gamer and i have a Twitch Channel. I am a streamer.<br>"
        document.getElementById('console').innerHTML += "<span class=\"information\">" + about + "</span>";
        take_input();
    }

    else if (input == "twitch") {
        var about = "My Twitch Channel:<br>";
        about = "https://twitch.tv/plutonlib<br>"
        document.getElementById('console').innerHTML += "<span class=\"information\">" + about + "</span>";
        take_input();
    }

    else if (input == "forum") {
        var about = "My Forum:<br>";
        about = "https://soulcheats.net/<br>"
        document.getElementById('console').innerHTML += "<span class=\"information\">" + about + "</span>";
        take_input();
    }

    else if (input == "crowdin") {
        var about = "My Crowdin Page:";
        about += "https://crowdin.com/profile/PlutonLib-"
        document.getElementById('console').innerHTML += "<span class=\"information\">" + about + "</span>";
        take_input();
    }

    else if (input == "reddit") {
        var about = "My Reddit Subreddit:<br>";
        about = "https://www.reddit.com/r/CFOF/<br>"
        document.getElementById('console').innerHTML += "<span class=\"information\">" + about + "</span>";
        take_input();
    }

    else if (input == "github") {
        var about = "My Github Profile:<br>";
        about = "https://github.com/lib-Pluton<br>"
        document.getElementById('console').innerHTML += "<span class=\"information\">" + about + "</span>";
        take_input();
    }

    else if (input == "discord-server") {
        openInNewTab("https://discord.gg/F5BkwBSJXh");
        document.getElementById('console').innerHTML += "<span class=\"red\">You have been successfully redirected to Discord.!</span><br>";

        take_input();

    }
    else if (input == "contact") {
        var mail = "<span class=\"highlight\">E-mail: </span>";
        mail += "<span class=\"text\">pw10nlib@gmail.com<br></span>";

        var address = "<span class=\"highlight\">Address: </span>";
        address += "<span class=\"text\"> ¯\\_(ツ)_/¯ <br></span>";

        let arr = new Array(mail, address);
        delayed_type(arr, 500, take_input);
    }

    else if (input == "clear") {
        initialize();
    }
    else {
        document.getElementById('console').innerHTML += "<span class=\"error\">Error: Command \"" + input + "\" not found. Try \"help\"</span><br>";
        take_input();
    }
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}