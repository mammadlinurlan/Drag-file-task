let dropzone = document.querySelector(".dropZone");

let hiddenChoose = document.querySelector(".hiddenButton");

let btn = document.querySelector(".chooseButton");

let body = document.querySelector("body");

let table = document.querySelector(".table");

let tbody = document.querySelector("tbody");

let list = document.querySelector(".listd")

var rowNo = 0

let filecount = 0

btn.onclick = function () {
    hiddenChoose.click();
}

hiddenChoose.addEventListener("change", (e) => {
    let files = Array.from(e.target.files)
    files.forEach((file) => {
        showimage(file);
        filecount++
        console.log(filecount);
    })

})

dropzone.addEventListener("dragenter", () => {
    dropzone.style.boxShadow = "0px 0px 15px 0px #000000"
    console.log("a");
})
dropzone.addEventListener("dragleave", () => {
    dropzone.style.boxShadow = "initial"
    console.log("a");
})

dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.style.boxShadow = "0px 0px 15px 0px #000000"
})

dropzone.addEventListener("drop", (e) => {
    dropzone.style.boxShadow = "initial"
    e.preventDefault();
    let files = Array.from(e.dataTransfer.files);

    files.forEach((file) => {
        showimage(file);
        filecount++;
        // console.log(filecount);
    })
})

function showimage(file) {
    if (file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg") {
        alert("please select image file");
        return;
    }
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("loadend", () => {
        let deleteButton = document.createElement("button");
        deleteButton.style.border = "none"
        let removeIcon = document.createElement("i");
        removeIcon.className = "fas fa-trash bg-dark";
        deleteButton.append(removeIcon)

        console.log(deleteButton);

        let image = document.createElement("img");
        image.src = fileReader.result;
        image.style.width = "50px";
        image.style.height = "50px";

        table.classList.remove("d-none")

        let tbody = document.createElement("tbody")
        table.appendChild(tbody)
        let tr = document.createElement("tr")
        tbody.appendChild(tr)
        let th = document.createElement("th")
        th.setAttribute("scope", "row")
        rowNo++;
        th.innerText = rowNo
        th.classList.add("nom")
        console.log(rowNo);
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let downloadButton = document.createElement("button")
        let downloadIcon = document.createElement("i")
        downloadIcon.className = "fas fa-download bg-dark"
        downloadButton.appendChild(downloadIcon)
        downloadButton.style.border = "none"
        let link = document.createElement("a")
        link.setAttribute("href", image.src)
        link.setAttribute("download", image);
        document.body.appendChild(link)

        downloadButton.onclick = function () {
            link.click();
        }
        td5.append(downloadButton)

        td1.append(image)
        td2.innerText = `${Math.round(file.size / 1000)} kb / ${Math.round(file.size / 1000 / 1000)} mb`
        td3.innerText = file.type
        td4.append(deleteButton)
        tr.appendChild(th)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        
        list.appendChild(table)
        let no = document.querySelector(".nom")
        
        
       
   
        deleteButton.onclick = function () {
            if (filecount == 1) {
                let conf = confirm("your last file , are you sure?")
                if (conf) {
                    tr.remove();
                    filecount--;
                    table.classList.add("d-none")
                } else {
                    return
                }
            }
            else {
               
                tr.remove();
                filecount--
               

            }
           
           
        }
       
    }
    
    )
    
}
