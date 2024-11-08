/*
Copyright amir javanmir
Released on: November 5, 2024
*/
function abbreviateContacts(){
    const input = document.getElementById("input").value;
    const lines = input.trim().split("\n");
    const uniqueContacts = new Map();

    lines.forEach(line => {
        const parts = line.split(/\s*-\s*/);
        if(parts.length != 2)return;

        const [first, second] = parts;
        let phone, name;
        if(isPhoneNumber(first.trim())){
            phone = normalizePhone(first.trim());
            name = second.trim().toLowerCase();
        }else if(isPhoneNumber(second.trim())){
            phone = normalizePhone(second.trim());
            name = first.trim().toLowerCase();
        }else{
            return;
        }
        if(phone.length == 11 && phone.startsWith("09")){
            uniqueContacts.set(phone, name);
        }
    });

    $result = Array.from(uniqueContacts).map(function([phone,name]){
        return `${phone} - ${name}`;        
    });

    document.getElementById("output").value = $result.join("\n");
}

function isPhoneNumber(str){
    str = str.replace(/\s+/g,"");
    const patterns = [
        /^09\d{9}$/,
        /^(\+98|98)9\d{9}$/,
        /^\(\+?98\)9\d{9}$/,
        /^\+\(98\)9\d{9}$/,
        /^\[\+?98\]9\d{9}$/,
        /^\+\[98\]9\d{9}$/,
        /^\{\+?98\}9\d{9}$/,
        /^\+\{98\}9\d{9}$/,
    ];

    return patterns.some(function(pattern){
        return pattern.test(str)
    })
}

function normalizePhone(str){
    str = str.replace(/\s+/g,"");
    if(str.startsWith("(+98)") || str.startsWith("(98)") || str.startsWith("+(98)")){
        str = '0' + str.slice(str.indexOf(')') + 1);
    }else if(str.startsWith("[+98]") || str.startsWith("[98]") || str.startsWith("+[98]")){
        str = '0' + str.slice(str.indexOf(']') + 1);
    }else if(str.startsWith("{+98}") || str.startsWith("{98}") || str.startsWith("+{98}")){
        str = '0' + str.slice(str.indexOf('}') + 1);
    }else{
        str = str.replace(/^(\+)?98/, "0");
    }

    if(!str.startsWith("09")){
        return "";
    }
    return str;
}

function downloadTextFile(){
    const text = document.getElementById("output").value.trim();
    const file = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "contacts.txt";
    link.click();
    URL.revokeObjectURL(url);
}