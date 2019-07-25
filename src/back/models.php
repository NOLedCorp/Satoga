<?php
class BaseEntity{
    public $Id;
    public $Name;
    public $Description;
    public $CreateDate;
}

class Section extends BaseEntity{
    public $Photo;
    public $Goods;
}
    
class Good extends BaseEntity{
    public $SectionId;
    public $Photo;
    public $FullDescribtion;
}
    
class Article extends BaseEntity{
    public $Photo;
    public $Author;
    public $GoodId;
    public $Path;
}

class Photo{
    public $Id;
    public $Name;
    public $GoodId;
    public $Path;
}

class Video extends Photo{
    public $Photo;
}
?>