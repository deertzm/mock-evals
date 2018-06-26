let prod = document.getElementById('production-shade');
let prodcontent = document.getElementById('production-content');
prod.addEventListener('click', () => {
    if (prodcontent.className == 'content-open') {
        prodcontent.className = 'content-close';
        prod.className.baseVal = 'el-header__shade--more';
    }
    else {
        prodcontent.className = 'content-open';
        prod.className.baseVal = 'el-header__shade';
    }
});


let qual = document.getElementById('quality-shade');
let qualcontent = document.getElementById('quality-content');
qual.addEventListener('click', () => {
    if (qualcontent.className == 'content-open') {
        qualcontent.className = 'content-close';
        qual.className.baseVal = 'el-header__shade--more';
    }
    else {
        qualcontent.className = 'content-open';
        qual.className.baseVal = 'el-header__shade';
    }
});
