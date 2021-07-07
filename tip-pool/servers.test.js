describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('test for function submitServerInfo when the input is empty',function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect(serverId).toEqual(0);
  });
  it('test for function updateServerTable if it add a new server',function(){
    allServers['server1'] = "Alice";
    allServers['server2'] = "Alice2";
    allServers['server3'] = "Alice3";
    updateServerTable();
    expect(document.querySelectorAll("#serverTable tbody tr").length).toEqual(3);
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
