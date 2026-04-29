/*
  Basic JavaScript/JQuery
*/


// Sidenav TOC

// Add the "navparent" class if it's a parent.
function MarkParents()  {
  $("nav.toc li").has("ul").addClass("navparent");
}
// If a element is active, add "navexpand" to it and all its ascendants.
function MarkActiveTree()  {
  var br = $("nav.toc > ul li.active");
  if ( br.hasClass("navparent") )  { br.addClass("navexpand"); }
  MarkExpandParents( br );
}
// If an element is expanded, add "navexpand" to all its ascendants.
function MarkAscendantsOfExpanded()  {
  $("nav.toc > ul li.navexpand").parentsUntil("nav",".navparent").addClass("navexpand");
}
// Add "navexpand" class to all ascendants.
function MarkExpandParents( br )  {
  br.parentsUntil("nav",".navparent").addClass("navexpand");
}
// Remove "navexpand" class to all descendants.
function MarkCloseChildren( br )  {
  br.children().find(".navparent").removeClass("navexpand");
}
// Initially hide all except the first level.
// function InitHide()  {
//   $("nav.toc li").removeClass("navexpand");
// }

function MarkParentsmobile()  {
  $(".sidenav_element li").has("ul").addClass("navparent");
}
// If a element is active, add "navexpand" to it and all its ascendants.
function MarkActiveTreemobile()  {
  var br = $(".sidenav_element > ul li.active");
  if ( br.hasClass("navparent") )  { br.addClass("navexpand"); }
  MarkExpandParentsmobile( br );
}
// If an element is expanded, add "navexpand" to all its ascendants.
function MarkAscendantsOfExpandedmobile()  {
  $(".sidenav_element > ul li.navexpand").parentsUntil("nav",".navparent").addClass("navexpand");
}
// Add "navexpand" class to all ascendants.
function MarkExpandParentsmobile( br )  {
  br.parentsUntil(".sidenav_element",".navparent").addClass("navexpand");
}
// Remove "navexpand" class to all descendants.
function MarkCloseChildrenmobile( br )  {
  br.children().find(".navparent").removeClass("navexpand");
}
//scroll to the active element in the sidenav
function scrollToActiveelement() {
  var $sidenav = $('nav.toc ul'); // Target the left sidenav
  var $activeItem = $sidenav.find('li.active'); // Find the active item

  if ($activeItem.length) {
    // Calculate the middle position of the sidenav
    var sidenavHeight = $sidenav.height();
    var activeItemHeight = $activeItem.outerHeight();
    var offsetPosition = (sidenavHeight / 2) - (activeItemHeight / 2) + 100;

    // Scroll the sidenav to bring the active item to the center
    $sidenav.animate({
      scrollTop: $activeItem.offset().top - $sidenav.offset().top - offsetPosition
    }, 200);
  }
}
// Headers - MOVED TO BUILD TIME (postprocess.py: section-headers)
// Details - MOVED TO BUILD TIME (postprocess.py: details)


// Tabs
function ShowTab( clickedTab )  {
  $('.tablink').removeClass( 'active' );
  $('.tabcontent').removeClass( 'active' );

  $(clickedTab).addClass( 'active' );
  var classList = clickedTab.attr('class').split(/\s+/);
  $.each(classList, function( index, value ) {
    if ( value.startsWith( 'tabset-' ) ) {
      $('.' + value).addClass( 'active' );
    }
  });
}


// Downloadable files
function Downloadable()  {
  $('.downloadable').each( function() {
    $(this).attr("download","")
    });
}


// Dates
function YyyyMmDd()  {
  $('ph.date').innerHTML().replaceWith( new Date( this ).format( 'YYYY-MM-DD' ) )
}
function CopyrightYyyy()  {
  thisyear = new Date().getFullYear();
  $('ph.copyrightyear').text( thisyear );
}


// Modal images
function AddModalDiv()  {
  var modalelem = "<div class='modal'><image class='modal-content'/><div class='modal-caption'/></div>"
  $('.body').prepend( modalelem );
  $('.modal').hide();
}
function DisplayModal()  {
  $('img:not(.noexpand):not(.inline-icon)').on("click", function() {
    if (!$('.modal').is(':visible')) {
    $('.modal').show();
    $('.modal-content').attr( "src", this.src );
    $('.modal-caption').html( this.alt );
    }
  } );
  $('.modal-close').on("click", function()  {
    $('.modal').hide();
  } );
  $('.modal').on("click", function()  {
    if (!$(event.target).is('.modal-content')) {
      $('.modal').hide();
    }
  } );
  $(document).on("keydown", function (event) {
    if (event.keyCode === 27) {
      $('.modal').hide();
    }
  });
}

function ReleaseNotes(){
  var ReleaseData= {
    "JanuaryRelease2026": {
      "title": "January Release",
      "features": [
        {
          "category": "Agent Creator",
          "details": [
            "Introduced the MCP Client Snap Pack, which adds the capability of connecting to your MCP Server"
            ],
          "url":"https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/4350771203/January+2026+Release+Notes#AgentCreator"
        },
        {
          "category": "APIM 3.0",
          "details": [
            "GA release",
            "Tracing added for new components"
            ],
          "url":"https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/4350771203/January+2026+Release+Notes#API-Management-3.0"
        },
         {
          "category": "SnapLogic Community",
          "details": [
            "Integration Nation has moved to Slack to enhance user engagement",
            ],
          "url":"https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/4350771203/January+2026+Release+Notes#SnapLogic-Community"
        },
        {
          "category": "Monitor",
          "details": [
            "Multiple UI enhancements on the Pipeline execution and Infrastructure pages"
          ],
          "url":"https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/4350771203/January+2026+Release+Notes#Monitor"
        },
         {
          "category": "Snaps",
          "details": [
            "Enhanced the visual styling and color palette of Snap components to improve usability",
            "Added the PostgreSQL Bulk Upsert Snap and Teradata Multi Execute Snap"
          ],
          "url":"https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/4350771203/January+2026+Release+Notes#Snaps"
        },
      ]
    },
    // "FebruaryRelease2026": {
    //   "title": "February Release",
    //   "features": [
    //     {
    //       "category": "AgentCreator",
    //       "details": [
    //         "Pipeline tags enable you to label pipelines as Agent and Tools",
    //         "The ability to pass accounts downstream from APIM and OpenAI Function Generator Snaps in Agent pipelines"
    //         ],
    //       "url":"https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/4414636040/February+2026+Release+Notes#AgentCreator"
    //     },
    //     {
    //       "category": "APIM 3.0",
    //       "details": [
    //         "The Git Integration supports Service Subscriptions",
    //         ],
    //       "url":"https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/4414636040/February+2026+Release+Notes#API-Management-3.0"
    //     },
    //     {
    //       "category": "Snaps",
    //       "details": [
    //         "Added Databricks - Execute Snap",
    //         "Added HTML to PDF Converter Snap",
    //         "Added the PostgreSQL - Bulk Upsert and Teradata - Multi Execute Snaps"
    //       ],
    //       "url":"https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/4414636040/February+2026+Release+Notes#Snaps"
    //     },
    //     {
    //       "category": "User Interface",
    //       "details": [
    //         "Updated waffle menu, updated Designer, and introduction of Project Manager"
    //       ],
    //       "url":"https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/4414636040/February+2026+Release+Notes#%3AAnnounce%3A-User-Experience-Updates"
    //     }
    //   ]
    // },
  }
 
  var features = ReleaseData.JanuaryRelease2026.features;
  var container = $(".Corousel_Container");

  if (features.length === 0) {
    // container.text("No features available.");
    container.hide();
    return;
  }
 
  var visibleIndex = 0; 
  var resizeTimer;
  $(window).on('load resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        visibleCount = getVisibleCount();
        showCategories();
    }, 250); // Adjust the debounce time as needed
  });
  var visibleCount = getVisibleCount(); //number of visible containers
  
  function getVisibleCount() {
    if (window.innerWidth >= 1024) { // Desktop
        return 4;
    } else if (window.innerWidth >= 768) { // Tablet
        return 2;
    } else { // Mobile
        return 1;
    }
  }
  function showCategories() {
    container.empty();

    // Creating a container for each visible category
    var categoryContainermain = $("<div class='feature-containermain'></div>");

    for (var i = visibleIndex; i < Math.min(features.length, visibleIndex + visibleCount); i++) {
      var categoryContainer = $("<div class='feature-category-container'></div>");
      var categoryA = $("<a href='" + features[i].url + "' target='_blank'></a>");
      categoryA.append("<h2><a href='" + features[i].url + "' target='_blank'>" + features[i].category + "</a></h2>");

      var ul = $("<ul class='content'></ul>");
      for (var j = 0; j < features[i].details.length; j++) {
        ul.append("<li><a href='" + features[i].url + "' target='_blank'>" + features[i].details[j] + "</a></li>");
      }

      categoryA.append(ul);
      categoryContainer.append(categoryA);
      var learnMoreText = $("<p class='learn-more'><a href='"+features[i].url +"' target='_blank'>Learn more</a></p>");
      categoryContainer.append(learnMoreText);
      categoryContainermain.append(categoryContainer);
    }

    container.append(categoryContainermain);

    // Create a separate container for the navigation buttons
    var buttonContainer = $("<div class='button-container'></div>");
    var leftButton = $("<button class='nav-button left-button'></button>");
    var rightButton = $("<button class='nav-button right-button'></button>");

    // Create i tag for left button
    var leftIcon = $("<img class='noborder noexpand' src='https://d3132s9xzuu9s8.cloudfront.net/k/img/chevron-left-icon.svg'></img>");
    // Create i tag for right button
    var rightIcon =  $("<img class='noborder noexpand' src='https://d3132s9xzuu9s8.cloudfront.net/k/img/chevron-right-icon.svg'></img>");

    // Append i tags to buttons
    leftButton.append(leftIcon);
    rightButton.append(rightIcon);

    // Add CSS to hide the icon in left button when visibleIndex is 0
    if (visibleIndex === 0) {
      leftIcon.hide();
      leftButton.css({
        'border':'0px solid #E8EDFC',
        'box-shadow': 'none',
        'background':'none',
        'cursor':'default'
      });
    }
    // Add CSS to hide the icon in right button when all features are visible
    if (visibleIndex + visibleCount >= features.length) {
      rightIcon.hide();
      rightButton.css({
        'border':'0px solid #E8EDFC',
        'box-shadow': 'none',
        'background':'none',
        'cursor':'default'
      });
    }

    buttonContainer.append(leftButton);
    buttonContainer.append(rightButton);
    container.append(buttonContainer);
  }
  showCategories();

  container.on('click', '.left-button', function() {
    const decrementValue = window.innerWidth < 800 ? 1 : 3;
    if (visibleIndex > 0) {
        visibleIndex -= decrementValue;
        if (visibleIndex < 0) {
            visibleIndex = 0; // Ensure it doesn't go below zero
        }
        showCategories();
    }
  });

  container.on('click', '.right-button', function() {
    const incrementValue = window.innerWidth < 800 ? 1 : 3;
    if (visibleIndex + visibleCount < features.length) {
      visibleIndex += incrementValue;
      if (visibleIndex + visibleCount > features.length) {
        visibleIndex = features.length - visibleCount; // Ensure it doesn't go beyond the number of features
      }
      showCategories();
    }
  });
}

// Breadcrumbs - MOVED TO BUILD TIME (postprocess.py: breadcrumbs)

// Codeblocks - MOVED TO BUILD TIME (postprocess.py: codeblocks)
// highlight.js runtime call remains if loaded
if (window.hljs) { $(function() { hljs.highlightAll(); }); }

// Existing code for copy functionality
function CopycodeBlocks(){
  var CopiedPopup = $("<div>")
  .text("Copied to clipboard")
  .addClass("copied-popup")
  .css({
    display: "none",
    position: "fixed",
    bottom: "25px",
    left: "10px",
    backgroundColor: "var(--hdr-bgcolor)",
    color: "var(--hdr-textcolor)",
    padding: "10px",
    borderRadius: "5px",
    zIndex: "999",
  });
  $("body").append(CopiedPopup);
  $(".codeblock").each(function () {
    if (!$(this).hasClass("nocodecopy")) {
      // var Copyicon = $("<i>").attr({ class: "fa-regular fa-clone copy-icon" }).css("display", "none");
      var Copyicon = $("<img>", {
        class: "noborder copy-icon", // Add multiple classes if needed
        src: "https://d3132s9xzuu9s8.cloudfront.net/k/img/codeblock-copy-icon.svg", // URL of the image
        alt: "codeblock-copy-icon" // Alt text for accessibility
      }).css("display", "none");
      var Copytext = $("<span>").addClass("copy-text").text("copy text");
      $(this).prepend(Copyicon, Copytext);
    }
  });
  $(".copy-icon").hover(function () {
    $(this).siblings(".copy-text").css("display", "block");
  }, function () {
    $(this).siblings(".copy-text").css("display", "none");
  });
  $(".copy-icon").click(function() {
    var codeContent = $(this).siblings("code").text().trim();
    // Creating a temporary textarea element to copy the text to clipboard
    var textarea = $("<textarea>").val(codeContent).appendTo("body").select();
    // Copying content to clipboard
    document.execCommand("copy");
    textarea.remove();
    $(".copied-popup").css("display", "block !important").fadeIn(300).delay(3000).fadeOut(300);
  });
}

// Permalinks
// Permalinks - markup MOVED TO BUILD TIME (postprocess.py: permalinks)
// Runtime: only the click-to-copy and hover handlers
function AddPermalinkHandlers(){
  var PermalinkPopup = $("<div>").text("Copied to clipboard").addClass("permalink-popup")
  .css({
    display: "none",
    position: "fixed",
    bottom: "25px",
    left: "10px",
    backgroundColor: "var(--hdr-bgcolor)",
    color: "var(--hdr-textcolor)",
    padding: "10px",
    borderRadius: "5px",
    zIndex: "999",
  });
  $("body").append(PermalinkPopup);
  // Update permalink hrefs to use current page URL (for bookmarked/shared links)
  var currentURL = window.location.href.split('#')[0];
  $(".permalink").each(function() {
    var hash = this.href.split('#')[1] || '';
    $(this).attr("href", currentURL + "#" + hash);
  });
  $(".permalink img").hover(
    function() {
      $(this).closest(".permalinkmaintag").find(".permalinktext").text("Copy link to this section").css({ "opacity": 1, "visibility": "visible"});
    },
    function() {
      $(this).closest(".permalinkmaintag").find(".permalinktext").css({"opacity": "0","visibility": "hidden"});
    }
  );
  $(".permalink").click(function(event) {
    event.preventDefault();
    navigator.clipboard.writeText($(this).attr("href"));
    $(".permalink-popup").css("display", "block !important").fadeIn(300).delay(3000).fadeOut(300);
  });
}

