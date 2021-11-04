"use strict";(self.webpackChunkdocmigrate=self.webpackChunkdocmigrate||[]).push([[273],{3683:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),s=["components"],l={sidebar_position:1},o="Create table",d={unversionedId:"tutorial-basics/create-table",id:"tutorial-basics/create-table",isDocsHomePage:!1,title:"Create table",description:"Sebelum menggunakan di plugin, sebaiknya panggil semua require class di directory dbcore dengan bootstrap.php yang telah tersedia",source:"@site/docs/tutorial-basics/create-table.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-table",permalink:"/docmigratelsd/tutorial-basics/create-table",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docmigratelsd/"},next:{title:"Select, Insert, Update, Delete Data from table",permalink:"/docmigratelsd/tutorial-basics/select-data"}},p=[{value:"Class Definisi",id:"class-definisi",children:[],level:2},{value:"Instance Class",id:"instance-class",children:[],level:2},{value:"Drop Table",id:"drop-table",children:[],level:2},{value:"Empty Table",id:"empty-table",children:[],level:2}],c={toc:p};function u(e){var a=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-table"},"Create table"),(0,r.kt)("p",null,"Sebelum menggunakan di plugin, sebaiknya panggil semua require class di directory ",(0,r.kt)("inlineCode",{parentName:"p"},"dbcore")," dengan ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap.php")," yang telah tersedia "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"require 'dbcore/bootstrap.php';\n...\n")),(0,r.kt)("h2",{id:"class-definisi"},"Class Definisi"),(0,r.kt)("p",null,"Setelah itu definisikan namespace LSD\\Migration + table class turunan dari class migration beserta nama table dan definisi schema structur table di database wordpress. Contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<?php\n\nnamespace LSD\\Migration;\n\nclass Report extends Migration\n{\n    protected static $table_name;\n\n    public function __construct()\n    {\n        static::$table_name = 'lsddonation_reports';\n        $this->version = '0.1';\n        $this->create_table();\n    }\n\n    public function create_table()\n    {\n        require_once ABSPATH . 'wp-admin/includes/upgrade.php';\n        \n        $sql = \"CREATE TABLE \" . static::get_table_name() . \" (\n        report_id bigint(20) NOT NULL AUTO_INCREMENT,\n        user_id bigint(20) NOT NULL,\n        program_id bigint(20) NOT NULL,\n        name mediumtext NOT NULL,\n        ... -> dan field lainnya yg akan didefinisikan\n        PRIMARY KEY  (report_id)\n    ) CHARACTER SET utf8 COLLATE utf8_general_ci;\";\n\n    dbDelta($sql);\n    update_option('lsdd_migration_db_version', $this->version);\n}\n\n")),(0,r.kt)("h2",{id:"instance-class"},"Instance Class"),(0,r.kt)("p",null,"Setelah terdefinisi semua schema struktur table maka sebaiknya memberi instance class dengan operator ",(0,r.kt)("strong",{parentName:"p"},"new")," supaya dapat digunakan dengan baik mengingat banyak di dalam class menggunakan operator ",(0,r.kt)("strong",{parentName:"p"},"$this->...")," Contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"$report = new Report();\n")),(0,r.kt)("h2",{id:"drop-table"},"Drop Table"),(0,r.kt)("p",null,"Class turunan dapat di drop tablenya"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   ...\n   $report->drop_table();\n   ...\n")),(0,r.kt)("h2",{id:"empty-table"},"Empty Table"),(0,r.kt)("p",null,"Class turunan dapat di empty tablenya"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   ...\n   $report->empty_table();\n   ...\n")))}u.isMDXComponent=!0}}]);