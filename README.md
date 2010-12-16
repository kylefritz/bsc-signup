#Baltimore Supper Club

Website for signing up new people

    + (site root)
    |
    +-app/ (this repo)
    |
    +-emails/ (signups kept here)
    |
    +-index.html -> ./app/supper.html
    
##Couple of other (htaccess tricks):

###Rewrite http://www => http://

    RewriteEngine On
    RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
    RewriteRule ^(.*)$ http://%1/$1 [R=301,L]


###Lock out the secret directory with htpasswd and don't show password

    AuthUserFile /home/kpf/webapps/supperclub/emails/.htpasswd
    AuthName "You Need a Password"
    AuthType Basic
    
    require valid-user
    
    <Files ~ "^\.ht">
     Order allow,deny
     Deny from all
     Satisfy All
    </Files>