//Bing Search Functionality
//Bing Search Functionality
let fetchedResultsArray = [];
var offset = 0;
var isFetching = false; // To prevent multiple simultaneous fetches
var searchTerm = ''; // Define searchTerm globally
const subscriptionKey = 'af30877e191d4793a70bd661ff2ebdb3';
// const customConfigId = '0d3c009b-9139-4613-906f-24518b808572';
const initialCount = 100; // Fetch 200 results initially
let displayCount = 20; // Display 20 results at a time
const market = 'en-US';
let displayedResultsArray = [];
let maxResults = 100; // Maximum number of results to fetch
let initialFetches = 1;
function ExecuteSearch(term) {
  fetchedResultsArray = [];
  displayedResultsArray = [];
  displayCount=20;
  maxResults = 100;
  offset = 0;
  isFetching = false;
  searchTerm = term; // Set searchTerm globally
  fetchResults(searchTerm, offset, 20); // Fetch 20 results initially
}


// function fetchResults(searchTerm, startIndex) {
//   if (isFetching) return;
//   isFetching = true;

//   const googleSearchEndpoint = 'https://www.googleapis.com/customsearch/v1'; // Google Custom Search API endpoint
//   const apiKey = 'AIzaSyCiI_vt8-JOOWqwQf3IBUAhb2j3qBq9ieU'; // Replace with your Google API key
//   const searchEngineId = '25d4aa9829a3148ff'; // Replace with your Search Engine ID
//   const allowedDomains = [
//     "docs.snaplogic.com",
//     "docs-snaplogic.atlassian.net/wiki",
//     "community.snaplogic.com"
//   ]; // Specify the allowed domains
//   const domainFilter = allowedDomains.map(domain => `site:${domain}`).join(" OR "); // Construct the domain filter
//   const queryWithDomainFilter = `${searchTerm} (${domainFilter})`; // Combine the search term with the domain filter

//   $.ajax({
//     url: googleSearchEndpoint,
//     method: 'GET',
//     data: {
//       key: apiKey,
//       cx: searchEngineId,
//       q: queryWithDomainFilter,
//       start: startIndex || 1, // Start index for pagination
//     },
//     success: function (data) {
//       if (data.items && data.items.length > 0) {
//         const filteredFetchedResults = filteringsearchResults(data.items, searchTerm);
//         fetchedResultsArray = fetchedResultsArray.concat(filteredFetchedResults);
//         console.log(`Fetched ${fetchedResultsArray.length} results so far`);

//         if (fetchedResultsArray.length >= initialFetches * displayCount) {
//           displayedResultsArray = fetchedResultsArray.slice(0, displayCount);
//           displayResults(displayedResultsArray, searchTerm);
//           displayResultsCount(searchTerm, displayedResultsArray.length, null, null);
//           if (displayedResultsArray.length === 0) {
//             displayNoResults();
//           }
//         }

//         if (fetchedResultsArray.length < maxResults && data.items.length > 0) {
//           isFetching = false; // Allow the next fetch
//           fetchResults(searchTerm, fetchedResultsArray.length + 1); // Fetch next batch of results
//         } else {
//           console.log("Fetched all results:", fetchedResultsArray);
//           isFetching = false;
//         }
//       } else {
//         if (fetchedResultsArray.length === 0) {
//           displayNoResults();
//         }
//         isFetching = false;
//       }
//     },
//     error: function (status, error) {
//       console.error(`Error fetching results: ${status} - ${error}`);
//       isFetching = false;
//     }
//   });
// }

function fetchResults(searchTerm, startIndex) {
  if (isFetching) return;
  isFetching = true;

  const googleSearchEndpoint = 'https://www.googleapis.com/customsearch/v1'; // Google Custom Search API endpoint
  const apiKey = 'AIzaSyCiI_vt8-JOOWqwQf3IBUAhb2j3qBq9ieU'; // Replace with your Google API key
  const searchEngineId = '25d4aa9829a3148ff';// Replace with your Search Engine ID

  $.ajax({
    url: googleSearchEndpoint,
    method: 'GET',
    data: {
      key: apiKey,
      cx: searchEngineId,
      q: searchTerm, // Use the search term directly
      start: startIndex || 1, // Start index for pagination
    },
    success: function (data) {
      if (data.items && data.items.length > 0) {
        console.log(data);
        const filteredFetchedResults = filteringsearchResults(data.items, searchTerm);
        fetchedResultsArray = fetchedResultsArray.concat(filteredFetchedResults);
        console.log(`Fetched ${fetchedResultsArray.length} results so far`);

        if (fetchedResultsArray.length >= initialFetches * displayCount) {
          displayedResultsArray = fetchedResultsArray.slice(0, displayCount);
          displayResults(displayedResultsArray, searchTerm);
          displayResultsCount(searchTerm, displayedResultsArray.length, null, null);
          if (displayedResultsArray.length === 0) {
            displayNoResults();
          }
        }

        if (fetchedResultsArray.length < maxResults && data.items.length > 0) {
          isFetching = false; // Allow the next fetch
          fetchResults(searchTerm, fetchedResultsArray.length + 1); // Fetch next batch of results
        } else {
          console.log("Fetched all results:", fetchedResultsArray);
          isFetching = false;
        }
      } else {
        if (fetchedResultsArray.length === 0) {
          displayNoResults();
        }
        isFetching = false;
      }
    },
    error: function (xhr, status, error) {
      console.error(`Error fetching results: ${xhr.responseText}, ${status}, ${error}`);
      isFetching = false;
    }
  });
}

function filteringsearchResults(fetchedResults, searchTerm) {
  // const existingNames = new Set(); // For name-based uniqueness
  const existingIds = new Set(); // For ID-based uniqueness
  const existingSnippets = new Set();
  return fetchedResults.filter(result => {
    const url = result.link;
    const name = result.name;
    const snippet = result.htmlsnippet || '';

    // Skip if URL starts with docs.snaplogic.com and doesn't end with .html
    if (url.startsWith("https://docs.snaplogic.com/") && !url.endsWith(".html")) {
      return false;
    }
    if (url.startsWith("https://docs.snaplogic.com/Chunk")) {
      return false;
    }
    if (snippet.includes("...") && ((snippet.match(/;/g) || []).length > 3)) {
      return false;
    }

    // Handle results from docs-snaplogic.atlassian.net/wiki/ (new logic)
    if (url.startsWith("https://docs-snaplogic.atlassian.net/wiki/")) {
      // Extract the first numeric ID found anywhere in the URL
      const idMatch = url.match(/\/(\d+)\//);
      const uniqueId = idMatch ? idMatch[1] : null;

      if (uniqueId && existingIds.has(uniqueId)) {
        return false; // Skip if the ID is already present
      }

      if (uniqueId) {
        existingIds.add(uniqueId); // Add the unique ID to the set
      }
        // Skip if the snippet is already present
      const snippet = result.snippet || '';
      if (snippet && existingSnippets.has(snippet)) {
        return false;
      }

      // Add the snippet to the set
      if (snippet) {
        existingSnippets.add(snippet);
      }
      return true;
    }

    // Handle results from docs-snaplogic.atlassian.net/wiki/x/ (existing logic)
    if (url.startsWith("https://docs-snaplogic.atlassian.net/wiki/x/")) {
      return false;
    }

    return true;
  });
}
function displayResults(results) {
  var Searchedresults = $("<div>").addClass("Results-component");
  for (var i = 0; i < results.length; i++) {
    var url = results[i].link;
    var name = results[i].title;
    var integrationNationIndex = name.indexOf("- SnapLogic - Integration");
    if (integrationNationIndex !== -1) {
      name = name.slice(0, integrationNationIndex).trim(); // Trim extra text after the integration  index
    }
    var documentationIndex = name.indexOf("- Confluence");
    if (documentationIndex !== -1) {
      name = name.slice(0, documentationIndex).trim(); // Trim extra text after the documentation index
    }
    // var snippet = results[i].snippet || '';
    var suffixes = [
      "- SnapLogic - Integration",
      "- SnapLogic Documentation",
      "- SnapLogic",
      "- docs.snaplogic.com",
      "- SnapLogic Documentation - Confluence",
      "- Confluence",
      "- Confluence - Atlassian",
      "- Atlassian",
      "- community.snapLogic.com",
      " ... - SnapLogic ..."
    ];
    suffixes.forEach(suffix => {
      if (name.endsWith(suffix)) {
        name = name.slice(0, -suffix.length).trim();
      }
    });
    name = name.replace(/-\s*\d+$/, '').trim();
    var Searchedresultcontentname = $("<a>").html(name).attr({'href': results[i].link, 'target': '_blank'});
    var Searchedresultheader = $("<div>").addClass("Results-name").append(Searchedresultcontentname);
    // var Searchedresultcontenturl = $("<div>").addClass("Results-url").append($("<a>").html(results[i].url).attr({'href': results[i].url, 'target': '_blank'}));
    
    var SearchedresultheaderUrl = $("<div>").addClass("Results-header-url").append(Searchedresultheader);
    var imageSrc = getImageSrcByUrl(url);
    var Searchedresultimage = $("<div>").addClass("Results-image").append($("<img>").addClass("noborder").attr("src", imageSrc));
    // Create a parent div to include both the image and the header URL
    var SearchedresultHeaderImage = $("<div>").addClass("Results-header-image").append(Searchedresultimage, SearchedresultheaderUrl);
  
    var Searchedresultcontentsnippet = $("<div>").addClass("Results-snippet").append($("<a>").html(results[i].snippet).attr({'href': results[i].link, 'target': '_blank'}));
    var SearchResultsmain_div = $("<div>").addClass("SearchResults_divmain");
    SearchResultsmain_div.append(SearchedresultHeaderImage,Searchedresultcontentsnippet);
    Searchedresults.append(SearchResultsmain_div);
  }
  $("#searched-results").empty().append(Searchedresults);
  // $("#searched-results").scrollTop(0);
  setupScrollListener(); // Add scroll listener after results are displayed
}

function getImageSrcByUrl(url) {
  if (url.includes("https://docs.snaplogic.com/")) {
    return "https://d3132s9xzuu9s8.cloudfront.net/ux/sl-logo-indigo-icon.svg";
  }else if(url.includes("https://community.snaplogic.com")){
    return "https://d3132s9xzuu9s8.cloudfront.net/k/img/community-logo-icon.svg";
  }
  else {
    return "https://d3132s9xzuu9s8.cloudfront.net/k/img/icon-legacy-site-search.svg";
  }
}

function setupScrollListener() {
  $("#searched-results").off('scroll').on('scroll', function() {
    if ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight - 50 && !isFetching) {
      if (displayedResultsArray.length < fetchedResultsArray.length) {
        displayShowMoreButton(); // Show the "Show More" button when the user scrolls to the bottom
      } else {
        hideShowMoreButton(); // Hide the button if no more results to load
      }
    }
    else{
      hideShowMoreButton();
    }
  });
}

function displayShowMoreButton() {
  if ($(".Search-filters div:first-child li input[value='All']").is(":checked")) {
    $("#show-more").show();
}else {
  $("#show-more").hide();
}
}
function hideShowMoreButton() {
  $("#show-more").hide();
}
$("#show-more").on('click', function() {
  displayCount += 20;

  displayedResultsArray = fetchedResultsArray.slice(0, displayCount);
  console.log(displayedResultsArray);
  console.log(displayCount);
  displayResults(displayedResultsArray);
  displayResultsCount(searchTerm, displayedResultsArray.length, null, null);
  // Show the button again if there are more results to display
  if (displayCount < fetchedResultsArray.length) {
    $(this).show();
  } else {
    $(this).hide();
  }

  if (displayedResultsArray.length >= maxResults - 30) {
    maxResults += 100;
    fetchResults(searchTerm, offset + displayCount, 20); // Fetch next batch of results
  }
});

function applyFilters(searchFilters, docfilters ,communityfilters) {
  console.log(searchFilters, docfilters);
  var filteredResults = filterResults(displayedResultsArray, searchFilters, docfilters,communityfilters);
  var query = $(".search-bar-advanced input[type='text']").val();
  if (filteredResults.length === 0) {
    displayNoResults(); 
  } else {
    // displayedResultsArray = filteredResults.slice(0, displayCount);
    displayResults(filteredResults);
    displayResultsCount(query, filteredResults.length, searchFilters, docfilters);
  }
}

function filterResults(results, searchFilters, docfilters,communityfilters) {
  let filteredResults = results;

  if (Array.isArray(searchFilters) && searchFilters.length > 0) {
    filteredResults = filteredResults.filter(result => {
      return searchFilters.some(filter => {
        switch (filter) {
          case "Documentation":
            return result.link.startsWith("https://docs.snaplogic.com");
          case "Confluence":
            return result.link.startsWith("https://docs-snaplogic.atlassian.net");
          case "Community":
            return result.link.startsWith("https://community.snaplogic.com");
          default:
            return true;
        }
      });
    });
  }

  if (Array.isArray(searchFilters) && searchFilters.includes("Documentation") && Array.isArray(docfilters) && docfilters.length > 0) {
    let docResults = filteredResults.filter(result => result.link.startsWith("https://docs.snaplogic.com"));
    docResults = docResults.filter(result => {
      return docfilters.some(f => result.link.startsWith(`https://docs.snaplogic.com/${f}`));
    });

    let nonDocResults = filteredResults.filter(result => !result.link.startsWith("https://docs.snaplogic.com"));
    filteredResults = [...docResults, ...nonDocResults];
  }
  if (Array.isArray(searchFilters) && searchFilters.includes("Community") && Array.isArray(communityfilters) && communityfilters.length > 0) {
    let communityResults = filteredResults.filter(result => result.link.startsWith("https://community.snaplogic.com"));
    communityResults = communityResults.filter(result => {
      return communityfilters.some(f => result.link.startsWith(`https://community.snaplogic.com/t5/${f}`));
    });

    let nonCommunityResults = filteredResults.filter(result => !result.link.startsWith("https://community.snaplogic.com"));
    filteredResults = [...communityResults, ...nonCommunityResults];
  }

  return filteredResults;
}

function displayResultsCount(query, filteredCount, searchFilters, docfilters) {
  let countText = `Showing results for "${query}"`;
  if (filteredCount === 1) {
    countText = `${filteredCount} result for "${query}"`;
  } else {
    countText = `${filteredCount} results for "${query}"`;
  }

  let filterText = "";
  const filterNames = {
    "Documentation": " in the New Documentation Site",
    "Confluence": " in Legacy Site",
    "Community": " in Integration Nation (SnapLogic Community)"
  };
  const filterNames2 = {
    "Documentation": "the New Documentation Site",
    "Confluence": "Legacy Site",
    "Community": "Integration Nation"
  };

  if (searchFilters && searchFilters.length > 0) {
    const selectedFilters = searchFilters.filter(filter => filter !== "All");
    if (selectedFilters.length > 0) {
      filterText = selectedFilters.map((filter, index) => {
        if (index === 0) {
          return filterNames[filter];
        } else {
          return filterNames2[filter];
        }
      }).join(", ");
      if (selectedFilters.length > 1) {
        const lastCommaIndex = filterText.lastIndexOf(", ");
        if (lastCommaIndex !== -1) {
          filterText = filterText.substring(0, lastCommaIndex) + " and" + filterText.substring(lastCommaIndex + 1);
        }
      }
    }
  }

  if (docfilters && docfilters.length > 0) {
    // let filter2Text = docfilters.map((value, index) => (index === 0 ? " > " : ", ") + (filter2Names[value] || value)).join(" ");
    filterText = filterText
  }

  countText += filterText;
  $(".results_count").text(countText);
}


