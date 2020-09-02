function deleteMails () {
  var delayDays = 7;
  var deleteLabel = "";
  var deleteThreads = GmailApp.search('older_than:'+delayDays+'d -is:starred');
                                      
  for (var i = 0; i < deleteThreads.length; i++){
    deleteThreads[i].moveToTrash();
  }
}
