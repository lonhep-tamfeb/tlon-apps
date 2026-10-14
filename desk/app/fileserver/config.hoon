::  config for %groups-fileserver; see foo-fileserver's example config
::
|%
++  web-root   ^-  (list @t)   /apps/groups
++  file-root  ^-  path        /ui
++  tombstone  ^-  ?           |
++  cache      ^-  ?           &
++  index      ^-  $@(~ [~ path])  `/index/html
++  extension  ^-  ?(%need %path %fall)
  %fall
++  auth       ^-  $@(? [? (list [path ?])])
  &
--
