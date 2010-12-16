#!/usr/bin/env python

import cgi
import os

if os.environ["REMOTE_ADDR"]=="69.143.34.61":
	import cgitb;cgitb.enable()

from datetime import datetime

form=cgi.FieldStorage()
email=form.getvalue("email","no email")

f=open('../emails/emails.txt','a')
f.write("%s\t%s\n"%(datetime.now(),email))
f.close()

print "Content-type:text/html"
print
print "<html>We've got you're email as %s. We'll talk to you soon.</html>"%email

