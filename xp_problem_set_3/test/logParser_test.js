var LogParser = require('../logparser.js');
var expect = require('chai').expect;

describe('#logParser', function(){
  it('can return the date range of the log file', function(){
    var logParser = new LogParser('data/production.log');
    var dateRange = logParser.getDateRange();
    expect(dateRange).to.deep.equal(['2014-05-10', '2014-05-11', '2014-05-12', '2014-05-13', '2014-05-14', '2014-05-15', '2014-05-16' ]);
  });
  it('can return the date and log count for each date', function(){
    var logParser = new LogParser('data/production.log');
    var logDates = logParser.extractDates();
    var logCount = logParser.getLogCount(logDates);
    expect(logCount).to.deep.equal({'2014-05-10': 205, '2014-05-11': 264, '2014-05-12': 326, '2014-05-13': 271, '2014-05-14': 365, '2014-05-15': 324, '2014-05-16': 347 });
  });
  it('can return the date log level and log count for each date', function(){
    var logParser = new LogParser('data/production.log');
    var logLevelCount = logParser.logLevelCount();
    expect(logLevelCount).to.deep.equal(
                                        {
                                          '2014-05-10  INFO': 75,
                                          '2014-05-10  WARN': 56,
                                          '2014-05-10 DEBUG': 74,
                                          '2014-05-11  INFO': 85,
                                          '2014-05-11  WARN': 90,
                                          '2014-05-11 DEBUG': 89,
                                          '2014-05-12  INFO': 107,
                                          '2014-05-12  WARN': 117,
                                          '2014-05-12 DEBUG': 102,
                                          '2014-05-13  INFO': 92,
                                          '2014-05-13  WARN': 87,
                                          '2014-05-13 DEBUG': 92,
                                          '2014-05-14  INFO': 124,
                                          '2014-05-14  WARN': 131,
                                          '2014-05-14 DEBUG': 110,
                                          '2014-05-15  INFO': 115,
                                          '2014-05-15  WARN': 103,
                                          '2014-05-15 DEBUG': 106,
                                          '2014-05-16  INFO': 128,
                                          '2014-05-16  WARN': 101,
                                          '2014-05-16 DEBUG': 118
                                        }
                                      );
  });
});
