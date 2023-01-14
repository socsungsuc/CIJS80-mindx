

//---------------------Cau 1----------------------
function Reverse_1(s1){
    var s2 = "";
    for (var i = s1.length - 1; i >= 0; i--){
        s2 += s1[i];
    }
    return s2;
}

function Reverse_2(s1){
    // B1: chuyen chuoi sang mang ky tu
    var s2 = s1.split("");

    //B2: dao nguoc cac ky tu trong mang
    s2 = s2.reverse();

    //B3: gop cac ky tu lai thanh chuoi
    s2 = s2.join("");

    return s2;
}



//---------------------Cau 2----------------------
function Remove_Duplicates_1(a){
    // Dung pt new Set[iter], trong do iterable neu ban khong truyen vao thi Set se rong vd a = new Set() ->  a = rong
    // neu ban truyen iter thi TAT CA CAC PHAN TU KHAC NHAU cua no se duoc them vao Set -> xoa dc cac ptu trung nhau
    return [...new Set(a)];
}

function Remove_Duplicates_2(a){
    return a.filter((c, index) => {    // ham filter se tra ve 1 mang cac phan tu duoc chon
        return a.indexOf(c) === index; // Pt indexOf() tra ve index cua lan xuat hien dau tien cua 1 pt trong mang
    })
}


//---------------------Cau 3----------------------
function Count_Max_DuplicatesList(a){
    // Em muon xay dung 1 ham sort o day nhung bi vuong, cach truyen tham chieu de swap cac ptu cua mang
    a.sort();

    let count = 1;
    let count_temp = 0;
    let max = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] == a[i+1])
        {
            count++;
        }
        else count = 1;
        if (count > count_temp){
            count_temp = count;
            max = a[i];
        }
        
    }
    console.log("value: ", max, " count: ",count_temp);
}

//---------------------Cau 4----------------------
// Da em lam cau 4 trong file index.html