
/*
<<<<<<< HEAD
Tipue Search 5.0
Copyright (c) 2015 Tipue
=======
Tipue Search 4.0
Copyright (c) 2014 Tipue
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


(function($) {

     $.fn.tipuesearch = function(options) {

          var set = $.extend( {
<<<<<<< HEAD
          
               'show'                   : 7,
               'newWindow'              : false,
               'showURL'                : true,
               'showTitleCount'         : true,
=======

               'show'                   : 7,
               'newWindow'              : false,
               'showURL'                : true,
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
               'minimumLength'          : 3,
               'descriptiveWords'       : 25,
               'highlightTerms'         : true,
               'highlightEveryTerm'     : false,
               'mode'                   : 'static',
               'liveDescription'        : '*',
               'liveContent'            : '*',
<<<<<<< HEAD
               'contentLocation'        : 'tipuesearch/tipuesearch_content.json',
               'debug'                  : false
          
          }, options);
          
=======
               'contentLocation'        : 'tipuesearch/tipuesearch_content.json'

          }, options);

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
          return this.each(function() {

               var tipuesearch_in = {
                    pages: []
               };
               $.ajaxSetup({
                    async: false
               });
<<<<<<< HEAD
               var tipuesearch_t_c = 0;
=======
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420

               if (set.mode == 'live')
               {
                    for (var i = 0; i < tipuesearch_pages.length; i++)
                    {
<<<<<<< HEAD
                         $.get(tipuesearch_pages[i])
                              .done(function(html)
=======
                         $.get(tipuesearch_pages[i], '',
                              function (html)
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                              {
                                   var cont = $(set.liveContent, html).text();
                                   cont = cont.replace(/\s+/g, ' ');
                                   var desc = $(set.liveDescription, html).text();
                                   desc = desc.replace(/\s+/g, ' ');
<<<<<<< HEAD
                                                                      
=======

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                   var t_1 = html.toLowerCase().indexOf('<title>');
                                   var t_2 = html.toLowerCase().indexOf('</title>', t_1 + 7);
                                   if (t_1 != -1 && t_2 != -1)
                                   {
                                        var tit = html.slice(t_1 + 7, t_2);
                                   }
                                   else
                                   {
<<<<<<< HEAD
                                        var tit = tipuesearch_string_1;
                                   }

                                   tipuesearch_in.pages.push(
                                   {
                                        "title": tit,
                                        "text": desc,
                                        "tags": cont,
                                        "url": tipuesearch_pages[i] 
                                   });    
                              });
                    }
               }
               
               if (set.mode == 'json')
               {
                    $.getJSON(set.contentLocation)
                         .done(function(json)
                         {
                              tipuesearch_in = $.extend({}, json);
                         });
=======
                                        var tit = 'No title';
                                   }

                                   tipuesearch_in.pages.push({
                                        "title": tit,
                                        "text": desc,
                                        "tags": cont,
                                        "loc": tipuesearch_pages[i]
                                   });
                              }
                         );
                    }
               }

               if (set.mode == 'json')
               {
                    $.getJSON(set.contentLocation,
                         function(json)
                         {
                              tipuesearch_in = $.extend({}, json);
                         }
                    );
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
               }

               if (set.mode == 'static')
               {
                    tipuesearch_in = $.extend({}, tipuesearch);
<<<<<<< HEAD
               }                              
               
               var tipue_search_w = '';
               if (set.newWindow)
               {
                    tipue_search_w = ' target="_blank"';      
=======
               }

               var tipue_search_w = '';
               if (set.newWindow)
               {
                    tipue_search_w = ' target="_blank"';
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
               }

               function getURLP(name)
               {
                    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20')) || null;
               }
               if (getURLP('q'))
               {
                    $('#tipue_search_input').val(getURLP('q'));
                    getTipueSearch(0, true);
<<<<<<< HEAD
               }               
               
=======
               }

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
               $(this).keyup(function(event)
               {
                    if(event.keyCode == '13')
                    {
                         getTipueSearch(0, true);
                    }
               });
<<<<<<< HEAD
               
=======
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420

               function getTipueSearch(start, replace)
               {
                    $('#tipue_search_content').hide();
<<<<<<< HEAD
                    $('#tipue_search_content').html('<div class="tipue_search_spinner"><div class="tipue_search_rect1"></div><div class="tipue_search_rect2"></div><div class="rect3"></div></div>');
                    $('#tipue_search_content').show();
                    
=======
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                    var out = '';
                    var results = '';
                    var show_replace = false;
                    var show_stop = false;
                    var standard = true;
                    var c = 0;
<<<<<<< HEAD
                    found = [];
                    
                    var d = $('#tipue_search_input').val().toLowerCase();
                    d = $.trim(d);
                    
=======
                    found = new Array();

                    var d = $('#tipue_search_input').val().toLowerCase();
                    d = $.trim(d);

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                    if ((d.match("^\"") && d.match("\"$")) || (d.match("^'") && d.match("'$")))
                    {
                         standard = false;
                    }
<<<<<<< HEAD
                    
=======

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                    if (standard)
                    {
                         var d_w = d.split(' ');
                         d = '';
                         for (var i = 0; i < d_w.length; i++)
                         {
                              var a_w = true;
                              for (var f = 0; f < tipuesearch_stop_words.length; f++)
                              {
                                   if (d_w[i] == tipuesearch_stop_words[f])
                                   {
                                        a_w = false;
<<<<<<< HEAD
                                        show_stop = true;          
=======
                                        show_stop = true;
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                   }
                              }
                              if (a_w)
                              {
                                   d = d + ' ' + d_w[i];
                              }
                         }
                         d = $.trim(d);
                         d_w = d.split(' ');
                    }
                    else
                    {
                         d = d.substring(1, d.length - 1);
                    }
<<<<<<< HEAD
               
=======

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                    if (d.length >= set.minimumLength)
                    {
                         if (standard)
                         {
                              if (replace)
                              {
                                   var d_r = d;
                                   for (var i = 0; i < d_w.length; i++)
                                   {
                                        for (var f = 0; f < tipuesearch_replace.words.length; f++)
                                        {
                                             if (d_w[i] == tipuesearch_replace.words[f].word)
                                             {
                                                  d = d.replace(d_w[i], tipuesearch_replace.words[f].replace_with);
                                                  show_replace = true;
                                             }
                                        }
                                   }
                                   d_w = d.split(' ');
<<<<<<< HEAD
                              }                   
                    
=======
                              }

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                              var d_t = d;
                              for (var i = 0; i < d_w.length; i++)
                              {
                                   for (var f = 0; f < tipuesearch_stem.words.length; f++)
                                   {
                                        if (d_w[i] == tipuesearch_stem.words[f].word)
                                        {
                                             d_t = d_t + ' ' + tipuesearch_stem.words[f].stem;
                                        }
                                   }
                              }
                              d_w = d_t.split(' ');

                              for (var i = 0; i < tipuesearch_in.pages.length; i++)
                              {
<<<<<<< HEAD
                                   var score = 0;
                                   var s_t = tipuesearch_in.pages[i].text;
                                   for (var f = 0; f < d_w.length; f++)
                                   {
                                        var pat = new RegExp(d_w[f], 'gi');
                                        if (tipuesearch_in.pages[i].title.search(pat) != -1)
                                        {
                                             var m_c = tipuesearch_in.pages[i].title.match(pat).length;
                                             score += (20 * m_c);
                                        }
                                        if (tipuesearch_in.pages[i].text.search(pat) != -1)
                                        {
                                             var m_c = tipuesearch_in.pages[i].text.match(pat).length;
                                             score += (20 * m_c);
                                        }
                                        
                                        if (set.highlightTerms)
                                        {
                                             if (set.highlightEveryTerm) 
=======
                                   var score = 1000000000;
                                   var s_t = tipuesearch_in.pages[i].text;
                                   for (var f = 0; f < d_w.length; f++)
                                   {
                                        var pat = new RegExp(d_w[f], 'i');
                                        if (tipuesearch_in.pages[i].title.search(pat) != -1)
                                        {
                                             score -= (200000 - i);
                                        }
                                        if (tipuesearch_in.pages[i].text.search(pat) != -1)
                                        {
                                             score -= (150000 - i);
                                        }

                                        if (set.highlightTerms)
                                        {
                                             if (set.highlightEveryTerm)
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                             {
                                                  var patr = new RegExp('(' + d_w[f] + ')', 'gi');
                                             }
                                             else
                                             {
                                                  var patr = new RegExp('(' + d_w[f] + ')', 'i');
                                             }
                                             s_t = s_t.replace(patr, "<span class=\"h01\">$1</span>");
                                        }
<<<<<<< HEAD
                                        
                                        if (tipuesearch_in.pages[i].tags.search(pat) != -1)
                                        {
                                             var m_c = tipuesearch_in.pages[i].tags.match(pat).length;
                                             score += (10 * m_c);
                                        }

                                        if (tipuesearch_in.pages[i].url.search(pat) != -1)
                                        {
                                             score += 20;
                                        }
                                        
                                        if (score != 0)
                                        {
                                             for (var e = 0; e < tipuesearch_weight.weight.length; e++)
                                             {
                                                  if (tipuesearch_in.pages[i].url == tipuesearch_weight.weight[e].url)
                                                  {
                                                       score += tipuesearch_weight.weight[e].score;
                                                  }
                                             }
                                        }
                                        
                                        if (d_w[f].match('^-'))
=======
                                        if (tipuesearch_in.pages[i].tags.search(pat) != -1)
                                        {
                                             score -= (100000 - i);
                                        }

                                        if (d_w[f].match("^-"))
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                        {
                                             pat = new RegExp(d_w[f].substring(1), 'i');
                                             if (tipuesearch_in.pages[i].title.search(pat) != -1 || tipuesearch_in.pages[i].text.search(pat) != -1 || tipuesearch_in.pages[i].tags.search(pat) != -1)
                                             {
<<<<<<< HEAD
                                                  score = 0;     
                                             }    
                                        }
                                   }
                                   
                                   if (score != 0)
                                   {
                                        found.push(
                                        {
                                             "score": score,
                                             "title": tipuesearch_in.pages[i].title,
                                             "desc": s_t,
                                             "url": tipuesearch_in.pages[i].url 
                                        });
                                        c++;                                                                   
=======
                                                  score = 1000000000;
                                             }
                                        }
                                   }

                                   if (score < 1000000000)
                                   {
                                        found[c++] = score + '^' + tipuesearch_in.pages[i].title + '^' + s_t + '^' + tipuesearch_in.pages[i].loc;
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                   }
                              }
                         }
                         else
                         {
                              for (var i = 0; i < tipuesearch_in.pages.length; i++)
                              {
<<<<<<< HEAD
                                   var score = 0;
                                   var s_t = tipuesearch_in.pages[i].text;
                                   var pat = new RegExp(d, 'gi');
                                   if (tipuesearch_in.pages[i].title.search(pat) != -1)
                                   {
                                        var m_c = tipuesearch_in.pages[i].title.match(pat).length;
                                        score += (20 * m_c);
                                   }
                                   if (tipuesearch_in.pages[i].text.search(pat) != -1)
                                   {
                                        var m_c = tipuesearch_in.pages[i].text.match(pat).length;
                                        score += (20 * m_c);
                                   }
                                   
                                   if (set.highlightTerms)
                                   {
                                        if (set.highlightEveryTerm) 
=======
                                   var score = 1000000000;
                                   var s_t = tipuesearch_in.pages[i].text;
                                   var pat = new RegExp(d, 'i');
                                   if (tipuesearch_in.pages[i].title.search(pat) != -1)
                                   {
                                        score -= (200000 - i);
                                   }
                                   if (tipuesearch_in.pages[i].text.search(pat) != -1)
                                   {
                                        score -= (150000 - i);
                                   }

                                   if (set.highlightTerms)
                                   {
                                        if (set.highlightEveryTerm)
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                        {
                                             var patr = new RegExp('(' + d + ')', 'gi');
                                        }
                                        else
                                        {
                                             var patr = new RegExp('(' + d + ')', 'i');
                                        }
                                        s_t = s_t.replace(patr, "<span class=\"h01\">$1</span>");
                                   }
<<<<<<< HEAD
                                   
                                   if (tipuesearch_in.pages[i].tags.search(pat) != -1)
                                   {
                                        var m_c = tipuesearch_in.pages[i].tags.match(pat).length;
                                        score += (10 * m_c);
                                   }
                              
                                   if (tipuesearch_in.pages[i].url.search(pat) != -1)
                                   {
                                        score += 20;
                                   }
                                   
                                   if (score != 0)
                                   {
                                        for (var e = 0; e < tipuesearch_weight.weight.length; e++)
                                        {
                                             if (tipuesearch_in.pages[i].url == tipuesearch_weight.weight[e].url)
                                             {
                                                  score += tipuesearch_weight.weight[e].score;
                                             }
                                        }
                                   }
                              
                                   if (score != 0)
                                   {
                                        found.push(
                                        {
                                             "score": score,
                                             "title": tipuesearch_in.pages[i].title,
                                             "desc": s_t,
                                             "url": tipuesearch_in.pages[i].url
                                        });
                                        c++;                                                                  
                                   }                              
                              }
                         }                         
                         
                         if (c != 0)
                         {
                              if (set.showTitleCount && tipuesearch_t_c == 0)
                              {
                                   var title = document.title;
                                   document.title = '(' + c + ') ' + title;
                                   tipuesearch_t_c++;
                              }                         
                         
                              if (show_replace == 1)
                              {
                                   out += '<div id="tipue_search_warning">' + tipuesearch_string_2 + ' ' + d + '. ' + tipuesearch_string_3 + ' <a id="tipue_search_replaced">' + d_r + '</a></div>';
                              }
                              if (c == 1)
                              {
                                   out += '<div id="tipue_search_results_count">' + tipuesearch_string_4 + '</div>';
=======
                                   if (tipuesearch_in.pages[i].tags.search(pat) != -1)
                                   {
                                        score -= (100000 - i);
                                   }

                                   if (score < 1000000000)
                                   {
                                        found[c++] = score + '^' + tipuesearch_in.pages[i].title + '^' + s_t + '^' + tipuesearch_in.pages[i].loc;
                                   }
                              }
                         }

                         if (c != 0)
                         {
                              if (show_replace == 1)
                              {
                                   out += '<div id="tipue_search_warning_head">Showing results for ' + d + '</div>';
                                   out += '<div id="tipue_search_warning">Search instead for <a href="javascript:void(0)" id="tipue_search_replaced">' + d_r + '</a></div>';
                              }
                              if (c == 1)
                              {
                                   out += '<div id="tipue_search_results_count">1 result</div>';
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                              }
                              else
                              {
                                   c_c = c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
<<<<<<< HEAD
                                   out += '<div id="tipue_search_results_count">' + c_c + ' ' + tipuesearch_string_5 + '</div>';
                              }
                              
                              found.sort(function(a, b) { return b.score - a.score } );
                              
                              var l_o = 0;
                              for (var i = 0; i < found.length; i++)
                              {
                                   if (l_o >= start && l_o < set.show + start)
                                   {                                   
                                        out += '<div class="tipue_search_content_title"><a href="' + found[i].url + '"' + tipue_search_w + '>' +  found[i].title + '</a></div>';
 
                                        if (set.debug)
                                        {                                             
                                             out += '<div class="tipue_search_content_debug">Score: ' + found[i].score + '</div>';
                                        }
                                        
                                        if (set.showURL)
                                        {
                                             var s_u = found[i].url.toLowerCase();
                                             if(s_u.indexOf('http://') == 0)
                                             {
                                                  s_u = s_u.slice(7);
                                             }                                             
                                             out += '<div class="tipue_search_content_url"><a href="' + found[i].url + '"' + tipue_search_w + '>' + s_u + '</a></div>';
                                        }
                                        
                                        if (found[i].desc)
                                        {                                        
                                             var t = found[i].desc;
                                             var t_d = '';
                                             var t_w = t.split(' ');
                                             if (t_w.length < set.descriptiveWords)
                                             {
                                                  t_d = t;
                                             }
                                             else
                                             {
                                                  for (var f = 0; f < set.descriptiveWords; f++)
                                                  {
                                                       t_d += t_w[f] + ' '; 	
                                                  }
                                             }
                                             t_d = $.trim(t_d);
                                             if (t_d.charAt(t_d.length - 1) != '.')
                                             {
                                                  t_d += ' ...';
                                             }
                                             out += '<div class="tipue_search_content_text">' + t_d + '</div>';
                                        }
                                   }
                                   l_o++;     
                              }
                              
=======
                                   out += '<div id="tipue_search_results_count">' + c_c + ' results</div>';
                              }

                              found.sort();
                              var l_o = 0;
                              for (var i = 0; i < found.length; i++)
                              {
                                   var fo = found[i].split('^');
                                   if (l_o >= start && l_o < set.show + start)
                                   {
                                        out += '<div class="tipue_search_content_title"><a href="' + fo[3] + '"' + tipue_search_w + '>' +  fo[1] + '</a></div>';

                                        if (set.showURL)
                                        {
                                             out += '<div class="tipue_search_content_url"><a href="' + fo[3] + '"' + tipue_search_w + '>' + fo[3] + '</a></div>';
                                        }

                                        var t = fo[2];
                                        var t_d = '';
                                        var t_w = t.split(' ');
                                        if (t_w.length < set.descriptiveWords)
                                        {
                                             t_d = t;
                                        }
                                        else
                                        {
                                             for (var f = 0; f < set.descriptiveWords; f++)
                                             {
                                                  t_d += t_w[f] + ' ';
                                             }
                                        }
                                        t_d = $.trim(t_d);
                                        if (t_d.charAt(t_d.length - 1) != '.')
                                        {
                                             t_d += ' ...';
                                        }
                                        out += '<div class="tipue_search_content_text">' + t_d + '</div>';
                                   }
                                   l_o++;
                              }

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                              if (c > set.show)
                              {
                                   var pages = Math.ceil(c / set.show);
                                   var page = (start / set.show);
                                   out += '<div id="tipue_search_foot"><ul id="tipue_search_foot_boxes">';
<<<<<<< HEAD
                                   
                                   if (start > 0)
                                   {
                                       out += '<li><a class="tipue_search_foot_box" id="' + (start - set.show) + '_' + replace + '">' + tipuesearch_string_6 + '</a></li>'; 
                                   }
                                                       
=======

                                   if (start > 0)
                                   {
                                       out += '<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="' + (start - set.show) + '_' + replace + '">Prev</a></li>';
                                   }

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                   if (page <= 2)
                                   {
                                        var p_b = pages;
                                        if (pages > 3)
                                        {
                                             p_b = 3;
<<<<<<< HEAD
                                        }                    
=======
                                        }
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                        for (var f = 0; f < p_b; f++)
                                        {
                                             if (f == page)
                                             {
                                                  out += '<li class="current">' + (f + 1) + '</li>';
                                             }
                                             else
                                             {
<<<<<<< HEAD
                                                  out += '<li><a class="tipue_search_foot_box" id="' + (f * set.show) + '_' + replace + '">' + (f + 1) + '</a></li>';
=======
                                                  out += '<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="' + (f * set.show) + '_' + replace + '">' + (f + 1) + '</a></li>';
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                             }
                                        }
                                   }
                                   else
                                   {
                                        var p_b = page + 2;
                                        if (p_b > pages)
                                        {
<<<<<<< HEAD
                                             p_b = pages; 
=======
                                             p_b = pages;
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                                        }
                                        for (var f = page - 1; f < p_b; f++)
                                        {
                                             if (f == page)
                                             {
                                                  out += '<li class="current">' + (f + 1) + '</li>';
                                             }
                                             else
                                             {
<<<<<<< HEAD
                                                  out += '<li><a class="tipue_search_foot_box" id="' + (f * set.show) + '_' + replace + '">' + (f + 1) + '</a></li>';
                                             }
                                        }
                                   }                         
                                                      
                                   if (page + 1 != pages)
                                   {
                                       out += '<li><a class="tipue_search_foot_box" id="' + (start + set.show) + '_' + replace + '">' + tipuesearch_string_7 + '</a></li>'; 
                                   }                    
                                   
                                   out += '</ul></div>';
                              }                        
                         }
                         else
                         {
                              out += '<div id="tipue_search_warning">' + tipuesearch_string_8 + '</div>'; 
=======
                                                  out += '<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="' + (f * set.show) + '_' + replace + '">' + (f + 1) + '</a></li>';
                                             }
                                        }
                                   }

                                   if (page + 1 != pages)
                                   {
                                       out += '<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="' + (start + set.show) + '_' + replace + '">Next</a></li>';
                                   }

                                   out += '</ul></div>';
                              }
                         }
                         else
                         {
                              out += '<div id="tipue_search_warning_head">Nothing found</div>';
>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                         }
                    }
                    else
                    {
                         if (show_stop)
                         {
<<<<<<< HEAD
                              out += '<div id="tipue_search_warning">' + tipuesearch_string_8 + '. ' + tipuesearch_string_9 + '</div>';     
                         }
                         else
                         {
                              out += '<div id="tipue_search_warning">' + tipuesearch_string_10 + '</div>';
                              if (set.minimumLength == 1)
                              {
                                   out += '<div id="tipue_search_warning">' + tipuesearch_string_11 + '</div>';
                              }
                              else
                              {
                                   out += '<div id="tipue_search_warning">' + tipuesearch_string_12 + ' ' + set.minimumLength + ' ' + tipuesearch_string_13 + '</div>';
                              }
                         }
                    }                
                    
                    $('#tipue_search_content').hide();
                    $('#tipue_search_content').html(out);
                    $('#tipue_search_content').slideDown(200);
                    
                    $('#tipue_search_replaced').click(function()
                    {
                         getTipueSearch(0, false);
                    });                
               
=======
                              out += '<div id="tipue_search_warning_head">Nothing found</div><div id="tipue_search_warning">Common words are largely ignored</div>';
                         }
                         else
                         {
                              out += '<div id="tipue_search_warning_head">Search too short</div>';
                              if (set.minimumLength == 1)
                              {
                                   out += '<div id="tipue_search_warning">Should be one character or more</div>';
                              }
                              else
                              {
                                   out += '<div id="tipue_search_warning">Should be ' + set.minimumLength + ' characters or more</div>';
                              }
                         }
                    }

                    $('#tipue_search_content').html(out);
                    $('#tipue_search_content').slideDown(200);

                    $('#tipue_search_replaced').click(function()
                    {
                         getTipueSearch(0, false);
                    });

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
                    $('.tipue_search_foot_box').click(function()
                    {
                         var id_v = $(this).attr('id');
                         var id_a = id_v.split('_');
<<<<<<< HEAD
                    
                         getTipueSearch(parseInt(id_a[0]), id_a[1]);
                    });                                                       
               }          
          
          });
     };
   
=======

                         getTipueSearch(parseInt(id_a[0]), id_a[1]);
                    });
               }

          });
     };

>>>>>>> 6a370ec948d6d88422d00eb25fd8dd1bb567c420
})(jQuery);