function displayNoResults() {
  $("#searched-results").empty();
  $("#pagination").empty();
  $(".results_count").text("No results found");
}

function showPopup() {
  var popup = document.getElementById('search-popup');
  popup.style.display = 'block';
  var firstListItem = document.querySelector('.topmenu >li:first-child');
  if (firstListItem) {
    firstListItem.style.display = 'none';
  }
  $("main, footer").css('display', 'none');
  $(".site-title").show();
  $(".mainbanner a").show();
  // $(".topmenusearch").hide();
  // $(".topmenusearch li:eq(0)").hide();
  // $(".topmenusearch li:eq(1)").show();

}

function hidePopup() {
  var popup = document.getElementById('search-popup');
  popup.style.display = 'none';
  var firstListItem = document.querySelector('.topmenu > li:first-child');
  if (firstListItem) {
    firstListItem.style.display = 'block';
  }
  $("footer").css('display', 'block');
  $("main").css('display', 'grid');
  $(".site-title").show();
  $(".mainbanner a").show();
  $(".topmenusearch li:eq(1)").show();
  // $(".topmenusearch").show();
  // $(".topmenusearch li:eq(0)").show(); // Show the first item in .topmenusearch
  // $(".topmenusearch li:eq(1)").hide();
}

function showdropdown() {
  // var dropdown = document.getElementById('autosuggest-dropdown');
  // dropdown.style.display = 'none';
}

function hidedropdown() {
  // var dropdown = document.getElementById('autosuggest-dropdown');
  // dropdown.style.display = 'none';
}

function showdropdown2() {
  var dropdown = document.getElementById('autosuggest-dropdown2');
  dropdown.style.display = 'none';
}

function hidedropdown2() {
  var dropdown = document.getElementById('autosuggest-dropdown2');
  dropdown.style.display = 'none';
}

function showdropdown3() {
  var dropdown = $('.dropdown3');
  dropdown.style.display = 'none';
}

function hidedropdown3() {
  var dropdown = $('.dropdown3');
  dropdown.style.display = 'none';
}

function ExecuteAutosuggest(query){
  // var query = document.getElementById("searchQuery").value;
  var subscriptionKey = "8e902f5980e24b0fa43d00563eae816e";
  var customConfigId = "d3f3ae18-ee21-48f9-b3ab-145bb0af4897";
  var endpoint = "https://api.bing.microsoft.com/v7.0/custom/suggestions/search";
  var market = "en-US";  // Adjust the market as needed
  
  var apiUrl = `${endpoint}?q=${encodeURIComponent(query)}&customconfig=${customConfigId}&mkt=${market}`;
  fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey
      }
  })
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    if (data.errors && data.errors.length > 0 && data.errors[0].code === "NoSuggestions") {
      displayNoSuggestionsMessage();
    } else {
      displayAutosuggestions(data.suggestionGroups);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function displayAutosuggestions(suggestionGroups) {
  var containers = [".autosuggestions", "#autosuggest-dropdown2",".dropdown3"];
  containers.forEach(function(container) {
    var autosuggestDropdown = $(container).empty();
    suggestionGroups.forEach(function(group) {
      group.searchSuggestions.forEach(function(suggestion) {
        var capitalizedSuggestion = suggestion.query.charAt(0).toUpperCase() + suggestion.query.slice(1);
        var suggestionElement = $("<div>").addClass("autosuggest-item").text(capitalizedSuggestion);
        suggestionElement.on("click", function(event) {
          var selectedQuery = $(this).text();
          $("#searchQuery").val(selectedQuery);
          $(".search-bar-advanced .search-bar input").val(selectedQuery); // Update the advanced search input
          $(".landingpage_inputfield input").val(selectedQuery);
          // if(container ===".autosuggestions"){
          // hidedropdown()
          // }else if (container ==="#autosuggest-dropdown2"){
          hidedropdown2()
            // }
            // else if (container ===".dropdown3"){
          $(".dropdown3").css('display','none')
          // }
          event.preventDefault();
          ExecuteSearch(selectedQuery);
          showPopup();
          ResetSearchFilters();
        });
        autosuggestDropdown.append(suggestionElement);
      });
    });
  });
}

function displayNoSuggestionsMessage() {
  var containers = [".autosuggestions", "#autosuggest-dropdown2",".dropdown3"];
  containers.forEach(function(container) {
    var autosuggestDropdown = $(container).empty();
    var noSuggestionsMessage = $("<div>").addClass("autosuggest-item no-suggestions").text("No suggestions found");
    autosuggestDropdown.append(noSuggestionsMessage);
  });
}

function ResetSearchFilters() {
  $(".Search-filters div:first-child li input[type='checkbox']").prop("checked", false);
  $(".Search-filters div:first-child li:nth-child(2) input[type='checkbox']").prop("checked",true);
  $(".Doc-filters").hide().find("input[type='checkbox']").prop("checked", false);
  $(".community-filters").hide().find("input[type='checkbox']").prop("checked", false);
}

//Resizable-sidenav
function ResizableSidenav() {
  var resizableSidenav = $('<div class="resizable-sidenav"></div>');
  var initialIconSrc = 'https://d3132s9xzuu9s8.cloudfront.net/k/img/chevron-left-double.svg';
  var iconElement = $('<img src="' + initialIconSrc + '">');
  resizableSidenav.append(iconElement);
  $("nav.toc").append(resizableSidenav);
  var navdivelement = $('<div class="navresizerelement"></div>');
  $('nav.toc').append(navdivelement);
  var isCollapsed = false;

  function toggleCollapse() {
    var tocElement = $(".toc");
    var bodyElement = $("body");
    // var navTocWidth = $('nav.toc').width();
    if (isCollapsed) {
      resizableSidenav.animate({
        width:'100%'
      }, {
        duration: 100,
        complete: function () {
          iconElement.attr('src', 'https://d3132s9xzuu9s8.cloudfront.net/k/img/chevron-left-double.svg');
          iconElement.css('right', '8px');
          initializeResizable();
        }
      });
      tocElement.animate({
        width: '100%'
      }, 100);
      setTimeout(function () {
        bodyElement.css('transition', 'grid-template-columns 100ms ease');
        bodyElement.css('grid-template-columns', '20% 1fr 20%');
      }, 0);
    } else {
      resizableSidenav.animate({
        width: iconElement.width()
      }, {
        duration: 100,
        complete: function () {
          iconElement.attr('src', 'https://d3132s9xzuu9s8.cloudfront.net/k/img/chevron-right-double.svg');
          iconElement.css('right', '0px');
          initializeResizable();
        }
      });
      tocElement.animate({
        width: 0 
      }, 100);
      setTimeout(function () {
        bodyElement.css('transition', 'grid-template-columns 100ms ease');
        bodyElement.css('grid-template-columns', '0 1fr 20%');
      },0); 
    }

    isCollapsed = !isCollapsed;
    bodyElement.css('transition', '');
      $('.toc, .resizable-sidenav').css('transition', '');
  }

  function initializeResizable() {
    var isResizing = false;
    var initialX, initialWidth, initialNavWidth;
    initialNavWidth = $('nav.toc').width();
    var maxNavWidth = $(window).width() * 0.30;
    // var iconWidth = 30;
    $('nav.toc').on('mousedown', '.navresizerelement', function (e) {
      isResizing = true;
      initialX = e.pageX;
      initialWidth = $('nav.toc').width();
      e.preventDefault();
    });
  
    $(document).on('mousemove', function (e) {
      if (isResizing) {
        var newWidth = initialWidth + (e.pageX - initialX);
        newWidth = Math.min(Math.max(newWidth, 150), maxNavWidth);
        $('body').css('grid-template-columns', newWidth + 'px 1fr 20%');
        $('body').css('transition', '');
      }
    });
  
    $(document).on('mouseup', function () {
      if (isResizing) {
        isResizing = false;
        $('.navresizerelement').css('background-color', 'var(--nav-bgcolor)');
      }
    });
  }
  iconElement.on('click', toggleCollapse);
  initializeResizable();
}

function AddHover() {
  $('.navresizerelement').css('background', 'var(--c1-blue3)');
}

function RemoveHover() {
  $('.navresizerelement').css('background', 'var(--nav-bgcolor)');
}

//Righthand toc
function RighthandToc() {
  var SectionheadsArray = [];
  $('.sectiontitle, .detsummdivtitle, .sectiondivtitle, .glossterm').each(function(index) {
    if ($(this).hasClass('detsummdivtitle') && $(this).closest('summary').length > 0) {
      return;
    }
    if ($(this).closest('table').length === 0) {
      var className;
      if ($(this).hasClass('sectiontitle')) {
        className = 'section_' + index;
      }
      else if ($(this).hasClass('sectiondivtitle')) {
        className = 'sectiondiv_' + index;
      }
      else if ($(this).hasClass('glossterm')) {
        className = 'glossterm_' + index;
      }
      else {
        className = 'detsummdiv_' + index;
      }
      $(this).addClass(className);
      SectionheadsArray.push({ text: $(this).text(), className: className, position: $(this).offset().top });
    }
  });

  $('.relinfo strong').each(function(index) {
    var className = 'related_' + index;
    $(this).addClass(className);
    SectionheadsArray.push({ text: $(this).text(), className: className, position: $(this).offset().top });
  });

  SectionheadsArray.sort(function(a, b) {
    return a.position - b.position;
  });
  if (SectionheadsArray.length === 0) {
    $('main').append('<nav class="sidebar"></nav>');
  }
  if (SectionheadsArray.length > 0) {
    var listItems = SectionheadsArray
      .filter(function(item) {
        return !item.className.startsWith('related_');
      })
      .map(function(item) {
        return '<li data-target="' + item.className + '">' + item.text + '</li>';
      }).join('');

    $('main').append('<nav class="sidebar"><div class="sidebarhead" style="display: none;">On this page</div><div class="progress-container" style="display: none;"><ul>' + listItems + '</ul></div></nav>');
    $('main').on('click', '.sidebarhead', function() {
      $('.sidebar li').removeClass('active');
      $('main').animate({ scrollTop: 0 }, 1000);
    });
    $('main').on('click', '.sidebar li', function() {
      $('.sidebar li').removeClass('active');
      $(this).addClass('active');
      scrollToActiveItem();
      var targetClass = $(this).data('target');
      var targetElement = $('.' + targetClass);
      if (targetElement.length > 0) {
        $('main').animate({
          scrollTop: targetElement.offset().top - $('main').offset().top + $('main').scrollTop()
        }, 1000);
      }
    });

    $('main').on('scroll', function() {
      var scrollTop = $('main').scrollTop();
      var mainOffsetTop = $('main').offset().top;
      var activeSet = false;
      $('.sectiontitle, .detsummdivtitle, .sectiondivtitle, .glossterm, .relinfo strong').each(function() {
        var elementTop = $(this).offset().top - mainOffsetTop + scrollTop;
        // Adjusting the offset to 20px below the top
        if (scrollTop >= elementTop - 20 && scrollTop < elementTop + $(this).outerHeight() - 20) {
          var targetClass = $(this).attr('class').split(' ').pop();
          $('.sidebar li[data-target="' + targetClass + '"]').addClass('active');
          scrollToActiveItem();
          // Remove 'active' class from the remaining elements
          $('.sidebar li').not('[data-target="' + targetClass + '"]').removeClass('active');
          activeSet = true;
          return false;
        }
      });

      // Handle the case when the scroll reaches the end
      if (!activeSet && scrollTop + $('main').innerHeight() >= $('main')[0].scrollHeight) {
        var lastVisible = null;

        $('.sectiontitle, .detsummdivtitle, .sectiondivtitle, .glossterm, .relinfo strong').each(function() {
          var elementTop = $(this).offset().top - mainOffsetTop + scrollTop;

          if (elementTop <= scrollTop) {
            lastVisible = $(this);
          }
        });

        if (lastVisible) {
          var lastTargetClass = lastVisible.attr('class').split(' ').pop();
          $('.sidebar li').removeClass('active');
          $('.sidebar li[data-target="' + lastTargetClass + '"]').addClass('active');
        }
      }
    });
  }
}

function scrollToActiveItem() {
  var $sidebar = $('.sidebar');
  var $activeItem = $sidebar.find('li.active');

  if ($activeItem.length) {
    // Calculate the active item's position relative to the sidebar
    var activeItemTop = $activeItem.position().top;
    
    // Calculate the middle position of the sidebar
    var sidebarHeight = $sidebar.height();
    var offsetPosition = activeItemTop - (sidebarHeight / 2) + ($activeItem.outerHeight() / 2);
    
    // Scroll the sidebar to bring the active item slightly above the middle
    $sidebar.scrollTop($sidebar.scrollTop() + offsetPosition);
  }
}

function sidenavigationPopup(){
  var closeIcon = $("<img class='noborder noexpand' src='https://d3132s9xzuu9s8.cloudfront.net/k/img/cross-icon.svg' alt='cross-icon'/>");
  var closebutton = $("<div>").addClass("sidenav_closebutton").append(closeIcon);
  var sidenavDiv = $("<div>").addClass("sidenav_element").hide();
  sidenavDiv.append(closebutton);
  
  // Append <ul> item from nav.toc into sidenavDiv
  var tocList = $("nav.toc > ul").clone(); // Clone the ul element
  // var toclistul=$("<div>").append(tocList)
  sidenavDiv.append(tocList);

  // Append sidenavDiv to body
  $("body").append(sidenavDiv);
  closebutton.on('click', function() {
    sidenavDiv.hide();
    $('header').removeClass('blurred-background');
    $('main').removeClass('blurred-background');
    $('footer').removeClass('blurred-background');
  });
}

// Move Related Links to Sidebar
function MoveRelatedLinksToSidebar(){
  // Check if related-links nav exists in article
  const relatedLinksNav = $('article nav.related-links');
  if (relatedLinksNav.length > 0) {
    // Clone the content and remove existing classes for custom sidebar styling
    const relatedLinksContent = relatedLinksNav.clone();

    // Remove all classes from cloned elements to allow fresh styling
    relatedLinksContent.removeClass();
    relatedLinksContent.find('*').removeClass();

    // Wrap in a div container with sidebar-specific class
    const relatedLinksContainer = $('<div class="sidebar-related-links"></div>').append(relatedLinksContent);

    // Insert as third div container (after progress-container, before feedback-popupmain)
    const feedbackPopup = $('nav.sidebar .feedback-popupmain');
    if (feedbackPopup.length > 0) {
      feedbackPopup.before(relatedLinksContainer);
    } else {
      // If feedback popup doesn't exist, append to sidebar
      $('nav.sidebar').append(relatedLinksContainer);
    }

    // Remove from article (move, not copy)
    relatedLinksNav.remove();
  }
}

//FeedBack
function FeedBackPopup(){
  var feedbacktext= $("<div class='feedbacktext'>Was this helpful?</div>");
  // var Feedbackimages=$("<div class='feedbackicons'><span class='thumbs-up'><img class='noborder noexpand' src='https://d3132s9xzuu9s8.cloudfront.net/k/img/thumbs-up.svg' alt='thumbsup-icon'/></span><span class='thumbs-down'><img class='noborder noexpand' src='https://d3132s9xzuu9s8.cloudfront.net/k/img/thumbs-down.svg' alt='thumbsdown-icon'/></span></div>");
  var Feedbackimages=$(`<div class='feedbackicons'>
    <span class='thumbs-up-toggle'>
        <img class='thumbs-up noborder noexpand' src='https://d3132s9xzuu9s8.cloudfront.net/k/img/thumbs-up.svg' alt='thumbsup-icon'/>
        <img class='thumbs-up-fill noborder noexpand' src='https://d3132s9xzuu9s8.cloudfront.net/k/img/thumbs-up-fill-icon.svg' alt='thumbsup-fill-icon'/>
    </span>
    <span class='thumbs-down-toggle'>
        <img class='thumbs-down noborder noexpand' src='https://d3132s9xzuu9s8.cloudfront.net/k/img/thumbs-down.svg' alt='thumbsdown--icon'/>
        <img class='thumbs-down-fill noborder noexpand' src='https://d3132s9xzuu9s8.cloudfront.net/k/img/thumbs-down-fill-icon.svg' alt='thumbsdown-fill-icon'/>
    </span>
    </div>`)
  var feedbackbutton =$("<div class='feedbackbutton'>Send feedback</div>");
  var popupContainer = $("<div class='feedback-popup'></div>");
  popupContainer.append(feedbacktext,Feedbackimages,feedbackbutton)
  var PopuContainermain=$("<div class='feedback-popupmain'></div>");
  PopuContainermain.append(popupContainer)
  $("nav.sidebar").append(PopuContainermain);

  var overlay = $('<div class="feedback-overlay"></div>');
  var popupContainer = $('<div class="feedback-popup-container"></div>');
  var popupContent = `
    <div id="error_message"></div>
    <div class="close-icon">
      <img class='noborder noexpand' src="https://d3132s9xzuu9s8.cloudfront.net/k/img/Close Icon.svg"></img>
    </div>
    <form id="myform" onsubmit="">
      <div class="feedbackhdrmain"><h2 class="feedbackhdr" >Your email</h2>
       <div id="email_err_message"></div>
      </div>
        <div class="input_field">
            <input type="text" placeholder="Your email address" id="email">
        </div>
        <div class="feedbackhdrmain"><h2 class="feedbackhdr">Feedback type</h2>
        <div id="email_err_message2"></div>
        </div>
        <div class="dropdown-container">
        <div id="selected-feedback">
        <div class="selected-feedback-wrapper">
            <div class="selected-feedback-text"></div>
        </div>
        <button type="button" class="dropdown-button"><img class='noborder noexpand' src="https://d3132s9xzuu9s8.cloudfront.net/k/img/chevron-down-icon.svg"></img></button>
      </div>
      <ul class="dropdown-content">
        <li><input type="checkbox" class="feedback-option" value="Content accuracy">Content accuracy</li>
        <li><input type="checkbox" class="feedback-option" value="Missing information">Missing information</li>
        <li><input type="checkbox" class="feedback-option" value="Other suggestions">Other suggestions</li>
      </ul>
      </div>
      <div class="feedbackhdrmain"><h2 class="feedbackhdr" >Message</h2>
      <div id="email_err_message3"></div>
      </div>
      <div class="input_field">
          <textarea placeholder="Please share your suggestions..." id="yourfeedback"></textarea>
      </div>
      <div class="feedbackbtn">
          Send feedback
      </div>
    </form>
    `;
  popupContainer.html(popupContent);
  
  // Append the overlay and popup container to the body
  $('body').append(overlay).append(popupContainer);
  var popupContainer1 = $('<div class="feedback-popup-container1"></div>');
  var likecontent1 = `
    <div id="error_message2">Please select an option</div>
    <div class="feedback-header">Tell us what you liked...</div>
    <div class="feedback-options">
      <div><label><input type="radio" name="feedback" value="1">Easy to understand</label></div>
      <div><label><input type="radio" name="feedback" value="2">Solved my problem</label></div>
      <div><label><input type="radio" name="feedback" value="3">Other</label></div>
    </div>
    <div class="feedback-other hidden">
    <textarea placeholder="Please share your thoughts..."></textarea>
    </div>
    <div class="feedback-buttons">
        <button type="button" class="submit-feedback">Submit</button>
        <button type="button" class="cancel-feedback">Cancel</button>
    </div>
    `;
  popupContainer1.html(likecontent1)
  $('body').append(popupContainer1);
  var popupContainer2 = $('<div class="feedback-popup-container2"></div>');
  var likecontent2 = `
    <div class="thank-you">Thanks for your feedback!</div>
    `;
  popupContainer2.html(likecontent2)
  $('body').append(popupContainer2);
  $('.thumbs-up').click(function(){
    overlay.fadeIn()
    popupContainer1.fadeIn()
  })

  // Show the popup when the feedback button is clicked
  $('.feedbackbutton').click(function() {
    overlay.fadeIn();
    popupContainer.fadeIn();
  });
  $('.thumbs-down').click(function(){
    overlay.fadeIn()
    popupContainer.fadeIn()
  })
  $('.feedbackbtn').click(function() {
    var email = $('#email').val().trim();
    var feedbackType = [];
    $('.feedback-option:checked').each(function () {
        feedbackType.push($(this).val());
    });
    var message = $('#yourfeedback').val().trim();
    var errorMessage = '';

    // Check for empty fields and set error message accordingly
    if (email === '' && feedbackType.length === 0 && message === '') {
        errorMessage = 'Please fill out all fields.';
    } else if (email === '') {
        errorMessage = 'Please enter your email.';
    } else if (!validateEmail(email)) {
        errorMessage = 'Please enter a valid email.';
    } else if (feedbackType.length === 0) {
        errorMessage = 'Please select feedback type.';
    } else if (message === '') {
        errorMessage = 'Please share your suggestions.';
    }

    if (errorMessage) {
        $('#error_message').text(errorMessage).fadeIn().delay(2000).fadeOut();
    } else {
        popupContainer.fadeOut();
        popupContainer2.fadeIn().delay(2000).fadeOut();
        overlay.delay(2000).fadeOut();
        Sendfeedback(email, feedbackType.join(', '), message)
        setTimeout(function() {
            ResetFeedbackForm();
        }, 1000);
    }
  });
  $('.close-icon').on('click', function() {
    popupContainer.fadeOut();
      setTimeout(function() {
              ResetFeedbackForm();
          }, 1000);;
    overlay.fadeOut()
  });
  // Hide the popup when the close button is clicked
  $(document).on('click', '.close-feedback-popup-button', function() {
    popupContainer.fadeOut();
    overlay.fadeOut();
  });
  $(document).on('click', '.submit-feedback', function() {
    var selectedFeedback = $('input[name="feedback"]:checked').val();
    var otherFeedbackText = $('.feedback-other textarea').val().trim();
    // console.log(otherFeedbackText)
    if (selectedFeedback) {
        if (selectedFeedback == '3' && otherFeedbackText === '') { 
            var textarea = $('.feedback-other textarea');
            $('#error_message2').text("Please share your thoughts").fadeIn().delay(2000).fadeOut();
            textarea.css('border-color', 'red').fadeIn().delay(2000).queue(function(next) {
                $(this).css('border-color', '#6B768A');
                next();
            });

            textarea.css('color', 'red  !important').fadeIn().delay(2000).queue(function(next) {
                $(this).css('color', '#9CA7BA  !important');
                next();
            });

        } else {
            // console.log('Selected Feedback:', selectedFeedback);
            popupContainer.fadeOut();
            popupContainer1.fadeOut();
            setTimeout(function() {
              ResetFeedbackForm();
          }, 1000);
            popupContainer2.fadeIn().delay(2000).fadeOut();
            overlay.delay(2000).fadeOut()
        }
    } else {
        $('#error_message2').text("Please select an option").fadeIn().delay(2000).fadeOut();
    }
  });

  // Handle cancel button click
  $(document).on('click', '.cancel-feedback', function() {
    popupContainer1.fadeOut();
      setTimeout(function() {
              ResetFeedbackForm();
          }, 1000);;
    overlay.fadeOut();
  });

  // Hide the popup when clicking outside of it
  overlay.click(function() {
    if (popupContainer2.is(':visible')) {
      popupContainer2.fadeOut();
      ResetFeedbackForm();
      overlay.fadeOut();
    }
  });

  // Toggle dropdown visibility
  $('.dropdown-button').click(function() {
    $('.dropdown-content').toggle();
    $(this).toggleClass('rotate');
  });
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.dropdown-container').length) {
      $('.dropdown-content').hide();
      $('.dropdown-button').removeClass('rotate');
    }
  });

  $('.dropdown-content li').on('click', function(event) {
    // Prevent the click event from bubbling up if the checkbox itself is clicked
    if (event.target.tagName !== 'INPUT') {
      var checkbox = $(this).find('input[type="checkbox"]');
      checkbox.prop('checked', !checkbox.prop('checked')).trigger('change');
    }
  });
  // Handle checkbox selection
  $('.feedback-option').change(function() {
    var $checkbox = $(this);
    var value = $checkbox.val();
    var isChecked = $checkbox.is(':checked');
    if (isChecked) {
      // Create a new feedback item div
      var feedbackItem = $('<div class="feedback-item"></div>').text(value);
      // Create a remove button
      var removeButton = $('<button type="button"><img class="noborder noexpand" src="https://d3132s9xzuu9s8.cloudfront.net/k/img/Close Icon.svg"></img></button>');
      feedbackItem.append(removeButton);
      // Append the feedback item to the selected feedback text container
      $('.selected-feedback-text').append(feedbackItem);
      // Handle remove button click
      removeButton.click(function() {
        $checkbox.prop('checked', false);
        feedbackItem.remove();
      });
    } else {
      // Remove the feedback item if the checkbox is unchecked
      $('.selected-feedback-text .feedback-item').each(function() {
        if ($(this).text().trim() === value) {
          $(this).remove();
        }
      });
    }
  });
}

