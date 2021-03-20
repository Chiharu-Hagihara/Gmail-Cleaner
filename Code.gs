function deleteMails () {
  var deleteThreads = GmailApp.search('older_than:7d -is:starred');
                                      
  for (var i = 0; i < deleteThreads.length; i++){
    deleteThreads[i].moveToTrash();
  }
}
