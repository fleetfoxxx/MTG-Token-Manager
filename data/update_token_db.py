import sys, xml2json

if (len(sys.argv) < 3 or sys.argv[1] == '?'):
   print "Usage: python update_token_db.py <infile.xml> <outfile.json>"
   exit(1)

infname = sys.argv[1]
outfname = sys.argv[2]

with open(infname, 'r') as inf:
   with open(outfname, 'w') as outf:
      data = inf.read().replace('\n', '')
      jdata = xml2json.xml2json(data)
      outf.write(jdata)