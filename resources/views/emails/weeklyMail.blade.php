<!DOCTYPE html>
<html>
<head>
    <title>How was your last week?</title>
</head>
<body>

<p>Hello <b>{{ $employee->name }} {{ $employee->last_name }}</b>,</p>

The last week is over and now you can tell your mood of the last week. <br>

Just click <a href="http://localhost/#/weeklymood/{{ $currentWeek }}">here</a> to do so.


Your Moodik team

</body>
</html>