function ResetFeedbackForm() {
  // Clear the radio button selections
  $('input[name="feedback"]').prop('checked', false);
  
  // Clear the textarea
  $('.feedback-other').css('display','none')
  $('.feedback-other textarea').val('');
  
  // Reset the text area border and placeholder color
  $('.feedback-other textarea').css('border-color', '#6B768A');
  $('.feedback-other textarea').css('color', '#9CA7BA');
  
  // Clear any error messages
  $('#error_message2').text('');
  $('#error_message').text('');
  // Reset fields
  $('#email').val('');
  $('#yourfeedback').val('');
  $('.dropdown-content input[type="checkbox"]').prop('checked', false);
  $('.selected-feedback-text').text('');
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
function toggleScrollbar() {
  if ($('#search-popup').is(':visible')) {
      // console.log('Popup is visible. Hiding scrollbar.');
      $('html').css({
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none'
      });
      $('html').get(0).style.setProperty('--webkit-scrollbar-width', '0px');
  } else {
      // console.log('Popup is hidden. Showing scrollbar.');
      $('html').css({
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none'
      });
      $('html').get(0).style.setProperty('--webkit-scrollbar-width', '0px');
  }
}
function Sendfeedback(email,feedbacktype,message){
  var pageTitle = document.querySelector('main article h1').textContent.trim();
  var pageUrl = window.location.href;
  var data = {
    service_id: 'doc_feedback_email',
    template_id: 'template_3z5jlx8',
    user_id: 'wElANuPDPTqhH-sTe',
    template_params: {
        'from_name': email,
        'to_name': 'snaplogic',
        'feedback_type':feedbacktype,
        'pageTitle': pageTitle,
        'pageURL': pageUrl,
        'message':message
    }
  };

  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function() {
    console.log("email sent")
    // alert('Your mail is sent!');
  }).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
  });
}

//Sidenav Overflow Tool-tips
function checkOverflowAndAddTooltips() {
  $('nav.toc li a').each(function () {
    var $a = $(this);
    // Remove any existing tooltip and event handlers
    $a.off('mouseenter mouseleave mousemove'); 
    $a.siblings('.tooltip').remove();

    // Check if the text is overflowing
    var isOverflowing = $a[0].scrollWidth > Math.ceil($a[0].clientWidth);
    if (isOverflowing) {
      // Creating a tooltip element
      var tooltip = $('<div class="tooltip"></div>').text($a.text().trim());
      $a.after(tooltip); // Append the tooltip

      tooltip.css({
        display: 'none', 
        position: 'fixed',
        backgroundColor: '#FFFFFF',
        color: '#26282C',
        padding: '5px 8px',
        borderRadius: '4px',
        zIndex: 3,
        fontSize: '12px',
        fontWeight:'700',
        whiteSpace: 'nowrap', //To make sure text is in single line
        pointerEvents: 'none', // Disabling pointer events on tooltip
        letterSpacing: '0.03em',
        boxShadow: '0 4px 8px rgba(38, 40, 44, 0.3)'
      });

      // Showing and positioning the tooltip on hover
      $a.hover(
        function () {
          tooltip.css('display', 'block'); 
        },
        function () {
          tooltip.css('display', 'none'); 
        }
      );

      // Updating the tooltip position  with mouse enter
      $a.on('mouseenter', function (e) {
        tooltip.css({
          top: e.clientY - 5 + 'px', 
          left: e.clientX + 10 + 'px'
        });
      });
      //On window scroll hide the tool-tip
      $(window).on('scroll', function () {
        tooltip.css('display', 'none');
      });
      $('nav.toc ul').on('scroll', function () {
        tooltip.css('display', 'none');
      });
    }
  });
}

function handleSidenavWidthChange() {
  checkOverflowAndAddTooltips(); // Recheck overflow 
}

// removeOverviewHeadings - MOVED TO BUILD TIME (postprocess.py: overview)

function handleFeedbackPopupPlacement() {
  const feedbackPopup = $(".feedback-popupmain");

  if (window.innerWidth < 1200) {
    // Move feedback popup to the article for smaller screens
    if (!$("main > article .feedback-popupmain").length) {
      $("main > article").append(feedbackPopup);
    }
  } else {
    // Move feedback popup back to the right-hand TOC for larger screens
    if (!$("nav.sidebar .feedback-popupmain").length) {
      $("nav.sidebar").append(feedbackPopup);
    }
  }
}
// Main

