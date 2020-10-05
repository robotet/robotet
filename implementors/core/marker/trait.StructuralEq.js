(function() {var implementors = {};
implementors["ipci_runtime"] = [{"text":"impl StructuralEq for SessionKeys","synthetic":false,"types":[]},{"text":"impl StructuralEq for Runtime","synthetic":false,"types":[]},{"text":"impl StructuralEq for Event","synthetic":false,"types":[]},{"text":"impl StructuralEq for OriginCaller","synthetic":false,"types":[]},{"text":"impl StructuralEq for Call","synthetic":false,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;AccountId, Moment, Record&gt; StructuralEq for RawEvent&lt;AccountId, Moment, Record&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StructuralEq for Module&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;AccountId, Parameter&gt; StructuralEq for RawEvent&lt;AccountId, Parameter&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StructuralEq for Module&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl&lt;T, E, V, A, I&gt; StructuralEq for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Technical,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Economical,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Verify&lt;Signer = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: IdentifyAccount&lt;AccountId = I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Parameter,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; StructuralEq for RawEvent&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StructuralEq for Module&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;AccountId&gt; StructuralEq for RawEvent&lt;AccountId&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StructuralEq for Module&lt;T&gt;","synthetic":false,"types":[]}];
implementors["robonomics_parachain_runtime"] = [{"text":"impl StructuralEq for SessionKeys","synthetic":false,"types":[]},{"text":"impl StructuralEq for Runtime","synthetic":false,"types":[]},{"text":"impl StructuralEq for Event","synthetic":false,"types":[]},{"text":"impl StructuralEq for OriginCaller","synthetic":false,"types":[]},{"text":"impl StructuralEq for Call","synthetic":false,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl StructuralEq for Message","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Datalog&gt; StructuralEq for RecordCall&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Datalog&gt; StructuralEq for NewRecordEvent&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Datalog&gt; StructuralEq for EreaseCall&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Datalog&gt; StructuralEq for ErasedEvent&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Datalog&gt; StructuralEq for DatalogStore&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Launch&gt; StructuralEq for LaunchCall&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Launch&gt; StructuralEq for NewLaunchEvent&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl StructuralEq for Robonomics","synthetic":false,"types":[]}];
implementors["robonomics_runtime"] = [{"text":"impl StructuralEq for SessionKeys","synthetic":false,"types":[]},{"text":"impl StructuralEq for Runtime","synthetic":false,"types":[]},{"text":"impl StructuralEq for Event","synthetic":false,"types":[]},{"text":"impl StructuralEq for OriginCaller","synthetic":false,"types":[]},{"text":"impl StructuralEq for Call","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()