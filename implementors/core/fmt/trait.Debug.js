(function() {var implementors = {};
implementors["ipci_runtime"] = [{"text":"impl Debug for SessionKeys","synthetic":false,"types":[]},{"text":"impl Debug for Runtime","synthetic":false,"types":[]},{"text":"impl Debug for Event","synthetic":false,"types":[]},{"text":"impl Debug for Origin","synthetic":false,"types":[]},{"text":"impl Debug for OriginCaller","synthetic":false,"types":[]},{"text":"impl Debug for Call","synthetic":false,"types":[]}];
implementors["node_cli"] = [{"text":"impl Debug for Cli","synthetic":false,"types":[]},{"text":"impl Debug for RunCmd","synthetic":false,"types":[]},{"text":"impl Debug for Subcommand","synthetic":false,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;AccountId, Moment, Record&gt; Debug for RawEvent&lt;AccountId, Moment, Record&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;Record: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_datalog_xcm"] = [{"text":"impl&lt;AccountId&gt; Debug for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;AccountId, Parameter&gt; Debug for RawEvent&lt;AccountId, Parameter&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameter: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_launch_xcm"] = [{"text":"impl&lt;AccountId&gt; Debug for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl&lt;T, E, V, A, I&gt; Debug for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Technical,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Economical,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Verify&lt;Signer = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: IdentifyAccount&lt;AccountId = I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Parameter,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; Debug for RawEvent&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;LiabilityIndex: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalParam: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;EconomicalParam: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalReport: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Error&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Error&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;AccountId&gt; Debug for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Debug for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for IoCmd","synthetic":false,"types":[]},{"text":"impl Debug for SinkCmd","synthetic":false,"types":[]},{"text":"impl Debug for SourceCmd","synthetic":false,"types":[]}];
implementors["robonomics_io"] = [{"text":"impl Debug for Error","synthetic":false,"types":[]}];
implementors["robonomics_parachain_runtime"] = [{"text":"impl Debug for SessionKeys","synthetic":false,"types":[]},{"text":"impl Debug for Runtime","synthetic":false,"types":[]},{"text":"impl Debug for Event","synthetic":false,"types":[]},{"text":"impl Debug for Origin","synthetic":false,"types":[]},{"text":"impl Debug for OriginCaller","synthetic":false,"types":[]},{"text":"impl Debug for Call","synthetic":false,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for DiscoveryMessage","synthetic":false,"types":[]},{"text":"impl Debug for Message","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug + Datalog&gt; Debug for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Record: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug + Datalog&gt; Debug for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Record: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug + Datalog&gt; Debug for EreaseCall&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug + Datalog&gt; Debug for ErasedEvent&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Debug + Datalog&gt; Debug for DatalogStore&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug + Launch&gt; Debug for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Parameter: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug + Launch&gt; Debug for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Parameter: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Debug for Robonomics","synthetic":false,"types":[]}];
implementors["robonomics_runtime"] = [{"text":"impl Debug for SessionKeys","synthetic":false,"types":[]},{"text":"impl Debug for Runtime","synthetic":false,"types":[]},{"text":"impl Debug for Event","synthetic":false,"types":[]},{"text":"impl Debug for Origin","synthetic":false,"types":[]},{"text":"impl Debug for OriginCaller","synthetic":false,"types":[]},{"text":"impl Debug for Call","synthetic":false,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl Debug for StateCallRes","synthetic":false,"types":[]},{"text":"impl Debug for GetBestHeadRes","synthetic":false,"types":[]},{"text":"impl Debug for StorageKeysReq","synthetic":false,"types":[]},{"text":"impl Debug for BlockHash","synthetic":false,"types":[]},{"text":"impl Debug for RemoveExtrinsicRes","synthetic":false,"types":[]},{"text":"impl Debug for GetBestHeadReq","synthetic":false,"types":[]},{"text":"impl Debug for GetBlockHeaderReq","synthetic":false,"types":[]},{"text":"impl Debug for StorageHashReq","synthetic":false,"types":[]},{"text":"impl Debug for SystemHealthInfo","synthetic":false,"types":[]},{"text":"impl Debug for GetBlockHeaderRes","synthetic":false,"types":[]},{"text":"impl Debug for GetBlockRes","synthetic":false,"types":[]},{"text":"impl Debug for SubmitExtrinsicRes","synthetic":false,"types":[]},{"text":"impl Debug for StorageSizeRes","synthetic":false,"types":[]},{"text":"impl Debug for SystemHealthReq","synthetic":false,"types":[]},{"text":"impl Debug for RawExtrinsic","synthetic":false,"types":[]},{"text":"impl Debug for SubmitExtrinsicReq","synthetic":false,"types":[]},{"text":"impl Debug for GetBlockReq","synthetic":false,"types":[]},{"text":"impl Debug for StorageSizeReq","synthetic":false,"types":[]},{"text":"impl Debug for PendingExtrinsicsReq","synthetic":false,"types":[]},{"text":"impl Debug for SystemHealthRes","synthetic":false,"types":[]},{"text":"impl Debug for GetBlockHashReq","synthetic":false,"types":[]},{"text":"impl Debug for GetFinalizedHeadRes","synthetic":false,"types":[]},{"text":"impl Debug for StorageKeysRes","synthetic":false,"types":[]},{"text":"impl Debug for RemoveExtrinsicReq","synthetic":false,"types":[]},{"text":"impl Debug for StateCallReq","synthetic":false,"types":[]},{"text":"impl Debug for PendingExtrinsicsRes","synthetic":false,"types":[]},{"text":"impl Debug for StorageQueryRes","synthetic":false,"types":[]},{"text":"impl Debug for GetFinalizedHeadReq","synthetic":false,"types":[]},{"text":"impl Debug for StorageHashRes","synthetic":false,"types":[]},{"text":"impl Debug for StorageQueryReq","synthetic":false,"types":[]},{"text":"impl Debug for GetBlockHashRes","synthetic":false,"types":[]},{"text":"impl Debug for StorageKey","synthetic":false,"types":[]},{"text":"impl Debug for ExHash","synthetic":false,"types":[]},{"text":"impl Debug for StorageHash","synthetic":false,"types":[]},{"text":"impl Debug for SubmitExtrinsic","synthetic":false,"types":[]},{"text":"impl Debug for StorageSize","synthetic":false,"types":[]},{"text":"impl Debug for RemoveExtrinsic","synthetic":false,"types":[]},{"text":"impl Debug for PendingExtrinsics","synthetic":false,"types":[]},{"text":"impl Debug for GetFinalizedHead","synthetic":false,"types":[]},{"text":"impl Debug for GetBlock","synthetic":false,"types":[]},{"text":"impl Debug for StorageQuery","synthetic":false,"types":[]},{"text":"impl Debug for StorageKeys","synthetic":false,"types":[]},{"text":"impl Debug for SystemHealth","synthetic":false,"types":[]},{"text":"impl Debug for GetBlockHash","synthetic":false,"types":[]},{"text":"impl Debug for StateCall","synthetic":false,"types":[]},{"text":"impl Debug for GetBestHead","synthetic":false,"types":[]},{"text":"impl Debug for GetBlockHeader","synthetic":false,"types":[]},{"text":"impl Debug for TriggerRes","synthetic":false,"types":[]},{"text":"impl Debug for TriggerReq","synthetic":false,"types":[]},{"text":"impl Debug for Trigger","synthetic":false,"types":[]},{"text":"impl Debug for Time","synthetic":false,"types":[]},{"text":"impl Debug for UInt64","synthetic":false,"types":[]},{"text":"impl Debug for Bool","synthetic":false,"types":[]},{"text":"impl Debug for String","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()