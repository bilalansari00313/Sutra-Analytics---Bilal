




Create table users (
    -- 	userId int AUTO_INCREMENT PRIMARY KEY,
    --     firstName varchar(255),
    --     lastName varchar(255),
    --     age int,
    --     gender char(2),
    --     city varchar(50)
    -- );

/*`
Create table test (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
)
*/
/*
insert into users (PersonID, LastName, FirstName, Address, City) values 
(2,'Arayan', 'Raj', 'Falak', 'Surat'),
(3,'Khan', 'Salman', 'Bandra', 'Mumbai'),
(4,'Khan', 'Sharukh', 'Mannat', 'Mumbai'),
(5,'Virat', 'Kohli', 'Falak', 'Delhi');
*/

/*select * from users where City = 'ahmedabad';
*/

//
select * from users where LastName = "Khan" and Address = "Falak";


use xyz;
create table abdulla(id int primary key, name varchar(50) not null, city varchar(50), class int );
 
 insert into abdulla( id, name, city, class) values 
 (1, 'vinod_shing', 'up', 2),
 (2,'ronk', 'delhi',2),
 (3, 'kunal', 'delhi', 1),
 (4, 'kamles', 'gujrat', 3),
 (5, 'aadarsh', 'gujrat', 1),
 (6,'kalicharan', 'up', 3 );
 
 
 select * from abdulla;



//  -- SELECT count(distinct district) FROM sakila.address;
// SELECT count(*) as data FROM sakila.address;
SELECT * FROM falak.room where flore in (6,5);
SELECT * FROM falak.room limit 3;
SELECT * FROM falak.room order by owner_name; 
SELECT * FROM falak.room order by flore; 
SELECT * FROM falak.room order by flore desc; 
SELECT * FROM falak.room order by room limit 2; 










 function compareFile() {
    let packageFile = fs.read('..path-of-package.json')
    let packageLockFile = fs.read('..path of file')

    packageFile.packages.dependencies.map(e => {
        e 
    })
    
 }

let dependencies = {
    "@sendgrid/mail": "^7.2.1",
    "adm-zip": "^0.5.1",
    "archiver": "^5.1.0",
    "aws-sdk": "^2.754.0",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.1",
    "compare-versions": "^3.6.0",
    "connect-flash": "^0.1.1",
    "cookie-parser": "~1.4.4",
    "cookie-session": "^1.4.0",
    "cors": "^2.8.5",
    "country-state-city": "^1.0.5",
    "cron": "^1.8.2",
    "debug": "~2.6.9",
    "ejs": "^3.1.5",
    "express": "~4.16.1",
    "express-validator": "^6.6.0",
    "firebase-admin": "^9.4.2",
    "fs": "0.0.1-security",
    "fs-extra": "^9.0.1",
    "google-play-billing-validator": "^2.1.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "jsonwebtoken": "^8.5.1",
    "lodash": "^4.17.20",
    "moment": "^2.27.0",
    "moment-timezone": "^0.5.31",
    "mongoose": "^5.9.23",
    "morgan": "~1.9.1",
    "multer": "^1.4.2",
    "multer-s3": "^2.9.0",
    "node-excel-export": "^1.4.4",
    "path": "^0.12.7",
    "request": "^2.88.2",
    "swagger-ui-express": "^4.1.4"
  }

 let packageObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
console.log(packageObj[a]);

let packageLockObj = {
    a: 1,
    b: 2,
    c: 3
}

objKeyArr = ["a", "b", "c", d]

for (let index = 0; index < objKeyArr.length; index++) {
    if (!packageLockObj["ejs"]){
        return false
    }
    
}



// Simple

School

subject

id, subject_name, description

1, "Maths", "Maths subject"
2, "History", "History"


Students
id, firstName, lastName, class, age
1, "tanvir", "ansari", "12", 23,
2, "Salman", "Khan", "7", 12


vehicals
id, name, model, wheeler, color, Company
1, "Splender", 2012, 2, Black, "Honda"
2, "Appache", 2019, 2, Black, "TVS"
3, "Swift", 2018, 4, White, "Honda"







use kee;

create table city (cid int auto_increment, cityname varchar(50), primary key (cid));


insert into city (cityname) values
('Ahemdabad'),
('Surat'),
('Vadodra'),
('Gandhinagar'),
('Bhavnagar');

select * from city;



create table personal (id int, name varchar(30), gender char(2),
percentage int, city varchar(50), primary key (id), 
foreign key (city) references city(cid) );
-------------------------------------------------------------------------------

// foreign key

// alter table city
// add constraint state_id_fk
// foreign key(state_id)
// references state(state_id)
// on delete cascade
// on update cascade; 4




Here's an example of five departments with multiple sub-department names related to data entry in the IT industry:

Department: Data Operations

Sub-department 1: Data Entry and Processing
Sub-department 2: Data Verification and Validation
Sub-department 3: Data Cleansing and Enrichment
Sub-department 4: Data Migration and Integration
Sub-department 5: Data Quality Assurance
Department: Business Intelligence

Sub-department 1: Data Collection and Entry
Sub-department 2: Data Warehousing
Sub-department 3: Reporting and Analytics
Sub-department 4: Data Visualization
Sub-department 5: Data Mining
Department: Information Technology Services

Sub-department 1: Database Management
Sub-department 2: Data Security and Privacy
Sub-department 3: System Integration
Sub-department 4: Network Administration
Sub-department 5: Cloud Services
Department: Software Development

Sub-department 1: Database Development
Sub-department 2: Data Entry Tools Development
Sub-department 3: Data Modeling
Sub-department 4: API Development
Sub-department 5: Data-driven Application Development
Department: Customer Support

Sub-department 1: Data Entry for Customer Requests
Sub-department 2: Data Entry for Issue Tracking
Sub-department 3: Data Entry for Knowledge Base Management
Sub-department 4: Data Entry for Customer Feedback
Sub-department 5: Data Entry for Service Level Agreement (SLA) Management
