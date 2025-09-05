let fs =require ('fs');

/*
 fs has 5 methods :
 writeFile , appendFile , readFile , rename , unlink|
*/

// fs.writeFile("file.txt","learning node writefile",(error)=>{
//  if (error) throw error;
//     console.log("file created");
// })
// note : no. of times you run the file it will replace the old content to new content .


// fs.appendFile("newfile.txt","  learning append file \n",(error)=>{
//     if (error) throw error;
//        console.log("file appended");
//    })
// note : no. of times you run the file it will append the old content to new content .

// fs.readFile("file.txt","utf-8",(error,data)=>{
//     if (error) throw error;
//        console.log(data);
//    })
// note : no. of times you run the file it will read the content of file .
// utf-8 is encoding format

// fs.rename("file.txt","re_file.txt",(error)=>{
//     if (error) throw error;
//        console.log("file renamed");
//    })
 // re_file.txt is new name of file

// fs.unlink("re_file.txt",(error)=>{
//     if (error) throw error;
//        console.log("file deleted");
//    }) 
 