$(document).ready(function() {

  CopyrightYyyy();  // copyright year
  // AddHeaders() - moved to build time (postprocess.py)
  // Details() - moved to build time (postprocess.py)
  Downloadable();  // add 'download' to downloadable links

  // Sidenav TOC
  // -- initialize --
  MarkParents();

  // POC: Add icons to top-level nav section headings
  // Defined as a named function so it can be called after swapNav
  var sectionIcons = {
    // Task view categories
    'Get Started': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2L10 6H14L11 9L12 13L8 10.5L4 13L5 9L2 6H6L8 2Z"/></svg>',
    'Administer the Environment': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="12" height="10" rx="1"/><path d="M5 7h6M5 10h4"/></svg>',
    'Develop Agents': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/></svg>',
    'Develop & Deploy Integrations': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/></svg>',
    'Manage APIs': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2h8l2 4-2 4H4L2 6l2-4z"/><path d="M5 6h6"/></svg>',
    'Monitor': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="2.5" width="13" height="9" rx="1"/><path d="M5 14h6"/><path d="M4 7l3 -2 2 3 3 -4"/></svg>',
    'Observe': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"/><circle cx="8" cy="8" r="6"/></svg>',
    'Troubleshoot': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="6" r="4.5"/><path d="M8 8v1"/><circle cx="8" cy="5" r="0.5" fill="currentColor"/><path d="M6.5 12h3l0.5 2h-4z"/></svg>',
    // Product view products
    'Admin Manager': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="12" height="10" rx="1"/><path d="M5 7h6M5 10h4"/></svg>',
    'AutoSync': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a5 5 0 019-2"/><path d="M12 6l1-3 3 1"/><path d="M13 8a5 5 0 01-9 2"/><path d="M4 10l-1 3-3-1"/></svg>',
    'Designer': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 11l7-7 3 3-7 7H2v-3z"/></svg>',
    'SnapGPT': '<svg class="nav-section-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12V4a1 1 0 011-1h8a1 1 0 011 1v5a1 1 0 01-1 1H6l-3 2z"/></svg>'
  };

  function addSectionIcons() {
    $('nav.toc > ul > li:not(.nav-view-switcher-li)').each(function() {
      var $heading = $(this).children('a, span').first();
      // Skip if icon already added
      if ($heading.find('.nav-section-icon').length) return;
      var text = $heading.text().trim();
      var icon = sectionIcons[text];
      if (icon) {
        $heading.prepend(icon + ' ');
      }
    });
  }
  // addSectionIcons() - initial call removed, icons now in static HTML
  // Function kept for swapNav compatibility (checks for existing icons)

  // POC: Mark active nav item based on current page URL
  // (DITA-OT build does not add the 'active' class automatically)
  (function() {
    var pagePath = window.location.pathname;
    $('nav.toc a[href]').each(function() {
      var linkPath = new URL(this.href, window.location).pathname;
      if (linkPath === pagePath) {
        $(this).closest('li').addClass('active');
        return false; // stop after first match
      }
    });
  })();

  // Helper function to detect if we're in product view (not task view)
  function isProductView() {
    const path = window.location.pathname;
    return (path.includes('/autosync/') || path.includes('/admin-manager/') || path.includes('/designer/') || path.includes('/snapgpt/') || path.includes('/monitor/')) && !path.includes('/tasks/');
  }

  // Check if we should skip full tree expansion
  const showFullTreeInit = sessionStorage.getItem('showFullTree');
  const showFullTaskTreeInit = sessionStorage.getItem('showFullTaskTree');
  const isTaskViewInit = window.location.pathname.includes('/tasks/');

  if (showFullTreeInit === 'true' && isProductView()) {
    // Show all products collapsed in "All Products" view
    var $activeLi = $("nav.toc > ul li.active");
    var isTopLevelProduct = $activeLi.parent().is("nav.toc > ul");
    if (!isTopLevelProduct) {
      if ($activeLi.hasClass("navparent")) {
        $activeLi.addClass("navexpand");
      }
      $activeLi.parentsUntil("nav.toc > ul", ".navparent").addClass("navexpand");
    }
  } else if (showFullTaskTreeInit === 'true' && isTaskViewInit) {
    // Show all task categories collapsed in "All Tasks" view
    var $activeLi = $("nav.toc > ul li.active");
    if ($activeLi.length) {
      if ($activeLi.hasClass("navparent")) {
        $activeLi.addClass("navexpand");
      }
      $activeLi.parentsUntil("nav.toc > ul", ".navparent").addClass("navexpand");
    }
  } else {
    MarkActiveTree();
  }
  // -- on click --
  // Handle expand/collapse for navigation items with span (task view)
  $('nav.toc li span').click( function(e) {
    item = $(this).closest('li')
    if ( item.hasClass('navparent') )  {
      e.stopPropagation(); // Prevent duplicate handlers
      item.toggleClass('navexpand');
    }
  })

  // Handle click for top-level product links: navigate AND expand
  $('nav.toc > ul > li.navparent > a').click( function(e) {
    var item = $(this).closest('li.navparent');
    item.addClass('navexpand');
    // Let the link navigate normally (no preventDefault)
  })

  // Handle expand/collapse for non-top-level navigation items with links
  $('nav.toc li li.navparent > a').click( function(e) {
    var item = $(this).closest('li.navparent');

    // Check if clicking on the arrow area or if it's the active page
    var clickedOnArrow = e.offsetX < 50;

    if (clickedOnArrow || item.hasClass('active')) {
      e.preventDefault();
      e.stopPropagation();
      item.toggleClass('navexpand');
    }
    // Otherwise, let the link navigate normally
  })

  sidenavigationPopup();
  // removeOverviewHeadings() - moved to build time (postprocess.py)
  MarkParentsmobile();
  MarkActiveTreemobile();
  scrollToActiveelement();
  // -- on click --
  // If the item clicked is <a/>, a different page is loaded.
  $('.sidenav_element  li span').click( function(e) {
    const item = $(this).closest('li'); 
    // console.log("clicked");
    if (item.hasClass('navparent')) {
      item.toggleClass('navexpand');
    }
  })

  $('.mainbanner i.hamburgericon').click(function(e){
    e.preventDefault()
    $('.sidenav_element').show()
    $('header').addClass('blurred-background');
    $('main').addClass('blurred-background');
    $('footer').addClass('blurred-background');
  })

  // Removed old handler - now using the one at line 1869 which handles both expand/collapse and navigation
  $('#index header .newsbanner').fadeIn(1000)
  $('#index header .newsbanner img').click(function(){
    $('#index header .newsbanner').animate({right: '100%', opacity: 0}, 1000, function(){
      $(this).css('display', 'none').css('right', '0').css('opacity', '1'); // Reset properties after hiding
    });
  });
  
  $('footer .newsbanner img').click(function(){
    $('footer .newsbanner').css('display', 'none')
  });
  $(".cleartext").click(function(){
    $(".search-bar-advanced .search-bar input").val("");
  });
  // Tabs
  $('.tablink').on( "click", function(e) {
    ShowTab( $(this) )
  });

  $('.footer_top li:has(img)').on('click', function(event) {
    // Check if the clicked element is the image
    if ($(event.target).is('img')) {
      // console.log('Image clicked');
      var $this = $(this);
      var $ul = $this.closest('ul');
      var $remainingLis = $ul.find('li').not(':first');

      // Toggle the visibility of the remaining <li> elements
      if ($remainingLis.is(':visible')) {
        // console.log('Hiding remaining <li> elements');
        $remainingLis.addClass('ftr-fade-out-down').one('animationend', function() {
          $(this).hide().removeClass('ftr-fade-out-down');
          $this.find('img').css('transform', 'rotate(180deg)');
        });
      } else {
        // console.log('Showing remaining <li> elements');
        $remainingLis.show().addClass('ftr-fade-in-up').one('animationend', function() {
          $(this).removeClass('ftr-fade-in-up');
          $this.find('img').css('transform', 'rotate(0deg)');
        });
      }
    }
  });
  $('.glossdef a').has('dfn').hover(
    function () {
      // On mouse enter, store the href value and remove it
      $(this).data('href', $(this).attr('href')).removeAttr('href');
    },
    function () {
      // On mouse leave, restore the href value
      $(this).attr('href', $(this).data('href'));
    }
  );
  // Left Sidenav Scroll based on Active Element
  var $activeElement = $('li.active');
  if ($activeElement.length) {
      var $parentNavElement = $activeElement.closest('li.navexpand.navparent');
      if ($parentNavElement.length) {
          $('.toc ul').animate({
              scrollTop: $parentNavElement.offset().top -90
          }, 0); //fast scroll to reduce jerkiness
      }
  }
  // Beta badges - moved to build time (postprocess.py)
  // $('.tabs>li:first-child').trigger( 'click' );
  // $('.tabs>li:first-child').click( ShowTab( $(this) ) );
  // Modal images
  AddModalDiv();
  DisplayModal();
  //Release Notes 
  ReleaseNotes();

  // Breadcrumbs - moved to build time (postprocess.py)

  // Codeblocks
  CopycodeBlocks();

  // Resizable Sidenav
  ResizableSidenav();
  $('.resizable-sidenav').hover(AddHover, RemoveHover);

  // Note icons - moved to build time (postprocess.py)
  const $navContainer = $('.toc ul');
  const $mainContainer = $('main');
  let prevNavScrollTop = 0;
  let prevMainScrollTop = 0;
  $navContainer.on('scroll', synchronizeScroll);
  $mainContainer.on('scroll', synchronizeScroll);

  function synchronizeScroll() {
    const navScrollTop = $navContainer.scrollTop();
    const mainScrollTop = $mainContainer.scrollTop();
    const scrollingUp = navScrollTop < prevNavScrollTop || mainScrollTop < prevMainScrollTop;

    prevNavScrollTop = navScrollTop;
    prevMainScrollTop = mainScrollTop;

    if (scrollingUp) {
        $('html').scrollTop($('html').scrollTop() - 10);
    }
  }

  var queryHistory = [];
  var currentQueryIndex = -1;
  document.getElementById("search-container-icon").addEventListener("click", function(event) {
    var query=document.getElementById("searchQuery").value
    event.preventDefault();
    if (query) {
      queryHistory.push(query);
      currentQueryIndex = queryHistory.length - 1;
      ExecuteSearch(query);
  }
  });
  function updatePlaceholder(inputField) {
    let query = $(inputField).val().trim(); // Get the input value and trim whitespace
  
    if (query.length > 0 && query.length <= 5) {
      query = `"${query}"`; // Wrap the query in quotation marks if it's 5 or fewer characters
      $(inputField).val(query); // Update the input field with the modified query
      $(inputField).attr("placeholder", query); // Update the placeholder with the modified query
    }
  }
  $("#searchQuery").keydown(function (event) {
    var query=$(this).val()
    if (event.which === 13) { 
        event.preventDefault();

        if (query.length > 0 && query.length <= 5) {
          query = `"${query}"`; // Wrap the query in quotation marks if it's 5 or fewer characters
          $(this).val(query); // Update the input field with the modified query
          $(this).attr("placeholder", query); // Update the placeholder with the modified query
        }

        if (query) {
          queryHistory.push(query);
          currentQueryIndex = queryHistory.length - 1;
          ExecuteSearch(query);
      }
        showPopup();
        toggleScrollbar();
    }
  });

  $("#searchQuery").on("input", function() {
    var inputValue = $(this).val().trim();
    if (inputValue.length > 0 && inputValue.length <= 5) {
      inputValue = `"${inputValue}"`;
      $(this).attr("placeholder", inputValue);
      $(".search-bar-advanced input[type='text']").val(inputValue);
    } else if (inputValue.length === 0) {
      // Reset the placeholder to its default value when input is empty
      $(this).attr("placeholder", "Search the docs");
  }
    $(".search-bar-advanced input[type='text']").val(inputValue);
    var input = $(this)[0]; 
    var start = input.selectionStart; 
    var end = input.selectionEnd; 
    var value = input.value;
    if (value.trim() !== "") {
        var firstChar = value.charAt(0).toUpperCase();
        var restOfString = value.slice(1);
        var capitalizedValue = firstChar + restOfString;
        $(this).val(capitalizedValue);
    }
    input.setSelectionRange(start, end);
  });
  $(".search-bar-advanced input[type='text']").on("input",function(){
    var inputValue = $(this).val().trim();
    // console.log(inputValue)
    if (inputValue.length > 0) {
        ExecuteAutosuggest(inputValue);
    }
    var input = $(this)[0]; 
    var start = input.selectionStart; 
    var end = input.selectionEnd; 
    var value = input.value;
    if (value.trim() !== "") {
        var firstChar = value.charAt(0).toUpperCase();
        var restOfString = value.slice(1);
        var capitalizedValue = firstChar + restOfString;
        $(this).val(capitalizedValue);
    }
    input.setSelectionRange(start, end);
  })
  $(".search-bar-advanced input[type='text']").keydown(function(event){
    var query=$(this).val()
    if (event.which === 13) { 
        event.preventDefault();
        if (query) {
          queryHistory.push(query);
          currentQueryIndex = queryHistory.length - 1;
          ExecuteSearch(query);
      }
        showPopup();
        toggleScrollbar();
        ResetSearchFilters();
    }
  })
  $(".search-bar-advanced .advance_search_button, .search-bar-advanced > div:first-child .advancedsearchicon").on("click",function(event){
    var query= $(".search-bar-advanced input[type='text']").val()
    event.preventDefault();
    if (query) {
      queryHistory.push(query);
      currentQueryIndex = queryHistory.length - 1;
      ExecuteSearch(query);
  }
    $(".Doc-filters").hide();
    ResetSearchFilters();
  })
  $('.filter-item').on('click', function(event) {
    // Prevent the click event from bubbling up if the checkbox itself is clicked
    if (event.target.tagName !== 'INPUT') {
      var checkbox = $(this).find('input[type="checkbox"]');
      checkbox.prop('checked', !checkbox.prop('checked')).trigger('change');
    }
  });
  $(".Doc-filters").hide(); 
  $(".community-filters").hide(); 
  $(".Search-filters div:first-child >li >input").on("change", function(event) {
    event.preventDefault();
    updateAllCheckbox();
    var selectedSearchFilters = $(".Search-filters div:first-child >li >input:checked").map(function() {
        return $(this).val();
    }).get();

    // Handle the "All" checkbox logic
    if ($(this).val() === "All" && $(this).is(":checked")) {
      // Uncheck all other checkboxes if "All" is selected
      $(".Search-filters div:first-child >li >input").not("[value='All']").prop("checked", false);
      selectedSearchFilters = ["All"];
  } else if ($(this).val() !== "All" && $(this).is(":checked")) {
      // Uncheck the "All" checkbox if any other checkbox is selected
      $(".Search-filters div:first-child >li input[value='All']").prop("checked", false);
      selectedSearchFilters = $(".Search-filters div:first-child >li >input:checked").map(function() {
          return $(this).val();
      }).get();
  }
    var selecteddocfilters = [];
    if (selectedSearchFilters.includes("Documentation")) {
        $(".Doc-filters").show();
        selecteddocfilters = $(".Doc-filters li input[type='checkbox']:checked").map(function() {
            return $(this).val();
        }).get();
    } else {
        $(".Doc-filters").hide().find("input[type='checkbox']").prop("checked", false);
    }
    var selectedcommunityfilters=[];
    if (selectedSearchFilters.includes("Community")) {
      $(".community-filters").show();
      selectedcommunityfilters = $(".community-filters li input[type='checkbox']:checked").map(function() {
          return $(this).val();
      }).get();
  } else {
      $(".community-filters").hide().find("input[type='checkbox']").prop("checked", false);
  }
    applyFilters(selectedSearchFilters, selecteddocfilters,selectedcommunityfilters);
});

$(".Doc-filters li input[type='checkbox'], .community-filters li input[type='checkbox']").on("change", function() {
  var selectedSearchFilters = $(".Search-filters div:first-child >li >input:checked").map(function() {
      return $(this).val();
  }).get();


  var selecteddocfilters = $(".Doc-filters li input[type='checkbox']:checked").map(function() {
      return $(this).val();
  }).get();
  var selectedcommunityfilters = $(".community-filters li input[type='checkbox']:checked").map(function() {
    return $(this).val();
}).get();

  applyFilters(selectedSearchFilters, selecteddocfilters,selectedcommunityfilters);
});
  // Handle checkbox change for doc filters
  $('input[type="checkbox"][value="Documentation"]').on('change', function() {
    var isChecked = $(this).prop('checked');
    $('.docfilterchevron').toggleClass('rotate', isChecked);

    // Show or hide the .Doc-filters based on the checkbox state
    if (isChecked) {
      $(".Doc-filters").show();
    } else {
      $(".Doc-filters").hide();
    }
  });

  // Handle checkbox change for community filters
  $('input[type="checkbox"][value="Community"]').on('change', function() {
    var isChecked = $(this).prop('checked');
    $('.communityfilterchevron').toggleClass('rotate', isChecked);

    // Show or hide the .community-filters based on the checkbox state
    if (isChecked) {
      $(".community-filters").show();
    } else {
      $(".community-filters").hide();
    }
  });

$('.docfilterchevron').on('click', function(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the li
  var checkbox = $(this).siblings('input[type="checkbox"]');
  var isChecked = !checkbox.prop('checked');
  checkbox.prop('checked',isChecked).trigger('change');
  $(this).toggleClass('rotate',isChecked);
  if (isChecked) {
    $(".Doc-filters").show();
  } else {
    $(".Doc-filters").hide();
  }
});
$('.communityfilterchevron').on('click', function(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the li
  var checkbox = $(this).siblings('input[type="checkbox"]');
  var isChecked = !checkbox.prop('checked');
  checkbox.prop('checked', isChecked).trigger('change');
  $(this).toggleClass('rotate',isChecked);
  if (isChecked) {
    $(".community-filters").show();
  } else {
    $(".community-filters").hide();
  }
});

  $("#searchQuery").on('blur', function(event) {
    event.preventDefault()
    setTimeout(function() {
        // hidedropdown();
    }, 300);
  });
  $(".search-bar-advanced input[type='text']").on('blur',function(event){
    event.preventDefault();
    setTimeout(function() {
      hidedropdown2();
    }, 300);
  })
  $(".topmenusearch li:eq(1)").click(function() {
    $(".topmenusearch li:eq(0)").show();
    $(".site-title").hide();
    $(".mainbanner a").hide();
    $(this).hide();
  });

  $(document).click(function(event) {
    if (!$(event.target).closest('.topmenusearch').length) {
      $(".topmenusearch li:eq(0)").hide();
      $(".topmenusearch li:eq(1)").show();
      $(".site-title").show();
      $(".mainbanner a").show();
    }
  });
  
  var landingPageParagraph = $('.landingpage_inputfield');
  // Create and append the input field
  var landingpagespanElement = $('<span class="landing-search"><img class="noborder noexpand" src="https://d3132s9xzuu9s8.cloudfront.net/k/img/search-icon-blue.svg" alt="searchicon"></img></span>');
  var landingpageinputField = $('<input type="text"  placeholder="Search the docs" spellcheck="false" autocomplete="off" />');
  landingPageParagraph.append(landingpagespanElement,landingpageinputField);

  $(".landingpage_content1_component1 ul li:last-child p,.landing-search ").on('click',function(e){
    e.preventDefault()
    showPopup();
    toggleScrollbar();
  })

  $(".landingpage_inputfield input[type='text']").keydown(function (event) {
    var query=$(this).val()
    if (event.which === 13) { 
        event.preventDefault();

            // Update the placeholder for the current input field
    if (query.length > 0 && query.length <= 5) {
      query = `"${query}"`; // Wrap the query in quotation marks if it's 5 or fewer characters
      $(this).val(query); // Update the input field with the modified query
      $(this).attr("placeholder", query); // Update the placeholder with the modified query
    }

    // Update the placeholder for the advanced search bar
    $(".search-bar-advanced input[type='text']").val(query);
    $(".search-bar-advanced input[type='text']").attr("placeholder", query);

        if (query) {
          queryHistory.push(query);
          currentQueryIndex = queryHistory.length - 1;
          ExecuteSearch(query);
      }
        showPopup();
        toggleScrollbar();
    }
  });
  $(".landingpage_inputfield input[type='text']").on('blur',function(event){
    event.preventDefault();
    setTimeout(function() {
      $(".dropdown3").css('display','none')
  }, 300);
  })
  $(".landingpage_inputfield input[type='text']").on('focus',function(event){
    event.preventDefault();
    $(".dropdown3").css('display','none')
  })
  $(".landingpage_inputfield input[type='text']").on("input", function() {
    
    var inputValue = $(this).val().trim();
    if (inputValue.length > 0 && inputValue.length <= 5) {
      inputValue = `"${inputValue}"`;
      $(this).attr("placeholder", inputValue);
    }else if (inputValue.length === 0) {
      // Reset the placeholder to its default value when input is empty
      $(this).attr("placeholder", "Search the docs");
    }
    $(".search-bar-advanced input[type='text']").val(inputValue);
    var input = $(this)[0]; 
    var start = input.selectionStart; 
    var end = input.selectionEnd; 
    var value = input.value;
    if (value.trim() !== "") {
        var firstChar = value.charAt(0).toUpperCase();
        var restOfString = value.slice(1);
        var capitalizedValue = firstChar + restOfString;
        $(this).val(capitalizedValue);
    }
    input.setSelectionRange(start, end);
  });

  $(".landingpage_content1_component1 ul li:last-child p,.landing-search").on("click",function(event){
    var query= $(".landingpage_inputfield input[type='text']").val()
    event.preventDefault();
    if (query) {
      queryHistory.push(query);
      currentQueryIndex = queryHistory.length - 1;
      ExecuteSearch(query);
    }
    $(".Doc-filters").hide();
    ResetSearchFilters();
  })
  // function toggleFilters() {
  //   const $overlay = $('.search-filters-overlay');
  //   $overlay.css('display', $overlay.css('display') === 'block' ? 'none' : 'block');
  // }
  $('.show-filters-button').on('click', function () {
    const $filters = $('.Search-filters');
    if ($filters.css('display') === 'none') {
      $filters.css('display', 'block'); // Show filters
    } else {
      $filters.css('display', 'none'); // Hide filters
    }
  });
  $('.close-filters-button').on('click', function () {
    $('.Search-filters').css('display', 'none'); // Hide filters
  });
  const htmlContent = `
  <div class="trending-topics">
    <ul class="tag-list">
      <li>
        <a href="https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/1438091/Array+Functions+and+Properties" target="_blank"><p>Array Functions and Properties</p></a>
        <span class="td-desc">SnapLogic array functions and properties for creating, searching, transforming, sorting, and converting arrays</span>
      </li>
      <li>
        <a href="https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/1439344/Date+Functions+and+Properties" target="_blank"><p>Date Functions and Properties</p></a>
        <span class="td-desc">SnapLogic date functions for parsing, comparing, formatting, and adjusting dates/times (including time zones)</span>
      </li>
      <li>
        <a href="https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/2614591489/HTTP+Client" target="_blank"><p>HTTP Client Snap</p></a>
        <span class="td-desc">An advanced REST Snap that enables you to send HTTP requests and receive responses.</span>
      </li>
      <li>
        <a href="https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/1438286/Mapper" target="_blank"><p>Mapper Snap</p></a>
        <span class="td-desc">The Mapper Snap evaluates an expression and writes the result to the target path.</span>
      </li>
      <li>
        <a href="https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/1438684/Pipeline+Execute"><p>Pipeline Execute</p></a>
        <span class="td-desc">The Pipeline Execute Snap executes a pipeline in a specific Snaplex with the specified parameters.</span>
      </li>
      <li>
        <a href="https://docs.snaplogic.com/public-apis/public-apis-about.html"><p>Public APIs</p></a>
        <span class="td-desc">SnapLogic Public APIs provide programmatic management for your environment and project assets.</span>
      </li>
      <li>
        <a href="https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/1439357/String+Functions+and+Properties" target="_blank"><p>String Functions and Properties</p></a>
        <span class="td-desc">SnapLogic string literals, functions, and properties for creating, searching, transforming, formatting, and validating text values.</span>
      </li>
      <li>
        <a href="https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/1438042/Understand+Expressions+in+the+SnapLogic+Platform" target="_blank"><p>Understand Expressions in the SnapLogic Platform</p></a>
        <span class="td-desc">The SnapLogic expression language is a utility that is available to Snaps.</span>
      </li>
    </ul>
  </div>`;

  $('.landingpage_content4').append(htmlContent);
  
  const tagListItems = $('.tag-list li');
  if (tagListItems.length > 8) {
    tagListItems.slice(8).hide(); // Hide items beyond the first eight
    $('.td-view-more, .td-view-less').show(); // Show the buttons if there are more than 8 items
  } else {
    $('.td-view-more, .td-view-less').hide(); // Hide the buttons if there are 8 or fewer items
  }
  $('.tag-list li').each(function() {
    if ($(this).hasClass('new')) { // Check if the <li> has the new class
      // Add the badge element
      const badge = $('<div class="td-badge"><span><img class="noborder noexpand" src="https://d3132s9xzuu9s8.cloudfront.net/k/img/3-stars-icon.svg" alt="td-badge-icon"></span><span>New</span></div>');
      $(this).css('position', 'relative'); // Ensure the parent <li> has relative positioning
      $(this).append(badge);
    }
  });

  $('.tag-list li').on('click', function (event) {
    // Prevent the default behavior if the click is on the <a> tag itself
    if (!$(event.target).is('a')) {
      const link = $(this).find('a').attr('href'); // Get the href of the <a> tag inside the <li>
      if (link) {
        // Check if the URL contains "atlassian.net" to decide the target behavior
        if (link.includes('atlassian.net')) {
          window.open(link, '_blank'); // Open in a new tab
        } else {
          window.location.href = link; // Open in the same tab
        }
      }
    }
  });
  // Show all items when the "View More" button is clicked
  $('.td-view-more, .td-view-less').on('click', function() {
    const hiddenItems = $('.tag-list li:hidden');
    if (hiddenItems.length > 0) {
      hiddenItems.show(); // Show all hidden items
      $(this).text('View less').addClass('td-view-less').removeClass('td-view-more');
    } else {
      $('.tag-list li').slice(8).hide(); // Hide items beyond the first eight
      $(this).text('View more').addClass('td-view-more').removeClass('td-view-less');
    }
  });

  $('.tag-list > li').hover(
    function() {
      //Adding the paused class
      $(this).closest('.scroller').addClass('paused');
    },
    function() {
      //Removing the Paused class
      $(this).closest('.scroller').removeClass('paused');
    }
  );

  // Left Sidenav Scroll based on Active Element
  var $activeElement = $('li.active');
  if ($activeElement.length) {
      var $parentNavElement = $activeElement.closest('li.navexpand.navparent');
      if ($parentNavElement.length) {
          $('.toc ul').animate({
              scrollTop: $parentNavElement.offset().top -70
          },0);
      }
  }

  $(document).on('change', 'input[name="feedback"]', function() {
    if ($(this).val() === '3') {
      $('.feedback-other').show();
    }else {
      $('.feedback-other').hide();
    }
  });

  $(".thumbs-up-toggle").on("click", function() {
    $(this).children(".thumbs-up, .thumbs-up-fill").toggle();
    $(".thumbs-down-fill").hide();
    $(".thumbs-down").show();
  });

  $(".thumbs-down-toggle").on("click", function() {
    $(this).children(".thumbs-down, .thumbs-down-fill").toggle();
    $(".thumbs-up-fill").hide();
    $(".thumbs-up").show();
  });

  $('.back-button').click(function() {
    if (currentQueryIndex > 0) {
        currentQueryIndex--;
        const previousQuery = queryHistory[currentQueryIndex];
        $(".search-bar-advanced input[type='text']").val(previousQuery);
        $(".landingpage_inputfield input[type='text']").val(previousQuery);
        $("#searchQuery").val(previousQuery)
        ExecuteSearch(previousQuery);
        ResetSearchFilters();
        // $(".Product-filters").hide().find("input[type='checkbox']").prop("checked", false);
    } else if (currentQueryIndex === 0) {
        currentQueryIndex =-1;
        $(".search-bar-advanced input[type='text']").val('');
        $(".landingpage_inputfield input[type='text']").val('');
        $("#searchQuery").val('')
        $(".search-bar-advanced input[type='text']").attr("placeholder", "Search the docs");
        $(".landingpage_inputfield input[type='text']").attr("placeholder", "Search the docs");
        $('#results').empty();
        hidePopup();
        toggleScrollbar();
    }
  });
  // Initial check
  toggleScrollbar();
  $('input[name="Content"]').on('change', function() {
    if ($('input[name="Content"]:checked').map(function() { return $(this).val(); }).get().includes('Confluence')) {
        $('.legacy-filters-text').show();
    } else {
        $('.legacy-filters-text').hide();
    }
    if ($('input[name="Content"]:checked').map(function() { return $(this).val(); }).get().includes('Community')) {
      $('.community-filters-text').show();
  } else {
      $('.community-filters-text').hide();
  }
});
function updateAllCheckbox() {
  var anyChecked = $(".Search-filters div:first-child >li >input").not("[value='All']").is(":checked");
  console.log(anyChecked)
  if (!anyChecked) {
    $(".Search-filters div:first-child >li >input[value='All']").prop('checked', true);
  }
}
updateAllCheckbox();
  $('.legacy-filters-text').hide();
  $('.community-filters-text').hide();
  const link = $('#dynamic-text-link');
  const link2=$('#dynamic-img-link');
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.split('/').slice(0, 4).join('/') + '/';
  // console.log(baseUrl)
  link.attr('href', baseUrl + 'index.html');
  link2.attr('href', baseUrl + 'index.html');

  $(".sphtable > tbody > tr > td:first-child > ul").each(function() {
    var lis = $(this).children('li');
    lis.hide(); // Hide all li elements
    // lis.eq(0).show(); // Show the first li
    lis.eq(2).show(); // Show the third li (index 2 because it's 0-based index)
  });

  // For td:second-child, show only the second li
  $(".sphtable > tbody > tr > td:nth-child(2) > ul").each(function() {
    var lis = $(this).children('li');
    lis.hide(); // Hide all li elements
    lis.eq(1).show(); // Show the second li (index 1 because it's 0-based index)
    lis.last().show();
  });

  // For td:third-child, show only the last li
  $(".sphtable > tbody > tr > td:nth-child(3) > ul").each(function() {
    var lis = $(this).children('li');
    lis.hide(); // Hide all li elements
    lis.last().show(); // Show the last li
  });

  // Hide the third column (th and td)
  $(".sphtable > thead > tr > th:nth-child(3)").hide();
  $(".sphtable > tbody > tr > td:nth-child(3)").hide();

  // Adjust colgroup widths
  $(".sphtable colgroup col:nth-child(3)").css("width", "65%");
  $(".sphtable colgroup col:nth-child(4)").css("width", "0%");

  function handleRelElements(relClass) {
     // Check if an element with the class 'relinfo' exists in the document
    if ($('.relinfo').length) {
      // If 'relinfo' exists, move the <ul><li> from the specified class to 'relinfo' and hide the specified class
      $('.' + relClass).each(function() {
        var listItems = $(this).find('ul > li'); // Select all <li> inside <ul> within the specified class
  
        // Prepend the <li> elements to the 'relinfo' class
        if (listItems.length) {
          if (!$('.relinfo ul').length) {
            $('.relinfo').prepend('<ul></ul>'); // Add a <ul> if it doesn't exist already
          }
          listItems.prependTo('.relinfo ul:first'); // Prepend all <li> to the first <ul> in 'relinfo'
        }
  
        // Hide the specified class element after the <li> items are moved
        $(this).hide();
      });
    } else {
      // If 'relinfo' does not exist, modify the specified class and add the 'relinfo' class
      $('.' + relClass).each(function() {
        // Add the 'relinfo' class
        $(this).addClass('relinfo');
  
        // Change the text of the <strong> tag inside this element to "Related Information"
        $(this).find('strong').text('Related information');
      });
    }
  }
  
  // Handle relconcepts if it exists
  if ($('.relconcepts').length) {
    handleRelElements('relconcepts');
  }
  
  // Handle reltasks if it exists
  if ($('.reltasks').length) {
    handleRelElements('reltasks');
  }
  
  // Handle relrefs if it exists
  if ($('.relref').length) {
    handleRelElements('relref');
  }

    // Array for storing the mappings
    let hrefMappings = [];
    $('nav.toc > ul li').each(function () {
      if ($(this).text().trim().toLowerCase() === "snap pack history") {
        const snapPackHistoryHref = $(this).children('a').attr('href');
        const parentLi = $(this).closest('ul').closest('li');
        const parentLiHref = parentLi.children('a').attr('href');
        let configHref = null, configText = null, exampleHref = null, exampleText = null;
        // Only look for direct children of the Snap Pack parent
        parentLi.children('ul').children('li').each(function () {
          const aTag = $(this).children('a');
          const childHref = aTag.attr('href');
          const childText = aTag.text();
          if (childHref && childHref.includes('config.html')) {
            configHref = childHref;
            configText = childText;
          }
          if (childHref && childHref.includes('examples.html')) {
            exampleHref = childHref;
            exampleText = childText;
          }
        });
        // Add mapping if at least two of the three exist at this parent level
        let presentCount = 0;
        if (snapPackHistoryHref) presentCount++;
        if (configHref) presentCount++;
        if (exampleHref) presentCount++;
        if (presentCount >= 2) {
          hrefMappings.push({
            parentHref: parentLiHref,
            snapPackHref: snapPackHistoryHref,
            configHref: configHref,
            configText: configText,
            exampleHref: exampleHref,
            exampleText: exampleText
          });
          // Map all internal/nested pages to this parent
          parentLi.find('ul li a').each(function () {
            const childHref = $(this).attr('href');
            hrefMappings.push({
              parentHref: childHref,
              snapPackHref: snapPackHistoryHref,
              configHref: configHref,
              configText: configText,
              exampleHref: exampleHref,
              exampleText: exampleText
            });
          });
        }
      }
    });

    // Get the current URL
    const currentUrl2 = window.location.pathname;
    // Function to extract the last three segments of a URL path
    function getLastThreeSegments(url) {
      const segments = url.split('/').filter(Boolean);
      return segments.slice(-3).join('/');
    }
    const currentUrlSegments = getLastThreeSegments(currentUrl2);
    hrefMappings.forEach(function (mapping) {
      // Get the last three segments of the parentHref
      const parentHrefSegments = getLastThreeSegments(mapping.parentHref);
      // Compare the last three segments
      if (
        currentUrlSegments === parentHrefSegments &&
        !parentHrefSegments.includes('sp-examples.html') &&
        !parentHrefSegments.includes('config.html') &&
        !parentHrefSegments.includes('sp-history.html')
      ) {
        // Show only if at least two links exist at this parent level
        let links = '';
        let linkCount = 0;
        if (mapping.configHref && mapping.configText) {
          links += `<li class="linklist"><a href="${mapping.configHref}">${mapping.configText}</a></li>`;
          linkCount++;
        }
        if (mapping.exampleHref && mapping.exampleText) {
          links += `<li class="linklist"><a href="${mapping.exampleHref}">${mapping.exampleText}</a></li>`;
          linkCount++;
        }
        if (mapping.snapPackHref) {
          links += `<li class="linklist"><a href="${mapping.snapPackHref}">Snap Pack history</a></li>`;
          linkCount++;
        }
        if (linkCount < 2) return; // Don't show unless at least two links
        // Checking if the navlink already exists or not
        const relatedLinksNav = $('article nav.related-links');
        if (relatedLinksNav.length > 0) {
          // Check if the nav has any child elements
          let linkListUl = relatedLinksNav.find('ul.linklist');
          if (linkListUl.length > 0) {
            // If <ul class="link-list"> exists, append the link to it
            linkListUl.append(links);
          } else if (relatedLinksNav.children().length === 0) {
            // If <nav> exists but has no children, create and append the structure
            const divStructure = `
              <div class="linklist relinfo">
                  <strong>Related information</strong>
                  <br>
                  <ul class="linklist">
                      ${links}
                  </ul>
              </div>
            `;
            relatedLinksNav.append(divStructure);
          } else {
            linkListUl.append(links);
          }
        } else {
          // If it doesn't exist, create the structure
          const navStructure = `
            <nav role="navigation" class="related-links">
                <div class="linklist relinfo">
                    <strong>Related information</strong>
                    <br>
                    <ul class="linklist">
                        ${links}
                    </ul>
                </div>
            </nav>
          `;
          const feedbackPopup = $('article .feedback-popupmain');
          if (feedbackPopup.length > 0) {
            // Append the nav structure before the feedback-popupmain element
            $(navStructure).insertBefore(feedbackPopup);
          } else {
            // If feedback-popupmain is not found, just append it to the article
            $('article').append(navStructure);
          }
        }
      }
    });

  function isAbbreviation(word) {
    // Check if the word is fully capitalized and has more than one letter (likely an abbreviation)
    return word === word.toUpperCase() && word.length > 1;
  }

  var listItems = $('.relinfo > ul.linklist > li');

  // Sort the <li> elements based on their text content
  listItems.sort(function(a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  // Append the sorted <li> elements back into the <ul>
  $('.relinfo > ul.linklist').empty().append(listItems);

  // Right hand navigation
  RighthandToc();
  scrollToActiveItem()

  // Permalinks
  AddPermalinkHandlers();  // permalink markup now in static HTML

  //FeedBackPopup
  FeedBackPopup();

  // Move Related Links to Sidebar
  MoveRelatedLinksToSidebar();

  $('.feedback-popup-container .input_field input[type="text"], .feedback-popup-container textarea').on('input', function() {
    if ($(this).val().trim() !== '') {
      $(this).addClass('has-content');
    } else {
      $(this).removeClass('has-content');
    }
  });
  handleFeedbackPopupPlacement();

// Add a resize event listener to handle window resizing
$(window).on("resize", function () {
  handleFeedbackPopupPlacement();
});
  checkOverflowAndAddTooltips();
  const sidenav = document.querySelector('nav.toc >ul');
  if (sidenav) {
    const resizeObserver = new ResizeObserver(handleSidenavWidthChange);
    resizeObserver.observe(sidenav);
  } 

  $('a:has(.term)').each(function () {
    var $a = $(this); // Store reference to the <a> tag
    $a.css('text-decoration', 'none');
    $a.on('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior
    });
  });
  const emptydiv="<div class='nav_emptyspace'></div>"
  $('nav.toc').append(emptydiv)

  // $('.search-icon-hdr').on('click', function() {
  //   $('.search-popup-hdr').css('display', 'block').animate({ right: '20' }, 200);
  //   $('.search-icon-hdr').css('display', 'none');
  // });

  // Close the search popup with fade-out effect
  // $('.close-search-popup').on('click', function() {
  //   $('.search-popup-hdr').animate({ right: '20' }, 200, function() {
  //     $(this).css('display', 'none');
  //     $('.search-icon-hdr').css('display', 'block');
  //   });
  // });

  $("#searchQuery").on("blur", function () {
    let query = $(this).val().trim(); // Get the input value and trim whitespace

    if (query.length > 0 && query.length <= 5) {
      query = `"${query}"`; // Wrap the query in quotation marks if it's 5 or fewer characters
      $(this).val(query); // Update the input field with the modified query
      $(this).attr("placeholder", query);
    }

    // Perform the search or pass the query to the search function
    console.log("Search Query:", query);
    // Add your search logic here, e.g., send the query to the server or update the UI
  });

  //stage header link fixes code
  const curUrl = window.location.href;
  if (curUrl.startsWith("https://d14w8g1erguuat.cloudfront.net/")){
    // Select the header and footer links pointing to "/index.html"
    const headerLink = $(".mainbanner a[href='/index.html']");
    const footerLink = $(".footer a[href='/index.html']");

    // Extract the branch or base path dynamically
    const basePath = curUrl.split('/').slice(0, 4).join('/'); // Get the first 5 segments of the URL

    // Update the header and footer links to point to the correct index.html
    if (headerLink.length) {
      headerLink.attr("href", `${basePath}/index.html`);
    }
    if (footerLink.length) {
      footerLink.attr("href", `${basePath}/index.html`);
    }

    // Prevent navigation if already on the index.html page
    if (curUrl.endsWith("/index.html")) {
      // Clear nav state so navigating from homepage starts fresh
      sessionStorage.removeItem('activeNav');
      sessionStorage.removeItem('showFullTree');
      sessionStorage.removeItem('showFullTaskTree');
      sessionStorage.removeItem('filteredProduct');

      if (headerLink.length) {
        headerLink.on("click", function (event) {
          event.preventDefault();
        });
      }
      if (footerLink.length) {
        footerLink.on("click", function (event) {
          event.preventDefault();
        });
      }
    }
  }

  // POC: Dual Navigation - Dropdown click handlers
  $('.product-menu-header .dropdown').each(function() {
    const $dropdown = $(this);
    const $toggle = $dropdown.find('.dropdown-toggle');

    $toggle.on('click', function(event) {
      event.stopPropagation();

      // Close other dropdowns
      $('.product-menu-header .dropdown').not($dropdown).removeClass('open');

      // Toggle this dropdown
      $dropdown.toggleClass('open');
    });
  });

  // Close dropdowns when clicking outside
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.product-menu-header .dropdown').length) {
      $('.product-menu-header .dropdown').removeClass('open');
    }
  });

  // Highlight active navigation based on current page
  const currentPath = window.location.pathname;

  // Helper to detect product view (not task view)
  const isInProductView = (currentPath.includes('/autosync/') || currentPath.includes('/admin-manager/') || currentPath.includes('/designer/') || currentPath.includes('/snapgpt/') || currentPath.includes('/monitor/')) && !currentPath.includes('/tasks/');

  // Highlight the category dropdown when viewing a product page
  if (isInProductView) {
    // Check if we're on an AutoSync page
    if (currentPath.includes('/autosync/')) {
      $('.product-menu-header .dropdown').each(function() {
        const $dropdown = $(this);
        const $toggle = $dropdown.find('.dropdown-toggle');

        if ($toggle.text().includes('Integration Platform')) {
          $dropdown.addClass('active');
          $dropdown.find('.dropdown-menu a').each(function() {
            if ($(this).text().includes('AutoSync')) {
              $(this).addClass('active');
            }
          });
        }
      });
    }

    // Check if we're on an Admin Manager page
    if (currentPath.includes('/admin-manager/')) {
      $('.product-menu-header .dropdown').each(function() {
        const $dropdown = $(this);
        const $toggle = $dropdown.find('.dropdown-toggle');

        if ($toggle.text().includes('Administration')) {
          $dropdown.addClass('active');
          $dropdown.find('.dropdown-menu a').each(function() {
            if ($(this).text().includes('Admin Manager')) {
              $(this).addClass('active');
            }
          });
        }
      });
    }

    // Check if we're on a Designer page
    if (currentPath.includes('/designer/')) {
      $('.product-menu-header .dropdown').each(function() {
        const $dropdown = $(this);
        const $toggle = $dropdown.find('.dropdown-toggle');

        if ($toggle.text().includes('Integration Platform')) {
          $dropdown.addClass('active');
          $dropdown.find('.dropdown-menu a').each(function() {
            if ($(this).text().includes('Designer')) {
              $(this).addClass('active');
            }
          });
        }
      });
    }

    // Check if we're on a SnapGPT page
    if (currentPath.includes('/snapgpt/')) {
      $('.product-menu-header .dropdown').each(function() {
        const $dropdown = $(this);
        const $toggle = $dropdown.find('.dropdown-toggle');

        if ($toggle.text().includes('Integration Platform')) {
          $dropdown.addClass('active');
          $dropdown.find('.dropdown-menu a').each(function() {
            if ($(this).text().includes('SnapGPT')) {
              $(this).addClass('active');
            }
          });
        }
      });
    }
  }

  // POC: Add View Switcher to Left Nav
  const $toc = $('nav.toc');
  if ($toc.length > 0) {
    // Determine current view
    const isTaskView = currentPath.includes('/tasks/');
    const isProductView = (currentPath.includes('/autosync/') || currentPath.includes('/admin-manager/') || currentPath.includes('/designer/') || currentPath.includes('/snapgpt/') || currentPath.includes('/monitor/')) && !currentPath.includes('/tasks/');

    // Add class to nav for CSS styling
    if (isTaskView) {
      $toc.addClass('task-view');
    } else if (isProductView) {
      $toc.addClass('product-view');
    }

    // Determine which switcher link should be active based on what was last clicked
    const activeNav = sessionStorage.getItem('activeNav');
    const isOnProductsLanding = currentPath.includes('/products-about.html');
    const isOnTasksLanding = currentPath.includes('/tasks-about.html');
    const isShowingAllProducts = isOnProductsLanding && activeNav === 'products';
    const isShowingAllTasks = isOnTasksLanding && activeNav === 'tasks';

    // Get appropriate URL based on current location
    let productUrl = '/autosync/autosync-home.html';
    let taskUrl = '/tasks/admin-manager/create-user-account.html'; // Default task entry point

    if (currentPath.includes('/autosync/')) {
      productUrl = '/autosync/autosync-home.html';
      taskUrl = '/tasks/autosync/create-data-pipeline.html';
    } else if (currentPath.includes('/admin-manager/')) {
      productUrl = '/admin-manager/admin-manager-home.html';
      taskUrl = '/tasks/admin-manager/create-user-account.html';
    } else if (currentPath.includes('/monitor/')) {
      productUrl = '/monitor/monitor-home.html';
      taskUrl = '/tasks/admin-manager/create-user-account.html';
    } else if (currentPath.includes('/designer/')) {
      productUrl = '/designer/designer-home.html';
      taskUrl = '/tasks/admin-manager/create-user-account.html';
    } else if (currentPath.includes('/snapgpt/')) {
      productUrl = '/snapgpt/snapgpt-home.html';
      taskUrl = '/tasks/snapgpt/snapgpt-pipe-gen-rag.html';
    }

    // Create view switcher HTML
    // SVG icons: package (products) and checkmark (tasks)
    const iconProducts = '<svg class="nav-view-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 1L1.5 4.5V11.5L8 15L14.5 11.5V4.5L8 1Z"/><path d="M8 8L14.5 4.5"/><path d="M8 8L1.5 4.5"/><path d="M8 8V15"/></svg>';
    const iconTasks = '<svg class="nav-view-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5L6.5 12L13 4"/></svg>';

    // Determine initial button states based on sessionStorage
    const productsIsLabel = isShowingAllProducts;
    const tasksIsLabel = isShowingAllTasks;

    const productsText = productsIsLabel ? 'Choose a product' : 'Show all products';
    const tasksText = tasksIsLabel ? 'Choose a task' : 'Show all tasks';
    const productsClass = productsIsLabel ? 'active' : '';
    const tasksClass = tasksIsLabel ? 'active' : '';

    // Determine the "Viewing:" context label — product name or task category
    var $activeNavItem = $toc.find('li.active');
    var $topItem = $activeNavItem.closest('nav.toc > ul > li');
    var viewingName = '';
    if ($topItem.length) {
      // Get the text of the top-level item (strip SVG icon text)
      var $topLink = $topItem.children('a, span').first();
      viewingName = $topLink.text().trim();
    }
    var viewingHtml = viewingName && !isShowingAllProducts && !isShowingAllTasks
      ? '<div class="nav-viewing-label">Viewing: <strong>' + viewingName + '</strong></div>'
      : '';

    const viewSwitcherHtml = `
      <div class="nav-view-switcher">
        ${viewingHtml}
        <div class="nav-view-buttons">
          <a href="#" class="nav-view-link nav-view-button-products ${productsClass}">${iconProducts} <span class="nav-view-text">${productsText}</span></a>
          <span class="nav-view-separator">|</span>
          <a href="#" class="nav-view-link nav-view-button-tasks ${tasksClass}">${iconTasks} <span class="nav-view-text">${tasksText}</span></a>
        </div>
      </div>
    `;

    // Insert as first <li> inside the scrollable <ul>
    $toc.find('> ul').prepend('<li class="nav-view-switcher-li">' + viewSwitcherHtml + '</li>');

    // Helper: fetch nav from another page and swap it into the current nav
    function swapNav(sourceUrl, callback) {
      $.get(sourceUrl, function(html) {
        var $parsed = $('<div>').html(html);
        var $newNav = $parsed.find('nav.toc');
        if ($newNav.length) {
          // Fix relative hrefs: resolve them against the source URL
          var sourceBase = sourceUrl.substring(0, sourceUrl.lastIndexOf('/') + 1);
          $newNav.find('a[href]').each(function() {
            var href = $(this).attr('href');
            if (href && !href.startsWith('/') && !href.startsWith('http')) {
              // Resolve relative path against source page's directory
              var resolved = new URL(href, window.location.origin + sourceBase).pathname;
              $(this).attr('href', resolved);
            }
          });
          // Preserve the view switcher li, replace everything else
          var $switcherLi = $('nav.toc .nav-view-switcher-li').detach();
          $('nav.toc').html($newNav.html());
          $('nav.toc > ul').prepend($switcherLi);
          // Reinitialize nav classes
          MarkParents();
          if (callback) callback();
        }
      });
    }

    // Helper: update switcher button states (text + active class)
    function updateSwitcherState(productsActive, tasksActive) {
      var $prodBtn = $('.nav-view-button-products');
      var $taskBtn = $('.nav-view-button-tasks');

      if (productsActive) {
        $prodBtn.addClass('active').find('.nav-view-text').text('Choose a product');
      } else {
        $prodBtn.removeClass('active').find('.nav-view-text').text('Show all products');
      }

      if (tasksActive) {
        $taskBtn.addClass('active').find('.nav-view-text').text('Choose a task');
      } else {
        $taskBtn.removeClass('active').find('.nav-view-text').text('Show all tasks');
      }
    }

    // Clear activeNav and full-tree flags when user clicks a regular nav link (not the switcher)
    // Landing pages (*-about, *-home) keep the expanded view; other topics collapse to their map
    $(document).on('click', 'nav.toc a:not(.nav-view-link)', function() {
      var href = $(this).attr('href') || '';
      var isLandingPage = href.match(/-about\.html/) || href.match(/-home\.html/);
      if (!isLandingPage) {
        sessionStorage.removeItem('activeNav');
        sessionStorage.removeItem('showFullTree');
        sessionStorage.removeItem('showFullTaskTree');
        updateSwitcherState(false, false);
      }
    });

    // Helper to rebind nav item click handlers after a swapNav
    function rebindNavHandlers() {
      $('nav.toc li span').off('click').on('click', function(ev) {
        var item = $(this).closest('li');
        if (item.hasClass('navparent')) {
          ev.stopPropagation();
          item.toggleClass('navexpand');
        }
      });
      $('nav.toc > ul > li.navparent > a').off('click').on('click', function(ev) {
        $(this).closest('li.navparent').addClass('navexpand');
      });
      $('nav.toc li li.navparent > a').off('click').on('click', function(ev) {
        var item = $(this).closest('li.navparent');
        var clickedOnArrow = ev.offsetX < 50;
        if (clickedOnArrow || item.hasClass('active')) {
          ev.preventDefault();
          ev.stopPropagation();
          item.toggleClass('navexpand');
        }
      });
    }

    // Handle "Show all products" click — navigate to All Products landing page
    $(document).on('click', '.nav-view-button-products', function(e) {
      e.preventDefault();
      if ($(this).hasClass('active')) return;

      sessionStorage.setItem('showFullTree', 'true');
      sessionStorage.setItem('activeNav', 'products');
      sessionStorage.removeItem('filteredProduct');

      // Navigate to All Products landing page
      // Derive base path from the header logo link (always points to site root index.html)
      var logoHref = $('a.header-logo-link').attr('href') || '../index.html';
      var basePrefix = logoHref.replace('index.html', '');
      window.location.href = basePrefix + 'products-about.html';
    });

    // Handle "Show all tasks" click — navigate to All Tasks landing page
    $(document).on('click', '.nav-view-button-tasks', function(e) {
      e.preventDefault();
      if ($(this).hasClass('active')) return;

      sessionStorage.setItem('showFullTaskTree', 'true');
      sessionStorage.setItem('activeNav', 'tasks');
      sessionStorage.removeItem('filteredTaskSection');
      sessionStorage.removeItem('filteredTaskCategory');

      // Navigate to All Tasks landing page
      var logoHref = $('a.header-logo-link').attr('href') || '../index.html';
      var basePrefix = logoHref.replace('index.html', '');
      window.location.href = basePrefix + 'tasks/tasks/tasks-about.html';
    });

  // POC: Filter left navigation based on dropdown selection
  $('.product-menu-header .dropdown-menu a').on('click', function(e) {
    const clickedHref = $(this).attr('href');
    const clickedProduct = $(this).text().trim().toUpperCase();

    // Store the currently filtered product for later use
    sessionStorage.setItem('filteredProduct', clickedProduct);
    // Clear showFullTree flag so dropdown will be highlighted
    sessionStorage.removeItem('showFullTree');
    // Clear activeNav so neither switcher link shows as active
    sessionStorage.removeItem('activeNav');

    // Don't prevent default navigation
    // The filtering will happen on the target page
  });

  // POC: Apply navigation logic on page load
  const filteredProduct = sessionStorage.getItem('filteredProduct');
  const showFullTree = sessionStorage.getItem('showFullTree');

  // Check if we're in product view (autosync or admin-manager or snapgpt or monitor, but not tasks)
  const isInProductViewForNav = (currentPath.includes('/autosync/') || currentPath.includes('/admin-manager/') || currentPath.includes('/designer/') || currentPath.includes('/snapgpt/') || currentPath.includes('/monitor/')) && !currentPath.includes('/tasks/');

  if (isInProductViewForNav) {
    if (filteredProduct) {
      // User has selected a product from dropdown - show filtered view
      let selectedProductLi = null;

      // First pass: find and isolate the selected product
      $('nav.toc > ul > li:not(.nav-view-switcher-li)').each(function() {
        const $li = $(this);

        // Check if this li has a direct child link (product level)
        const $productLink = $li.children('a').first();
        const productName = $productLink.text().trim().toUpperCase();

        if ((filteredProduct === 'ADMIN MANAGER' && productName === 'ADMIN MANAGER') ||
            (filteredProduct === 'AUTOSYNC' && productName === 'AUTOSYNC') ||
            (filteredProduct === 'DESIGNER' && productName === 'DESIGNER') ||
            (filteredProduct === 'SNAPGPT' && productName === 'SNAPGPT') ||
            (filteredProduct === 'MONITOR' && productName === 'MONITOR')) {
          // Found the selected product
          selectedProductLi = $li;
        } else if ($productLink.length > 0) {
          // This is a different product - hide it completely
          $li.hide();
        }
      });

      // After filtering, reinitialize the navigation classes and expand the product
      if (selectedProductLi) {
        // Ensure navparent classes are correct
        selectedProductLi.find("li").has("ul").addClass("navparent");
        // Expand the product so first-level categories are visible
        selectedProductLi.addClass('navexpand');
        console.log('Product filtered, navexpand added to:', selectedProductLi.children('a').first().text());

        // The existing click handlers will work for the filtered view
        // No need to add additional handlers - they're already bound to 'nav.toc li span'
      }
    } else if (showFullTree === 'true') {
      // User clicked "Products & Features" - show full tree (expansion handled in init)
      $('nav.toc > ul > li:not(.nav-view-switcher-li)').show();
    } else {
      // Default: auto-filter to show only the product matching the current page
      var $activeProductItem = $('nav.toc li.active');
      if ($activeProductItem.length) {
        var $topProductLi = $activeProductItem.closest('nav.toc > ul > li');
        if ($topProductLi.length) {
          $('nav.toc > ul > li:not(.nav-view-switcher-li)').each(function() {
            if ($(this).is($topProductLi)) {
              $(this).show().addClass('navexpand');
            } else {
              $(this).hide();
            }
          });
        }
      } else {
        // No active item found — show all products collapsed
        $('nav.toc > ul > li:not(.nav-view-switcher-li)').show();
      }
    }

    // Check if we're on a Monitor page
    if (currentPath.includes('/monitor/')) {
      $('.product-menu-header .dropdown').each(function() {
        const $dropdown = $(this);
        const $toggle = $dropdown.find('.dropdown-toggle');

        if ($toggle.text().includes('Observability')) {
          $dropdown.addClass('active');
          $dropdown.find('.dropdown-menu a').each(function() {
            if ($(this).text().includes('Monitor')) {
              $(this).addClass('active');
            }
          });
        }
      });
    }

    } // end if (isInProductViewForNav)

    // POC: Apply task navigation filtering on page load
    console.log('POC DEBUG: isTaskView=', isTaskView, 'currentPath=', currentPath);
    if (isTaskView) {
      var filteredTaskSection = sessionStorage.getItem('filteredTaskSection');
      var showFullTaskTree = sessionStorage.getItem('showFullTaskTree');
      console.log('POC DEBUG: filteredTaskSection=', filteredTaskSection, 'showFullTaskTree=', showFullTaskTree);

      // Known category names (top-level groupings in the task view)
      var TASK_CATEGORIES = [
        'Get Started',
        'Administer the Environment',
        'Develop Agents',
        'Develop & Deploy Integrations',
        'Manage APIs',
        'Monitor',
        'Observe',
        'Troubleshoot'
      ];

      // Auto-filter task nav to show only the category containing the current page,
      // unless user explicitly clicked "All Tasks" AND we're on a landing page
      var activeNavCheck = sessionStorage.getItem('activeNav');
      var isOnTaskLandingPage = currentPath.match(/-about\.html/);

      if (activeNavCheck === 'tasks' && isOnTaskLandingPage) {
        // Keep all categories visible (user is browsing landing pages)
        $('nav.toc > ul > li:not(.nav-view-switcher-li)').show();
      } else {
        // Filter to show only the category containing the active item
        var $activeItem = $('nav.toc li.active');
        if ($activeItem.length) {
          var $topCategory = $activeItem.closest('nav.toc > ul > li');
          if ($topCategory.length) {
            $('nav.toc > ul > li:not(.nav-view-switcher-li)').each(function() {
              if ($(this).is($topCategory)) {
                $(this).show().addClass('navexpand');
              } else {
                $(this).hide();
              }
            });
          }
        }
      }

      if (filteredTaskSection && showFullTaskTree !== 'true') {
        // Categories are top-level <li> items; headings are nested inside <ul> children
        var $categoryItems = $('nav.toc > ul > li:not(.nav-view-switcher-li)');
        var matched = false;
        var filteredCategory = sessionStorage.getItem('filteredTaskCategory');

        $categoryItems.each(function() {
          var $cat = $(this);
          var catName = $cat.children('span, a').first().text().trim();
          var isCategoryMatch = (catName === filteredTaskSection);

          if (isCategoryMatch) {
            // Show entire category expanded with all headings
            $cat.show().addClass('navexpand');
            $cat.find('li').show().addClass('navexpand');
            matched = true;
          } else {
            // Check if a heading inside this category matches
            // If filteredCategory is set, only match within that category
            var headingMatched = false;
            if (!filteredCategory || catName === filteredCategory) {
              var $headings = $cat.children('ul').children('li');
              $headings.each(function() {
                var $h = $(this);
                var hName = $h.children('span, a').first().text().trim();
                if (hName === filteredTaskSection) {
                  headingMatched = true;
                  $h.show().addClass('navexpand');
                  $h.find('li').show();
                } else {
                  $h.hide();
                }
              });
            }

            if (headingMatched) {
              $cat.show().addClass('navexpand');
              matched = true;
            } else {
              $cat.hide();
            }
          }
        });

        console.log('Task section filtered:', filteredTaskSection, 'matched:', matched);
      }
      // else: show full tree (default behavior)
    }

  } // end if ($toc.length > 0)

  // prettifyCodeBlocks() - moved to build time (postprocess.py)
});
