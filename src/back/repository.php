<?php

class DataBase {
    //$this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_portal;charset=UTF8','nomokoiw_portal','KESRdV2f');
    public $db;
    public function __construct()
    {
        //$this->db = new PDO('mysql:host=localhost;dbname=myblog;charset=UTF8','nlc','12345');
        $this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_stg;charset=UTF8','nomokoiw_stg','%L7fxvyt');
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    private function genInsertQuery($ins, $t){
        $res = array('INSERT INTO '.$t.' (',array());
        $q = '';
        for ($i = 0; $i < count(array_keys($ins)); $i++) {
            $res[0] = $res[0].array_keys($ins)[$i].',';
            $res[1][]=$ins[array_keys($ins)[$i]];
            $q=$q.'?,';
            
        }
        $res[0]=rtrim($res[0],',');
        $res[0]=$res[0].') VALUES ('.rtrim($q,',').');';
        
        return $res;
        
    }

    private function genSelectQuery($table){
        $sth = $this->db->query("SELECT * FROM $table");
        $table = rtrim(ucfirst($table),'s');
        $sth->setFetchMode(PDO::FETCH_CLASS, $table);
        return $sth->fetchAll();
    }
    
    public function getSections(){
        $sth = $this->db->query("SELECT Id, Name, Description, Photo, (select MIN(Price) FROM goods WHERE SectionId=s.Id) as MinPrice FROM sections s");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Section');
        $sections = [];
        while ($j = $sth->fetch()) {
            $j->Goods = $this->getSectionGoods($j->Id);
            $sections[] = $j;
        }
        return $sections;
    }
    
    public function getMain(){
        $sth = $this->db->query("SELECT * FROM goods WHERE Main=1");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Good');
        return $sth->fetch();
    }

    public function getGoods(){
        
        return $this->genSelectQuery('goods');
    }

    public function getArticles(){
        return $this->genSelectQuery('articles');
    }

    public function getPhotoes(){
        return $this->genSelectQuery('photos');
    }

    public function getVideos(){
        return $this->genSelectQuery('videos');
    }
    
    private function getSectionGoods($sid){
        $s = $this->db->prepare("SELECT * FROM goods WHERE SectionId=?");
        $s->execute(array($sid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Good');
        return $s->fetchAll();
    }

    

    public function addApp($app){
        $res = $this->genInsertQuery($app,"apps");
        $s = $this->db->prepare($res[0]);
        if($res[1][0]!=null){
            $s->execute($res[1]);
        }
        
        return $this->db->lastInsertId();
    }


    
}
?>