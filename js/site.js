(function () {
  var PUBLICATION_TAGS = {
    "moirelens bringing schlieren imaging into real world environments using moire patterns": {
      modalities: ["Light"],
      challenges: ["Extended Sensing Capabilities"],
      applications: ["Environmental Sensing"],
      venue: "Mobile Computing"
    },
    "unlocking practical cardiac monitoring capabilities on true wireless stereo earbuds to appear": {
      modalities: ["Vibration", "Biosensors"],
      challenges: ["Extended Sensing Capabilities", "Communication"],
      applications: ["Health Sensing"],
      venue: "Mobile Computing"
    },
    "unlocking practical cardiac monitoring capabilities on true wireless stereo earbuds": {
      modalities: ["Vibration", "Biosensors"],
      challenges: ["Extended Sensing Capabilities", "Communication"],
      applications: ["Health Sensing"],
      venue: "Mobile Computing"
    },
    "attacking mmwave imaging using metasurfaces based on intensity and time of flight manipulation to appear": {
      modalities: ["RF"],
      challenges: ["Security"],
      applications: ["Sensor Security"],
      venue: "Mobile Computing"
    },
    "attacking mmwave imaging using metasurfaces based on intensity and time of flight manipulation": {
      modalities: ["RF"],
      challenges: ["Security"],
      applications: ["Sensor Security"],
      venue: "Mobile Computing"
    },
    "soilnutri a passive metasurface based low cost system for soil moisture and nitrogen monitoring": {
      modalities: ["RF"],
      challenges: ["Extended Sensing Capabilities"],
      applications: ["Environmental Sensing"],
      venue: "Human Computer Interaction"
    },
    "from bits to tokens knowledge driven generative communication of multimodal data to appear": {
      modalities: ["RF", "Multi-modal"],
      challenges: ["Communication", "Computation & Storage"],
      applications: [],
      venue: "Computer Networks"
    },
    "from bits to tokens knowledge driven generative communication of multimodal data": {
      modalities: ["RF", "Multi-modal"],
      challenges: ["Communication", "Computation & Storage"],
      applications: [],
      venue: "Computer Networks"
    },
    "uwb based localization of smartphones inside a vehicle to prevent distracted driving to appear": {
      modalities: ["RF", "Motion Sensors", "Multi-modal"],
      challenges: [],
      applications: ["Sensor Security"],
      venue: "Mobile Computing"
    },
    "uwb based localization of smartphones inside a vehicle to prevent distracted driving": {
      modalities: ["RF", "Motion Sensors", "Multi-modal"],
      challenges: [],
      applications: ["Sensor Security"],
      venue: "Mobile Computing"
    },
    "ultraposer pushing the limits of imu based full body pose estimation with ultrasound sensing on consumer wearables": {
      modalities: ["Acoustics", "Motion Sensors", "Multi-modal"],
      challenges: ["Extended Sensing Capabilities", "Computation & Storage"],
      applications: ["HCI"],
      venue: "Human Computer Interaction"
    },
    "eveguard defeating vibration based side channel eavesdropping with audio adversarial perturbations": {
      modalities: ["Vibration", "Acoustics", "Multi-modal"],
      challenges: ["Privacy", "Security"],
      applications: ["Sensor Privacy Attack and Defense"],
      venue: "Security and Privacy"
    },
    "security attacks on llm based code completion tools": {
      modalities: [],
      challenges: ["Security", "Privacy"],
      applications: ["Sensor Privacy Attack and Defense"],
      venue: "ML/AI"
    },
    "magmaw modality agnostic adversarial attacks on machine learning based wireless communication systems": {
      modalities: ["RF"],
      challenges: ["Security", "Communication"],
      applications: ["Sensor Privacy Attack and Defense"],
      venue: "Security and Privacy"
    },
    "rfcanvas modeling rf channel by fusing visual priors and few shot rf measurements": {
      modalities: ["RF", "Light", "Multi-modal"],
      challenges: ["Communication", "Computation & Storage"],
      applications: ["Robotic Sensing"],
      venue: "Mobile Computing"
    },
    "multimodal daily life logging in free living environments using non visual egocentric sensors on a smartphone": {
      modalities: ["Motion Sensors", "Acoustics", "RF", "Multi-modal"],
      challenges: ["Privacy"],
      applications: ["Health Sensing"],
      venue: "Human Computer Interaction"
    },
    "stealthyimu extracting permission protected private information from smartphone voice assistant using zero permission sensors": {
      modalities: ["Motion Sensors"],
      challenges: ["Privacy", "Security"],
      applications: ["Sensor Privacy Attack and Defense"],
      venue: "Security and Privacy"
    },
    "scalar self calibrated acoustic ranging for distributed mobile devices": {
      modalities: ["Acoustics"],
      challenges: ["Extended Sensing Capabilities", "Communication"],
      applications: ["HCI"],
      venue: ""
    },
    "vector velocity based temperature field monitoring with distributed acoustic devices": {
      modalities: ["Acoustics"],
      challenges: ["Extended Sensing Capabilities", "Communication"],
      applications: ["Environmental Sensing"],
      venue: "Human Computer Interaction"
    },
    "loear push the range limit of acoustic sensing for vital sign monitoring": {
      modalities: ["Acoustics", "Biosensors", "Multi-modal"],
      challenges: ["Extended Sensing Capabilities", "Computation & Storage"],
      applications: ["Health Sensing"],
      venue: "Human Computer Interaction"
    },
    "ultrase single channel speech enhancement using ultrasound": {
      modalities: ["Acoustics", "Multi-modal"],
      challenges: ["Computation & Storage"],
      applications: ["Speech Processing"],
      venue: "Mobile Computing"
    },
    "exgsense toward facial gesture sensing and reconstruction with a sparse near eye sensor array": {
      modalities: ["Biosensors"],
      challenges: ["Computation & Storage"],
      applications: ["HCI"],
      venue: "Mobile Computing"
    },
    "alexa stop spying on me speech privacy protection against voice assistants": {
      modalities: ["Acoustics"],
      challenges: ["Privacy", "Security"],
      applications: ["Sensor Privacy Attack and Defense", "Speech Processing"],
      venue: "Mobile Computing"
    },
    "milliego single chip mmwave radar aided egomotion estimation via deep sensor fusion": {
      modalities: ["RF", "Motion Sensors", "Multi-modal"],
      challenges: ["Extended Sensing Capabilities", "Computation & Storage"],
      applications: ["Robotic Sensing"],
      venue: "Mobile Computing"
    },
    "dynamic speed warping similarity based one shot learning for device free gesture signals": {
      modalities: ["Acoustics"],
      challenges: ["Computation & Storage"],
      applications: ["HCI"],
      venue: "Computer Networks"
    },
    "spidermon towards using cell towers as illuminating sources for keystroke monitoring": {
      modalities: ["RF"],
      challenges: ["Privacy", "Security"],
      applications: ["Sensor Privacy Attack and Defense"],
      venue: "Computer Networks"
    },
    "vskin sensing touch gestures on surfaces of mobile devices using acoustic signals": {
      modalities: ["Acoustics"],
      challenges: [],
      applications: ["HCI"],
      venue: "Mobile Computing"
    },
    "unlock with your heart heartbeat based authentication on commercial mobile phones": {
      modalities: ["Biosensors"],
      challenges: ["Security", "Privacy"],
      applications: ["Health Sensing", "Sensor Privacy Attack and Defense"],
      venue: "Human Computer Interaction"
    },
    "depth aware finger tapping on virtual displays": {
      modalities: ["Acoustics", "Light", "Multi-modal"],
      challenges: [],
      applications: ["HCI"],
      venue: "Mobile Computing"
    },
    "witrace centimeter level passive gesture tracking using wifi signals": {
      modalities: ["RF"],
      challenges: ["Extended Sensing Capabilities"],
      applications: ["HCI"],
      venue: "Computer Networks"
    },
    "witrace centimeter level passive gesture tracking using ofdm signals": {
      modalities: ["RF"],
      challenges: ["Extended Sensing Capabilities"],
      applications: ["HCI"],
      venue: ""
    },
    "charging task scheduling for directional wireless charger networks": {
      modalities: [],
      challenges: ["Communication", "Computation & Storage"],
      applications: [],
      venue: "Computer Networks"
    },
    "device free gesture tracking using acoustic signals": {
      modalities: ["Acoustics"],
      challenges: [],
      applications: ["HCI"],
      venue: "Mobile Computing"
    },
    "towards smartphone based 3d hand pose reconstruction using acoustic signals": {
      modalities: ["Acoustics"],
      challenges: ["Extended Sensing Capabilities"],
      applications: ["HCI"],
      venue: ""
    },
    "dsw one shot learning scheme for device free acoustic gesture signals": {
      modalities: ["Acoustics"],
      challenges: ["Computation & Storage"],
      applications: ["HCI"],
      venue: ""
    },
    "poster abstract captag toward printable ubiquitous internet of things": {
      modalities: [],
      challenges: ["Communication"],
      applications: [],
      venue: ""
    },
    "demo device free gesture tracking using acoustic signals": {
      modalities: ["Acoustics"],
      challenges: [],
      applications: ["HCI"],
      venue: "Mobile Computing"
    }
  };

  var FILTER_GROUPS = [
    {
      key: "modalities",
      label: "Sensing Modalities",
      options: ["Acoustics", "Light", "RF", "Vibration", "Motion Sensors", "Biosensors", "Multi-modal"]
    },
    {
      key: "challenges",
      label: "System Challenges",
      options: ["Extended Sensing Capabilities", "Privacy", "Security", "Communication", "Computation & Storage"]
    },
    {
      key: "applications",
      label: "Applications",
      options: ["HCI", "Speech Processing", "Health Sensing", "Environmental Sensing", "Robotic Sensing", "Sensor Security", "Sensor Privacy Attack and Defense"]
    },
    {
      key: "venue",
      label: "Venue Areas",
      options: ["Mobile Computing", "Human Computer Interaction", "Security and Privacy", "Computer Networks", "ML/AI"]
    }
  ];

  function normalizeTitle(text) {
    return (text || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function getTagsForPublication(title) {
    return PUBLICATION_TAGS[normalizeTitle(title)] || { modalities: [], challenges: [], applications: [], venue: "" };
  }

  function updateYearGroupVisibility(section) {
    var groups = section.querySelectorAll(".publication-year-group");
    Array.prototype.forEach.call(groups, function (group) {
      var visibleCards = group.querySelectorAll(".paper-card:not(.publication-hidden)");
      group.style.display = visibleCards.length ? "" : "none";
    });
  }

  function addPublicationFilters(section) {
    if (!section || section.querySelector(".publication-filter-bar")) {
      return;
    }

    var filterGroups = FILTER_GROUPS.filter(function (groupConfig) {
      return !(section.id === "Journal" && groupConfig.key === "venue");
    });

    var items = Array.prototype.slice.call(section.querySelectorAll(".paper-card, p.paper-wireless.paper-mobile"));
    var taggedItems = [];

    items.forEach(function (item) {
      if (item.classList.contains("publication-hidden")) {
        return;
      }

      var titleLink = item.querySelector("a[href]");
      if (!titleLink) {
        return;
      }

      var tags = getTagsForPublication(titleLink.textContent);
      var modalities = tags.modalities || [];
      var challenges = tags.challenges || [];
      var applications = tags.applications || [];
      var venue = tags.venue ? [tags.venue] : [];
      var allTags = modalities.concat(challenges, applications);

      if (!allTags.length) {
        return;
      }

      item.setAttribute("data-modalities", modalities.join("|"));
      item.setAttribute("data-challenges", challenges.join("|"));
      item.setAttribute("data-applications", applications.join("|"));
      item.setAttribute("data-venue", venue.join("|"));
      taggedItems.push(item);

      var tagContainer = document.createElement(item.classList.contains("paper-card") ? "div" : "span");
      tagContainer.className = "publication-tags";
      allTags.forEach(function (tag) {
        var chip = document.createElement("span");
        var tagType = modalities.indexOf(tag) !== -1 ? "is-modality" : (challenges.indexOf(tag) !== -1 ? "is-challenge" : "is-application");
        chip.className = "publication-tag " + tagType;
        chip.textContent = tag;
        tagContainer.appendChild(chip);
      });

      if (item.classList.contains("paper-card")) {
        var summary = item.querySelector(".paper-card-summary");
        (summary || item).appendChild(tagContainer);
      } else {
        item.appendChild(document.createElement("br"));
        item.appendChild(tagContainer);
      }
    });

    if (!taggedItems.length) {
      return;
    }

    var filterPanel = document.createElement("div");
    filterPanel.className = "publication-filter-panel";

    var activeFilters = {
      modalities: "all",
      challenges: "all",
      applications: "all",
      venue: "all"
    };

    function createButton(label, value, active) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = active ? "publication-filter is-active" : "publication-filter";
      button.textContent = label;
      button.setAttribute("data-filter", value);
      return button;
    }

    filterGroups.forEach(function (groupConfig) {
      var group = document.createElement("div");
      var title = document.createElement("div");
      var filterBar = document.createElement("div");

      group.className = "publication-filter-group";
      title.className = "publication-filter-label";
      title.textContent = groupConfig.label;
      filterBar.className = "publication-filter-bar";
      filterBar.setAttribute("data-group", groupConfig.key);

      filterBar.appendChild(createButton("All", "all", true));
      groupConfig.options.forEach(function (tag) {
        filterBar.appendChild(createButton(tag, tag, false));
      });

      group.appendChild(title);
      group.appendChild(filterBar);
      filterPanel.appendChild(group);
    });

    var anchor = section.querySelector(".publication-note") || section.querySelector("h3");
    anchor.insertAdjacentElement("afterend", filterPanel);

    filterPanel.addEventListener("click", function (event) {
      var button = event.target.closest(".publication-filter");
      if (!button) {
        return;
      }

      var filterBar = button.closest(".publication-filter-bar");
      var groupKey = filterBar ? filterBar.getAttribute("data-group") : null;
      if (!groupKey) {
        return;
      }

      var value = button.getAttribute("data-filter");
      activeFilters[groupKey] = value;

      Array.prototype.forEach.call(filterBar.querySelectorAll(".publication-filter"), function (node) {
        node.classList.toggle("is-active", node === button);
      });

      taggedItems.forEach(function (item) {
        var itemModalities = (item.getAttribute("data-modalities") || "").split("|").filter(Boolean);
        var itemChallenges = (item.getAttribute("data-challenges") || "").split("|").filter(Boolean);
        var itemApplications = (item.getAttribute("data-applications") || "").split("|").filter(Boolean);
        var itemVenue = (item.getAttribute("data-venue") || "").split("|").filter(Boolean);
        var matchesModalities = activeFilters.modalities === "all" || itemModalities.indexOf(activeFilters.modalities) !== -1;
        var matchesChallenges = activeFilters.challenges === "all" || itemChallenges.indexOf(activeFilters.challenges) !== -1;
        var matchesApplications = activeFilters.applications === "all" || itemApplications.indexOf(activeFilters.applications) !== -1;
        var matchesVenue = activeFilters.venue === "all" || itemVenue.indexOf(activeFilters.venue) !== -1;
        var visible = matchesModalities && matchesChallenges && matchesApplications && matchesVenue;
        item.classList.toggle("publication-hidden", !visible);
      });

      updateYearGroupVisibility(section);
    });
  }

  function buildPublicationGroups() {
    var publicationSection = document.getElementById("publication");
    if (!publicationSection || publicationSection.querySelector(".publication-year-heading")) {
      return;
    }

    var heading = publicationSection.querySelector("h3");
    if (!heading) {
      return;
    }

    var children = Array.prototype.slice.call(publicationSection.children);
    var noteNode = null;
    var entries = [];

    for (var i = 0; i < children.length; i += 1) {
      var child = children[i];
      if (child === heading) {
        continue;
      }

      if (!noteNode && child.classList.contains("col-md-12")) {
        noteNode = child.cloneNode(true);
        continue;
      }

      if (!child.classList.contains("col-md-8")) {
        continue;
      }

      var imageColumn = children[i + 1];
      if (!imageColumn || !imageColumn.classList.contains("col-md-4")) {
        continue;
      }

      var paper = child.querySelector("p");
      if (!paper || !paper.id) {
        continue;
      }

      var parts = paper.innerHTML.split(/<br\s*\/?>/i);
      var titleLink = paper.querySelector("a");
      var authorsHtml = parts[1] || "";
      var metaHtml = parts.slice(2).join("<br>").trim();
      var titleText = titleLink ? titleLink.textContent.trim() : paper.textContent.trim();
      var yearMatch = paper.textContent.match(/20\d{2}/);
      var year = yearMatch ? yearMatch[0] : "Earlier";
      var bucket = parseInt(year, 10) >= 2022 ? year : "2021 & Earlier";
      var summaryContainer = document.createElement("div");

      Array.prototype.forEach.call(child.childNodes, function (node) {
        if (node !== paper) {
          summaryContainer.appendChild(node.cloneNode(true));
        }
      });

      entries.push({
        bucket: bucket,
        id: paper.id,
        titleText: titleText,
        titleHref: titleLink ? titleLink.getAttribute("href") : "#" + paper.id,
        titleTarget: titleLink ? titleLink.getAttribute("target") : null,
        authorsHtml: authorsHtml,
        metaHtml: metaHtml,
        summaryHtml: summaryContainer.innerHTML.trim(),
        imageHtml: imageColumn.innerHTML
      });
    }

    if (!entries.length) {
      return;
    }

    var order = ["2026", "2025", "2024", "2023", "2022", "2021 & Earlier"];
    var grouped = {};

    entries.forEach(function (entry) {
      if (!grouped[entry.bucket]) {
        grouped[entry.bucket] = [];
      }
      grouped[entry.bucket].push(entry);
    });

    publicationSection.innerHTML = "";
    publicationSection.appendChild(heading);

    var note = document.createElement("p");
    note.className = "publication-note";
    note.innerHTML = noteNode ? noteNode.innerHTML.replace(/<br\s*\/?>/gi, " ").trim() : "";
    publicationSection.appendChild(note);

    var groups = document.createElement("div");
    groups.className = "publication-groups";

    order.forEach(function (bucket, index) {
      if (!grouped[bucket]) {
        return;
      }

      var group = document.createElement("section");
      var headingNode = document.createElement("div");

      group.className = "publication-year-group";
      group.id = "pub-" + bucket.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      headingNode.className = "publication-year-heading";
      headingNode.textContent = bucket;
      group.appendChild(headingNode);

      grouped[bucket].forEach(function (entry) {
        var card = document.createElement("article");
        card.className = "paper-card";
        card.id = entry.id;
        var titleAttributes = ' href="' + (entry.titleHref || ("#" + entry.id)) + '"';
        if (entry.titleTarget) {
          titleAttributes += ' target="' + entry.titleTarget + '"';
        }
        card.innerHTML =
          '<div class="row">' +
            '<div class="col-md-8 paper-card-body">' +
              '<h4 class="paper-card-title"><a' + titleAttributes + ">" + entry.titleText + "</a></h4>" +
              '<p class="paper-card-meta">' + entry.authorsHtml + "<br>" + entry.metaHtml + "</p>" +
              '<div class="paper-card-summary">' + entry.summaryHtml + "</div>" +
            "</div>" +
            '<div class="col-md-4 paper-card-media">' + entry.imageHtml + "</div>" +
          "</div>";
        group.appendChild(card);
      });

      groups.appendChild(group);
    });

    publicationSection.appendChild(groups);
  }

  function getHashTarget(hash) {
    if (!hash || hash === "#") {
      return null;
    }

    var id = hash.slice(1);
    if (!id) {
      return null;
    }

    try {
      return document.getElementById(decodeURIComponent(id));
    } catch (error) {
      return document.getElementById(id);
    }
  }

  function centerElement(target, updateHash) {
    if (!target) {
      return;
    }

    var rect = target.getBoundingClientRect();
    var absoluteTop = rect.top + window.pageYOffset;
    var offset = (window.innerHeight - rect.height) / 2;
    var top = Math.max(0, absoluteTop - Math.max(32, offset));

    window.scrollTo({
      top: top,
      behavior: "smooth"
    });

    if (updateHash) {
      history.replaceState(null, "", "#" + target.id);
    }
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href]");
    if (!link) {
      return;
    }

    var href = link.getAttribute("href");
    if (!href || href === "#" || href.indexOf("#") === -1) {
      return;
    }

    if (/^(https?:|mailto:|javascript:)/i.test(href)) {
      return;
    }

    var url = new URL(link.href, window.location.href);
    if (url.pathname !== window.location.pathname || !url.hash) {
      return;
    }

    var target = getHashTarget(url.hash);
    if (!target) {
      return;
    }

    event.preventDefault();
    centerElement(target, true);
  });

  window.addEventListener("load", function () {
    buildPublicationGroups();
    addPublicationFilters(document.getElementById("publication"));
    Array.prototype.forEach.call(document.querySelectorAll(".publication-list"), function (section) {
      addPublicationFilters(section);
    });

    if (!window.location.hash) {
      return;
    }

    var target = getHashTarget(window.location.hash);
    if (!target) {
      return;
    }

    setTimeout(function () {
      centerElement(target, false);
    }, 60);
  });
})();
