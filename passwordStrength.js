function echo(text){
	try {
		console.log(text);
	}
	catch(ReferenceError) {
		print(text);
	}
}


function evaluateSecurePassword(){
	/* 
		Function evaluates how secure is password. 
		It returns score, higher the score, more secure is password.
	*/

	/* 500 most common passwords */
	const common_passwords = [
		"123456", "password", "12345678", "qwerty", "123456789", "12345", "1234", "111111", 
		"1234567", "dragon", "123123", "baseball", "abc123", "football", "monkey", "letmein", 
		"696969", "shadow", "master", "666666", "qwertyuiop", "123321", "mustang", "1234567890", 
		"michael", "654321", "pussy", "superman", "1qaz2wsx", "7777777", "fuckyou", "121212", 
		"000000", "qazwsx", "123qwe", "killer", "trustno1", "jordan", "jennifer", "zxcvbnm", "asdfgh", 
		"hunter", "buster", "soccer", "harley", "batman", "andrew", "tigger", "sunshine", "iloveyou", 
		"fuckme", "2000", "charlie", "robert", "thomas", "hockey", "ranger", "daniel", "starwars", 
		"klaster", "112233", "george", "asshole", "computer", "michelle", "jessica", "pepper", "1111", 
		"zxcvbn", "555555", "11111111", "131313", "freedom", "777777", "pass", "fuck", "maggie", "159753", 
		"aaaaaa", "ginger", "princess", "joshua", "cheese", "amanda", "summer", "love", "ashley", "6969", 
		"nicole", "chelsea", "biteme", "matthew", "access", "yankees", "987654321", "dallas", "austin", 
		"thunder", "taylor", "matrix", "william", "corvette", "hello", "martin", "heather", "secret", "fucker", 
		"merlin", "diamond", "1234qwer", "gfhjkm", "hammer", "silver", "222222", "88888888", "anthony", 
		"justin", "test", "bailey", "q1w2e3r4t5", "patrick", "internet", "scooter", "orange", "11111", 
		"golfer", "cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever", "mickey", 
		"chicken", "sparky", "snoopy", "maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome", 
		"falcon", "cowboy", "ferrari", "samsung", "andrea", "smokey", "steelers", "joseph", "mercedes", 
		"dakota", "arsenal", "eagles", "melissa", "boomer", "booboo", "spider", "nascar", "monster", 
		"tigers", "yellow", "xxxxxx", "123123123", "gateway", "marina", "diablo", "bulldog", "qwer1234", 
		"compaq", "purple", "hardcore", "banana", "junior", "hannah", "123654", "porsche", "lakers", "iceman", 
		"money", "cowboys", "987654", "london", "tennis", "999999", "ncc1701", "coffee", "scooby", "0000", "miller", 
		"boston", "q1w2e3r4", "fuckoff", "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", 
		"333333", "oliver", "redsox", "player", "nikita", "knight", "fender", "barney", "midnight", "please", 
		"brandy", "chicago", "badboy", "iwantu", "slayer", "rangers", "charles", "angel", "flower", "bigdaddy", 
		"rabbit", "wizard", "bigdick", "jasper", "enter", "rachel", "chris", "steven", "winner", "adidas", "victoria", 
		"natasha", "1q2w3e4r", "jasmine", "winter", "prince", "panties", "marine", "ghbdtn", "fishing", "cocacola", 
		"casper", "james", "232323", "raiders", "888888", "marlboro", "gandalf", "asdfasdf", "crystal", "87654321", 
		"12344321", "sexsex", "golden", "blowme", "bigtits", "8675309", "panther", "lauren", "angela", "bitch", "spanky",
		"thx1138", "angels", "madison", "winston", "shannon", "mike", "toyota", "blowjob", "jordan23", "canada", 
		"sophie", "Password", "apples", "dick", "tiger", "razz", "123abc", "pokemon", "qazxsw", "55555", "qwaszx", 
		"muffin", "johnson", "murphy", "cooper", "jonathan", "liverpoo", "david", "danielle", "159357", "jackie", "1990", 
		"123456a", "789456", "turtle", "horny", "abcd1234", "scorpion", "qazwsxedc", "101010", "butter", "carlos", 
		"password1", "dennis", "slipknot", "qwerty123", "booger", "asdf", "1991", "black", "startrek", "12341234", 
		"cameron", "newyork", "rainbow", "nathan", "john", "1992", "rocket", "viking", "redskins", "butthead", "asdfghjkl", 
		"1212", "sierra", "peaches", "gemini", "doctor", "wilson", "sandra", "helpme", "qwertyui", "victor", "florida", 
		"dolphin", "pookie", "captain", "tucker", "blue", "liverpool", "theman", "bandit", "dolphins", "maddog", "packers", 
		"jaguar", "lovers", "nicholas", "united", "tiffany", "maxwell", "zzzzzz", "nirvana", "jeremy", "suckit", "stupid", 
		"porn", "monica", "elephant", "giants", "jackass", "hotdog", "rosebud", "success", "debbie", "mountain", "444444", 
		"xxxxxxxx", "warrior", "1q2w3e4r5t", "q1w2e3", "123456q", "albert", "metallic", "lucky", "azerty", "7777", 
		"shithead", "alex", "bond007", "alexis", "1111111", "samson", "5150", "willie", "scorpio", "bonnie", "gators", 
		"benjamin", "voodoo", "driver", "dexter", "2112", "jason", "calvin", "freddy", "212121", "creative", "12345a", 
		"sydney", "rush2112", "1989", "asdfghjk", "red123", "bubba", "4815162342", "passw0rd", "trouble", "gunner", 
		"happy", "fucking", "gordon", "legend", "jessie", "stella", "qwert", "eminem", "arthur", "apple", "nissan", 
		"bullshit", "bear", "america", "1qazxsw2", "nothing", "parker", "4444", "rebecca", "qweqwe", "garfield", "01012011", 
		"beavis", "69696969", "jack", "asdasd", "december", "2222", "102030", "252525", "11223344", "magic", "apollo", 
		"skippy", "315475", "girls", "kitten", "golf", "copper", "braves", "shelby", "godzilla", "beaver", "fred", "tomcat", 
		"august", "buddy", "airborne", "1993", "1988", "lifehack", "qqqqqq", "brooklyn", "animal", "platinum", "phantom", 
		"online", "xavier", "darkness", "blink182", "power", "fish", "green", "789456123", "voyager", "police", "travis", 
		"12qwaszx", "heaven", "snowball", "lover", "abcdef", "00000", "pakistan", "007007", "walter", "playboy", "blazer", 
		"cricket", "sniper", "hooters", "donkey", "willow", "loveme", "saturn", "therock", "redwings"
	];

	/* initialize pre-required variables and helper functions */
	const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const bigLetters   = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	function inList(needle, stack){
		for (var i = stack.length - 1; i >= 0; i--) {
			if(needle == stack[i]){
				return true;
			}
		};
		return false;
	}

	function insertInList(el, lst){
		/* insert into list only if it is not there yet */
		/* return new list */

		if(!inList(el, lst)){
			lst.push(el)
		}

		return lst;
	}


	function evaluateScore(password){

		var usedSmall = [];
		var usedBig   = [];
		var usedNum   = [];
		var usedChar  = [];

		var countSmall = 0;
		var countBig   = 0;
		var countNum   = 0;
		var countChar  = 0;

		var weight = 2;

		var score = 0;

		const pwdLen = password.length;

		/* eliminate weak passwords */
		if(inList(password, common_passwords)){
			return 5;
		}


		/* Analyze password */
		/* Iterate through password and check what it contains */
		for (var i = pwdLen - 1; i >= 0; i--) {
			var el = password[i];

			/* check where it goes */
			if(inList(el, smallLetters)){
				countSmall += 1;
				insertInList(el, usedSmall);
			}

			else if(inList(el, bigLetters)){
				countBig += 1;
				insertInList(el, usedBig);
			}

			else if(inList(el, numbers)){
				countNum += 1;
				insertInList(el, usedNum);
			}

			else{
				countChar += 1;
				insertInList(el, usedChar);
			}

		};


		/* Calculate score */

		/* Calculate weight */
		if(countSmall > 0){
			weight += 1;
		}

		if(countBig > 0){
			weight += 1;
		}

		if(countNum > 0){
			weight += 1;
		}

		if(countChar > 0){
			weight += 1;
		}

		score += (weight-1) * (pwdLen/4);  	// Increase score for every 4 characters in length. 
											// For how much it increases, it depends on weight.
											// Better the password, higher the weight.

		/* for each element in used* list increase score for weight */
		/* higher diversity in password gives more score */
		score += usedSmall.length * weight;
		score += usedBig.length * weight;
		score += usedNum.length * weight;
		score += usedChar.length * weight;


		return parseInt(score, 10);
	}

	return evaluateScore
}


function updateScore(score, password, firstname, lastname){
	/*
		Function updates score (decreases) if password contains
		firstname or lastname or slightly increases if password does not 
		contain firstname or lastname.
	*/

	var pattern = "(.*)?("+firstname+"|"+lastname+")(.*)?";
    var re = new RegExp(pattern, "i");
    var n = password.match(re);
    if(n !== null){
    	return Math.max(0, score-25);
    }
    return score+1;
}



var p0 = "password";
var p1 = "mojegeslo";
var p2 = "mediumWeak";
var p3 = "m3d1umStrong";
var p4 = "5tr0NG!#$%(";

f = evaluateSecurePassword();

res = f(p0)
echo("pwd: '" + p0 + "' res: " + res);

res = updateScore(f(p0), p0, "firstName", "lastName")
echo("pwd: '" + p0 + "' res: " + res);

res = updateScore(f(p0), p0, "pass", "word")
echo("pwd: '" + p0 + "' res: " + res);

res = f(p1)
echo("pwd: '" + p1 + "' res: " + res);

res = f(p2)
echo("pwd: '" + p2 + "' res: " + res);

res = f(p3)
echo("pwd: '" + p3 + "' res: " + res);

res = f(p4)
echo("pwd: '" + p4 + "' res: " + res);
