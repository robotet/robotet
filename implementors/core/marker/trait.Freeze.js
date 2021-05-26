(function() {var implementors = {};
implementors["node_bench"] = [{"text":"impl Freeze for SizeType","synthetic":true,"types":[]},{"text":"impl Freeze for ConstructionBenchmarkDescription","synthetic":true,"types":[]},{"text":"impl Freeze for ConstructionBenchmark","synthetic":true,"types":[]},{"text":"impl Freeze for PoolTransaction","synthetic":true,"types":[]},{"text":"impl Freeze for Transactions","synthetic":true,"types":[]},{"text":"impl Freeze for Path","synthetic":true,"types":[]},{"text":"impl Freeze for BenchmarkOutput","synthetic":true,"types":[]},{"text":"impl Freeze for NsFormatter","synthetic":true,"types":[]},{"text":"impl Freeze for Mode","synthetic":true,"types":[]},{"text":"impl Freeze for ImportBenchmarkDescription","synthetic":true,"types":[]},{"text":"impl Freeze for ImportBenchmark","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for SimpleTrie&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for DatabaseType","synthetic":true,"types":[]},{"text":"impl Freeze for TempDatabase","synthetic":true,"types":[]},{"text":"impl Freeze for ParityDbWrapper","synthetic":true,"types":[]},{"text":"impl Freeze for DatabaseSize","synthetic":true,"types":[]},{"text":"impl Freeze for KUSAMA_STATE_DISTRIBUTION","synthetic":true,"types":[]},{"text":"impl Freeze for TrieReadBenchmarkDescription","synthetic":true,"types":[]},{"text":"impl Freeze for TrieReadBenchmark","synthetic":true,"types":[]},{"text":"impl Freeze for Storage","synthetic":true,"types":[]},{"text":"impl Freeze for TrieWriteBenchmarkDescription","synthetic":true,"types":[]},{"text":"impl Freeze for TrieWriteBenchmark","synthetic":true,"types":[]},{"text":"impl Freeze for SizePool","synthetic":true,"types":[]},{"text":"impl Freeze for PoolBenchmarkDescription","synthetic":true,"types":[]},{"text":"impl Freeze for PoolBenchmark","synthetic":true,"types":[]},{"text":"impl Freeze for Opt","synthetic":true,"types":[]}];
implementors["node_cli"] = [{"text":"impl Freeze for RobonomicsFamily","synthetic":true,"types":[]},{"text":"impl Freeze for Extensions","synthetic":true,"types":[]},{"text":"impl Freeze for Executor","synthetic":true,"types":[]},{"text":"impl Freeze for Extensions","synthetic":true,"types":[]},{"text":"impl Freeze for ExportGenesisStateCommand","synthetic":true,"types":[]},{"text":"impl Freeze for ExportGenesisWasmCommand","synthetic":true,"types":[]},{"text":"impl Freeze for RelayChainCli","synthetic":true,"types":[]},{"text":"impl Freeze for Executor","synthetic":true,"types":[]},{"text":"impl Freeze for Cli","synthetic":true,"types":[]},{"text":"impl Freeze for RunCmd","synthetic":true,"types":[]},{"text":"impl Freeze for Subcommand","synthetic":true,"types":[]}];
implementors["node_primitives"] = [{"text":"impl Freeze for TokenSymbol","synthetic":true,"types":[]},{"text":"impl Freeze for CurrencyId","synthetic":true,"types":[]}];
implementors["node_rpc"] = [{"text":"impl&lt;C, F, P&gt; Freeze for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for GrandpaDeps&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Freeze for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["node_runtime"] = [{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Freeze for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Freeze for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for EpochDuration","synthetic":true,"types":[]},{"text":"impl Freeze for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Freeze for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Freeze for WeightLimit","synthetic":true,"types":[]},{"text":"impl Freeze for PointsLimit","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]}];
implementors["node_testing"] = [{"text":"impl Freeze for BenchKeyring","synthetic":true,"types":[]},{"text":"impl Freeze for BenchDb","synthetic":true,"types":[]},{"text":"impl Freeze for BlockType","synthetic":true,"types":[]},{"text":"impl Freeze for BlockContent","synthetic":true,"types":[]},{"text":"impl Freeze for DatabaseType","synthetic":true,"types":[]},{"text":"impl Freeze for TaskExecutor","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BlockContentIterator&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for KeyTypes","synthetic":true,"types":[]},{"text":"impl Freeze for Profile","synthetic":true,"types":[]},{"text":"impl Freeze for BenchContext","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisParameters","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;T&gt; Freeze for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Time as Time&gt;::Moment: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog_xcm"] = [{"text":"impl&lt;T&gt; Freeze for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_digital_twin"] = [{"text":"impl&lt;T&gt; Freeze for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;T&gt; Freeze for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch_xcm"] = [{"text":"impl&lt;T&gt; Freeze for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl Freeze for Communism","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; Freeze for OpenMarket&lt;T, A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, E, V, A, I&gt; Freeze for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Economical&gt;::Parameter: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Technical&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for AppProofSigner&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ProofSigner&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for PureIPFS","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Index: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Index: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Proof: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["parachain_runtime"] = [{"text":"impl Freeze for STAKE_HOLDERS","synthetic":true,"types":[]},{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Freeze for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for DustAccount","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposits","synthetic":true,"types":[]},{"text":"impl Freeze for GetNativeCurrencyId","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Freeze for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Freeze for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Freeze for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Freeze for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Freeze for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBond","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Freeze for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for Burn","synthetic":true,"types":[]},{"text":"impl Freeze for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl Freeze for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl Freeze for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl Freeze for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl Freeze for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl Freeze for TipCountdown","synthetic":true,"types":[]},{"text":"impl Freeze for TipFindersFee","synthetic":true,"types":[]},{"text":"impl Freeze for TipReportDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for CandidacyBond","synthetic":true,"types":[]},{"text":"impl Freeze for VotingBondBase","synthetic":true,"types":[]},{"text":"impl Freeze for VotingBondFactor","synthetic":true,"types":[]},{"text":"impl Freeze for TermDuration","synthetic":true,"types":[]},{"text":"impl Freeze for DesiredMembers","synthetic":true,"types":[]},{"text":"impl Freeze for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl Freeze for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl Freeze for RococoLocation","synthetic":true,"types":[]},{"text":"impl Freeze for RococoNetwork","synthetic":true,"types":[]},{"text":"impl Freeze for RobonomicsNetwork","synthetic":true,"types":[]},{"text":"impl Freeze for RelayChainOrigin","synthetic":true,"types":[]},{"text":"impl Freeze for RelayChainCurrencyId","synthetic":true,"types":[]},{"text":"impl Freeze for Ancestry","synthetic":true,"types":[]},{"text":"impl Freeze for NativeOrmlTokens","synthetic":true,"types":[]},{"text":"impl Freeze for XcmConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RelayToNative","synthetic":true,"types":[]},{"text":"impl Freeze for NativeToRelay","synthetic":true,"types":[]},{"text":"impl Freeze for AccountId32Convert","synthetic":true,"types":[]},{"text":"impl Freeze for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Freeze for WeightLimit","synthetic":true,"types":[]},{"text":"impl Freeze for PointsLimit","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for IoCmd","synthetic":true,"types":[]},{"text":"impl Freeze for SinkCmd","synthetic":true,"types":[]},{"text":"impl Freeze for SourceCmd","synthetic":true,"types":[]}];
implementors["robonomics_io"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for DiscoveryMessage","synthetic":true,"types":[]},{"text":"impl !Freeze for PubSub","synthetic":true,"types":[]},{"text":"impl !Freeze for Message","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for EreaseCall&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ErasedEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for DatalogStore&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Robonomics","synthetic":true,"types":[]}];
implementors["substrate_ros_api"] = [{"text":"impl&lt;P, Client&gt; Freeze for Author&lt;P, Client&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Client, Block&gt; Freeze for FullChain&lt;Client, Block&gt;","synthetic":true,"types":[]},{"text":"impl&lt;BE, Client, Block&gt; Freeze for FullState&lt;BE, Client, Block&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B, H&gt; Freeze for System&lt;B, H&gt;","synthetic":true,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl Freeze for Bool","synthetic":true,"types":[]},{"text":"impl Freeze for Time","synthetic":true,"types":[]},{"text":"impl Freeze for UInt64","synthetic":true,"types":[]},{"text":"impl Freeze for String","synthetic":true,"types":[]},{"text":"impl Freeze for TriggerReq","synthetic":true,"types":[]},{"text":"impl Freeze for TriggerRes","synthetic":true,"types":[]},{"text":"impl Freeze for Trigger","synthetic":true,"types":[]},{"text":"impl Freeze for GetFinalizedHeadRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHashReq","synthetic":true,"types":[]},{"text":"impl Freeze for SubmitExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Freeze for StorageHashReq","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetBestHeadRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockReq","synthetic":true,"types":[]},{"text":"impl Freeze for StateCallRes","synthetic":true,"types":[]},{"text":"impl Freeze for ExHash","synthetic":true,"types":[]},{"text":"impl Freeze for RawExtrinsic","synthetic":true,"types":[]},{"text":"impl Freeze for SystemHealthRes","synthetic":true,"types":[]},{"text":"impl Freeze for SystemHealthReq","synthetic":true,"types":[]},{"text":"impl Freeze for StorageQueryRes","synthetic":true,"types":[]},{"text":"impl Freeze for StorageKey","synthetic":true,"types":[]},{"text":"impl Freeze for StorageSizeReq","synthetic":true,"types":[]},{"text":"impl Freeze for GetFinalizedHeadReq","synthetic":true,"types":[]},{"text":"impl Freeze for SubmitExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Freeze for SystemHealthInfo","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHeaderRes","synthetic":true,"types":[]},{"text":"impl Freeze for PendingExtrinsicsRes","synthetic":true,"types":[]},{"text":"impl Freeze for PendingExtrinsicsReq","synthetic":true,"types":[]},{"text":"impl Freeze for StateCallReq","synthetic":true,"types":[]},{"text":"impl Freeze for StorageSizeRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHeaderReq","synthetic":true,"types":[]},{"text":"impl Freeze for RemoveExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Freeze for StorageKeysReq","synthetic":true,"types":[]},{"text":"impl Freeze for StorageQueryReq","synthetic":true,"types":[]},{"text":"impl Freeze for RemoveExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHashRes","synthetic":true,"types":[]},{"text":"impl Freeze for StorageKeysRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetBestHeadReq","synthetic":true,"types":[]},{"text":"impl Freeze for BlockHash","synthetic":true,"types":[]},{"text":"impl Freeze for StorageHashRes","synthetic":true,"types":[]},{"text":"impl Freeze for RemoveExtrinsic","synthetic":true,"types":[]},{"text":"impl Freeze for StorageQuery","synthetic":true,"types":[]},{"text":"impl Freeze for StorageHash","synthetic":true,"types":[]},{"text":"impl Freeze for PendingExtrinsics","synthetic":true,"types":[]},{"text":"impl Freeze for StorageKeys","synthetic":true,"types":[]},{"text":"impl Freeze for SystemHealth","synthetic":true,"types":[]},{"text":"impl Freeze for SubmitExtrinsic","synthetic":true,"types":[]},{"text":"impl Freeze for GetFinalizedHead","synthetic":true,"types":[]},{"text":"impl Freeze for StateCall","synthetic":true,"types":[]},{"text":"impl Freeze for StorageSize","synthetic":true,"types":[]},{"text":"impl Freeze for GetBestHead","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHash","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlock","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHeader","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()