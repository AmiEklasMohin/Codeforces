var n = parseInt(readline());
var crimeList = readline().split(' ').map(x => parseInt(x));
var availableOfficers = 0, ans = 0;
for (var i = 0; i < n; i++) {
    if (crimeList[i] > 0) {
        availableOfficers += crimeList[i];
    } else if(crimeList[i] === -1) {
        if (availableOfficers > 0) {
            availableOfficers--;
        } else {
            ans++;
        }
    }
}
print(ans);